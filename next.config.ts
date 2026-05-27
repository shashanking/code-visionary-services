import type { NextConfig } from 'next';

const config: NextConfig = {
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  webpack(config) {
    // Make image imports return plain string URLs (asset/resource) instead of
    // StaticImageData objects. All components use <img src={imported}> and
    // backgroundImage: `url(${imported})` — both need strings, not objects.
    const imageRule = config.module.rules.find(
      (rule: any) => rule.oneOf
    );
    if (imageRule?.oneOf) {
      imageRule.oneOf.forEach((rule: any) => {
        if (
          rule.test instanceof RegExp &&
          rule.test.test('.webp') &&
          rule.type === 'asset'
        ) {
          rule.type = 'asset/resource';
        }
      });
    }
    // Explicit fallback rule for all static image formats
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp|avif|ico)$/i,
      type: 'asset/resource',
      resourceQuery: { not: [/url/] },
    });
    return config;
  },
};

export default config;
