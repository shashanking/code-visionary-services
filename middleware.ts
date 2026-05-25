export const config = {
  matcher: '/((?!_vercel|.*\\..*).*)',
}

const BOT_AGENTS = [
  'googlebot', 'bingbot', 'baiduspider', 'yandex', 'duckduckbot',
  'facebookexternalhit', 'linkedinbot', 'twitterbot', 'slackbot',
  'whatsapp', 'discordbot', 'telegrambot', 'applebot', 'redditbot',
  'rogerbot', 'embedly', 'quora link preview', 'showyoubot',
  'outbrain', 'pinterestbot', 'w3c_validator', 'google page speed',
  'chrome-lighthouse', 'screaming frog',
]

export default async function middleware(request: Request): Promise<Response | undefined> {
  const ua = (request.headers.get('user-agent') ?? '').toLowerCase()
  const isBot = BOT_AGENTS.some(bot => ua.includes(bot))

  if (!isBot) return undefined

  const { pathname, search } = new URL(request.url)
  const targetUrl = `https://codevisionaryservices.com${pathname}${search}`
  const token = process.env.PRERENDER_TOKEN ?? 'hBop6h64kyjUNwREyDLu'

  return fetch(`https://service.prerender.io/${targetUrl}`, {
    headers: { 'X-Prerender-Token': token },
  })
}
