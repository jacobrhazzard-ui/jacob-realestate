import { notFound } from 'next/navigation';
import GuideView, { guideMetadata } from '../../san-clemente-neighborhoods/guideView';
import { getCities } from '../../san-clemente-neighborhoods/neighborhoods';

export const dynamicParams = false;

export function generateStaticParams() {
  const list = getCities();
  return list.length ? list.map((n) => ({ city: n.slug })) : [{ city: '_none' }];
}

export async function generateMetadata({ params }) {
  const { city } = await params;
  return guideMetadata(getCities().find((n) => n.slug === city));
}

export default async function Page({ params }) {
  const { city } = await params;
  const n = getCities().find((x) => x.slug === city);
  if (!n) notFound();
  return <GuideView n={n} />;
}
