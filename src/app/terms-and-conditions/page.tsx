import type { Metadata } from 'next';
import TermsAndConditionsPage from '../../components/Layout/TermsAndConditions';

const SITE_URL = 'https://codevisionaryservices.com';

export const metadata: Metadata = {
  title: 'Terms and Conditions — Code Visionary Services',
  description: 'Read the terms and conditions for using Code Visionary Services.',
  alternates: { canonical: `${SITE_URL}/terms-and-conditions` },
  openGraph: {
    title: 'Terms and Conditions — Code Visionary Services',
    url: `${SITE_URL}/terms-and-conditions`,
  },
};

export default function TermsAndConditions() {
  return <TermsAndConditionsPage />;
}
