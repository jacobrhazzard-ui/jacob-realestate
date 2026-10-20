// Website lead intake: sends each form submission to Follow Up Boss (as an
// event, so FUB creates/updates the contact and fires automations) and keeps
// the original Formspree email notification as a backup.
//
// Requires the Vercel environment variable FUB_API_KEY (Follow Up Boss →
// Admin → API). Without it, leads still go to Formspree by email.

const FORMSPREE = {
  seller: 'https://formspree.io/f/xgvzprll',
  buyer: 'https://formspree.io/f/xnnzoeen',
};

function splitName(full = '') {
  const parts = full.trim().split(/\s+/);
  return { firstName: parts[0] || '', lastName: parts.slice(1).join(' ') };
}

function buildEvent(kind, d) {
  const names = d.firstName || d.lastName
    ? { firstName: d.firstName || '', lastName: d.lastName || '' }
    : splitName(d.name);
  const person = {
    ...names,
    emails: d.email ? [{ value: d.email }] : [],
    phones: d.phone ? [{ value: d.phone }] : [],
    tags: kind === 'seller' ? ['Seller Lead', 'Website - Home Value'] : ['Buyer Lead', 'Website - Buyer Inquiry'],
  };
  const lines = Object.entries(d)
    .filter(([k, v]) => v && !['firstName', 'lastName', 'name', 'email', 'phone', 'kind'].includes(k))
    .map(([k, v]) => `${k}: ${v}`);
  const event = {
    source: 'jacobhazzardrealestate.com',
    system: 'JH Website',
    type: kind === 'seller' ? 'Seller Inquiry' : 'General Inquiry',
    message: lines.join('\n'),
    description: kind === 'seller' ? 'Home value request from website' : 'Buyer inquiry from website',
    person,
  };
  if (kind === 'seller' && d.address) {
    event.property = { street: d.address, city: d.city || '', state: 'CA', code: d.zipCode || '' };
  }
  return event;
}

export async function POST(req) {
  let data;
  try {
    data = await req.json();
  } catch {
    return Response.json({ ok: false, error: 'bad request' }, { status: 400 });
  }
  const kind = data.kind === 'buyer' ? 'buyer' : 'seller';
  const results = {};

  const key = process.env.FUB_API_KEY;
  if (key) {
    try {
      const r = await fetch('https://api.followupboss.com/v1/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic ' + Buffer.from(key + ':').toString('base64'),
          'X-System': 'JH-Website',
        },
        body: JSON.stringify(buildEvent(kind, data)),
      });
      results.fub = r.status;
    } catch (e) {
      results.fub = 'error';
    }
  }

  try {
    const r = await fetch(FORMSPREE[kind], {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...data, _subject: kind === 'seller' ? 'New Home Value Request' : 'New Home Buyer Inquiry' }),
    });
    results.formspree = r.status;
  } catch (e) {
    results.formspree = 'error';
  }

  const ok = (results.fub >= 200 && results.fub < 300) || (results.formspree >= 200 && results.formspree < 300);
  return Response.json({ ok, results }, { status: ok ? 200 : 502 });
}
