import type { Metadata } from 'next';
import PrivacyPolicyPage from '../../components/Layout/PrivacyPolicy';

const SITE_URL = 'https://codevisionaryservices.com';

export const metadata: Metadata = {
  title: 'Privacy Policy — Code Visionary Services',
  description: 'Read the Code Visionary Services privacy policy to understand how we collect, use, and protect your personal information.',
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  openGraph: {
    title: 'Privacy Policy — Code Visionary Services',
    url: `${SITE_URL}/privacy-policy`,
  },
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyPage />;
}
