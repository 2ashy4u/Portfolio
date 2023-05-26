/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// next.config.js

module.exports = {
  output: {
    // Set the export target to "static" for static HTML export
    // Other options include "server" for server-rendered export
    export: 'static',
  },
};
