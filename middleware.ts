import { next } from "@vercel/edge";

export const config = {
  matcher: "/((?!_next|api|assets|\\..*$).*)",
};

const BOT_UA = /googlebot|bingbot|yandex|baiduspider|facebookexternalhit|twitterbot|linkedinbot|embedly|quora link preview|showyoubot|outbrain|slackbot|vkshare|w3c_validator|redditbot|applebot|whatsapp|flipboard|tumblr|bitlybot|skypeuripreview|nuzzel|discordbot|google page speed|qwantify|pinterestbot|bitrix link preview|xing-contenttabreceiver|chrome-lighthouse|telegrambot|integration-test|petalbot|duckduckbot|seoptimer|ahrefsbot|semrushbot|mj12bot|dotbot|rogerbot|exabot|ia_archiver|screaming frog|sitebulb|magestic|cognitiveseo|deepcrawl|oncrawl|botify|lumar|woorank|nibbler|siteimprove/i;

const ASSET_EXT = /\.(js|css|json|xml|png|jpg|jpeg|gif|webp|avif|svg|ico|woff|woff2|ttf|eot|mp4|webm|pdf|zip|txt|map)$/i;

export default async function middleware(request: Request) {
  const ua = request.headers.get("user-agent") || "";
  const url = new URL(request.url);

  if (!BOT_UA.test(ua) || ASSET_EXT.test(url.pathname)) {
    return next();
  }

  const prerenderUrl = `https://service.prerender.io/${url.href}`;
  const res = await fetch(prerenderUrl, {
    headers: {
      "X-Prerender-Token": process.env.PRERENDER_TOKEN || "",
      "User-Agent": ua,
    },
    redirect: "manual",
  });

  return new Response(res.body, {
    status: res.status,
    headers: res.headers,
  });
}
