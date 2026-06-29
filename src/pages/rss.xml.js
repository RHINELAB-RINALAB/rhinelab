import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../config/site';

export async function GET(context) {
  const items = (await getCollection('announcements', (e) => !e.data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  return rss({
    title: `${site.name} — News`,
    description: site.tagline,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.pubDate,
      categories: [item.data.category].filter(Boolean),
      link: `/announcements/${item.id}/`,
    })),
    customData: `<language>en</language>`,
  });
}
