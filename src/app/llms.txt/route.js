// llms.txt: a plain-text map of the site for AI search tools (ChatGPT, Perplexity, Claude, etc.).
import { getPublishedPosts } from '../blog/posts';
import { getNeighborhoods } from '../san-clemente-neighborhoods/neighborhoods';

const SITE = 'https://www.jacobhazzardrealestate.com';

export async function GET() {
  const guides = getNeighborhoods()
    .map((n) => `- [${n.name}, San Clemente neighborhood guide](${SITE}/san-clemente-neighborhoods/${n.slug}): ${n.summary}`)
    .join('\n');
  const posts = getPublishedPosts()
    .slice(0, 20)
    .map((p) => `- [${p.title}](${SITE}/blog/${p.slug}) (${p.date}): ${p.excerpt}`)
    .join('\n');

  const body = `# Jacob Hazzard, REALTOR® | Luxre Realty

> San Clemente native and REALTOR® with Luxre Realty, Inc. (CA DRE #02222037; brokerage CA DRE #01897290), office at 222 Avenida Del Mar, San Clemente, CA. Helps buyers and sellers across San Clemente and Orange County. Phone (949) 291-9395, jacob@hazzardestates.com.

## San Clemente neighborhood guides
- [Best neighborhoods in San Clemente](${SITE}/san-clemente-neighborhoods): hub linking every neighborhood guide
${guides}

## Weekly San Clemente market notes
- [All market notes](${SITE}/blog)
${posts}

## Orange County relocation guides
- [OC Relocation Guide](${SITE}/oc-relocation-guide)
- [South OC](${SITE}/oc-relocation-guide/south-oc)
- [Central OC](${SITE}/oc-relocation-guide/central-oc)
- [North OC](${SITE}/oc-relocation-guide/north-oc)
- [East OC](${SITE}/oc-relocation-guide/east-oc)

## Services
- [Selling / home valuation](${SITE}/sell)
- [Buying](${SITE}/buy)
- [About Jacob](${SITE}/about)
- [Contact](${SITE}/contact)
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
