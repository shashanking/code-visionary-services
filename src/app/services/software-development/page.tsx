import type { Metadata } from 'next';
import { servicePageData } from '../../../data/servicePageData';
import ServiceHero from '../../../components/ServiceDetailPage/ServiceHero';
import ServiceOverview from '../../../components/ServiceDetailPage/ServiceOverview';
import ServiceFeatures from '../../../components/ServiceDetailPage/ServiceFeatures';
import ServiceProcess from '../../../components/ServiceDetailPage/ServiceProcess';
import ServiceTechStack from '../../../components/ServiceDetailPage/ServiceTechStack';
import ServiceWhyUs from '../../../components/ServiceDetailPage/ServiceWhyUs';
import ServiceFAQ from '../../../components/ServiceDetailPage/ServiceFAQ';
import ServiceCTABanner from '../../../components/ServiceDetailPage/ServiceCTABanner';

const data = servicePageData['software-development'];

export const metadata: Metadata = {
  title: data.metadata.title,
  description: data.metadata.description,
  alternates: { canonical: data.metadata.canonical },
  openGraph: {
    type: 'website',
    siteName: 'Code Visionary Services',
    title: data.metadata.title,
    description: data.metadata.description,
    url: data.metadata.canonical,
    images: ['https://codevisionaryservices.com/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: data.metadata.title,
    description: data.metadata.description,
    images: ['https://codevisionaryservices.com/og-image.png'],
  },
};

export default function SoftwareDevelopmentPage() {
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
