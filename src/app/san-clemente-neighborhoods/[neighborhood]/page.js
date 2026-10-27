import { notFound } from 'next/navigation';
import GuideView, { guideMetadata } from '../guideView';
import { getSanClementeNeighborhoods } from '../neighborhoods';

export const dynamicParams = false;

export function generateStaticParams() {
  const list = getSanClementeNeighborhoods();
  return list.length ? list.map((n) => ({ neighborhood: n.slug })) : [{ neighborhood: '_none' }];
}

export async function generateMetadata({ params }) {
  const { neighborhood } = await params;
  return guideMetadata(getSanClementeNeighborhoods().find((n) => n.slug === neighborhood));
}

export default async function Page({ params }) {
  const { neighborhood } = await params;
  const n = getSanClementeNeighborhoods().find((x) => x.slug === neighborhood);
  if (!n) notFound();
  return <GuideView n={n} />;
}
