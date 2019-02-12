const getConfig = () => {
  const config = {
    baseUrl: 'http://localhost:3002',
    appId: '1',
    appKey: 'c702755043e60135bfe5021e75abe44c',
    channelId: '13f11433-0ab6-450c-a08d-e38938679de1',
    token: '033545ad-c128-4fc6-8206-cd248feacacd',
  }

  return {
    baseURL: config.baseUrl,
    headers: {
      'Accept-Language': 'en-US',
      'X-Organization-Slug': 'evertondenis',
      'X-Application-Id': config.appId,
      'X-Channel-Id': config.channelId,
      Authorization: `Deflate-Bearer ${config.token}`,
    },
  }
}

export default getConfig
