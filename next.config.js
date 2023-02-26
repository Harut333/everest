/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    webpack5: true,
    // webpack: (config) => {
    //     config.resolve.fallback = {
    //         fs: false,
    //         dns: 'empty',
    //     };
    //     return config;
    // },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback.fs = false
            config.resolve.fallback.dns = false
            config.resolve.fallback.net = false
            config.resolve.fallback.tls = false
            config.resolve.fallback.child_process =false

        }

        return config;
    },
    testEnvironment: 'jsdom'
}

module.exports = nextConfig
