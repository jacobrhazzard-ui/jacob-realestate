// Blog posts. Newest first is handled automatically (sorted by date).
// To add a post: copy one entry, give it a unique slug, and set published: true
// once Jacob has approved it. Unpublished posts never appear on the site.
//
// body blocks:
//   { type: 'h2', text: '...' }
//   { type: 'p', text: '...' }
//   { type: 'list', items: ['...', '...'] }
//   { type: 'source', text: 'Source: ...', href: 'https://...' }

export const posts = [];

export function getPublishedPosts() {
  return posts
    .filter((p) => p.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug) {
  return getPublishedPosts().find((p) => p.slug === slug);
}

export function formatDate(iso) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
