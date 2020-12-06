const { COMMUNITY_URL } = process.env

module.exports = {
  rewrites() {
    return [
      {
        source: '/community',
        destination: `${COMMUNITY_URL}/community`
      },
      {
        source: '/community/:path*',
        destination: `${COMMUNITY_URL}/community/:path*`
      }
    ]
  }
}
