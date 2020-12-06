const { COMMUNITY_URL } = process.env

module.exports = {
  rewrites() {
    return [
      {
        source: '/community',
        destination: `${COMMUNITY_URL}/community`
      },
      {
        source: '/blog/:path*',
        destination: `${COMMUNITY_URL}/community/:path*`
      }
    ]
  }
}
