/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/',            
        destination: '/pages/landing',  
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
