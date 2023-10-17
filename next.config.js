/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PUBLIC_URL: ''
  },
  transpilePackages: ["ol", "quick-lru"],
  experimental: {
    craCompat: false,
  },
  // Remove this to leverage Next.js' static image handling
  // read more here: https://nextjs.org/docs/api-reference/next/image
  // images: {
  //   disableStaticImages: true
  // }  
  output: "standalone"
}

module.exports = nextConfig
