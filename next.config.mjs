/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'ppmizsdaagwxepjukjgx.supabase.co',
            port: '',
            pathname: '**',
        }],
    },
};

export default nextConfig;


