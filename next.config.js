/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI: "mongodb+srv://ramdhanihendrie:bIPf5y0fi38zsIsl@cluster0.aiedc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig