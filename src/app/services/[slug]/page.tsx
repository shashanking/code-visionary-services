import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { servicePageData } from '../../../data/servicePageData';
import ServiceHero from '../../../components/ServiceDetailPage/ServiceHero';
import ServiceOverview from '../../../components/ServiceDetailPage/ServiceOverview';
import ServiceFeatures from '../../../components/ServiceDetailPage/ServiceFeatures';
import ServiceProcess from '../../../components/ServiceDetailPage/ServiceProcess';
import ServiceTechStack from '../../../components/ServiceDetailPage/ServiceTechStack';
import ServiceWhyUs from '../../../components/ServiceDetailPage/ServiceWhyUs';
import ServiceFAQ from '../../../components/ServiceDetailPage/ServiceFAQ';
import ServiceCTABanner from '../../../components/ServiceDetailPage/ServiceCTABanner';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return Object.keys(servicePageData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const data = servicePageData[params.slug];
  if (!data) return { title: 'Service | Code Visionary Services' };

  const { title, description, canonical } = data.metadata;
  const SITE = 'https://codevisionaryservices.com';

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: 'website',
      siteName: 'Code Visionary Services',
      title,
      description,
      url: canonical,
      images: [`${SITE}/og-image.png`],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE}/og-image.png`],
    },
  };
}

export default function ServiceDetailPage({ params }: PageProps) {
  const data = servicePageData[params.slug];
  if (!data) notFound();

  return (
    <>
      <ServiceHero {...data.hero} />
      <ServiceOverview {...data.overview} />
      <ServiceFeatures {...data.features} />
      <ServiceProcess {...data.process} />
      <ServiceTechStack tools={data.techStack} />
      <ServiceWhyUs />
      <ServiceFAQ faqs={data.faq.faqs} />
      <ServiceCTABanner serviceName={data.ctaBannerName} />
    </>
  );
}
