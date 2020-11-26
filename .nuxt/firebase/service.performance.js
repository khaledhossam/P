

export default async function (session) {
  // Firebase Performance can only be initiated on client side
  if (!process.client) {
    return
  }

  await import(/* webpackChunkName: 'firebase-performance' */'firebase/performance')

  const performanceService = session.performance()
  return performanceService
}
