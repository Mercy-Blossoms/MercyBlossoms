/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // In production, previews/free pages are served from a public S3 bucket
    // (or CloudFront in front of it) and full purchased volumes are served
    // from a private bucket via signed URLs. See lib/catalog.ts.
    //
    // S3 virtual-hosted-style URLs look like:
    //   https://BUCKET.s3.REGION.amazonaws.com/...   (region-specific, most common)
    //   https://BUCKET.s3.amazonaws.com/...           (us-east-1 legacy form)
    // Both patterns are covered below so this file doesn't need hand-editing
    // per region again.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.s3.*.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "*.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "*.cloudfront.net",
      },
    ],
  },
};

module.exports = nextConfig;
