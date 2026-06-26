/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: true,
        defaultValue: "reader",
      },
    },
  },
};

export default nextConfig;
