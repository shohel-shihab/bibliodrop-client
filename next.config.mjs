/** @type {import('next').NextConfig} */
const nextConfig = {
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
