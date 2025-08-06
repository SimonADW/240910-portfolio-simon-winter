export default async (request, context) => {
  const botUserAgents = [
    "googlebot", "bingbot", "yahoo", "facebookexternalhit", "twitterbot",
    "linkedinbot", "embedly", "quora link preview", "showyoubot", "outbrain",
    "pinterest", "slackbot", "vkShare", "W3C_Validator", "redditbot", "Applebot", "WhatsApp"
  ];

  const ua = request.headers.get("user-agent")?.toLowerCase() || "";
  const isBot = botUserAgents.some(bot => ua.includes(bot));

  const url = new URL(request.url);
  const pathname = url.pathname;

  if (isBot && pathname === "/") {
    return new Response(
      `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <!-- Primary Meta Tags -->
          <title>Simon Winter - Frontend Developer</title>
          <meta name="title" content="Simon Winter - Frontend Developer" />
          <meta name="description" content="Frontend Developer with experience in React, TypeScript, and modern web technologies. Bringing sharp attention to detail and strong problem-solving skills from The Royal Palace to web development." />
          
          <!-- Open Graph / Facebook -->
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://simonwinter.no/" />
          <meta property="og:title" content="Simon Winter - Frontend Developer" />
          <meta property="og:description" content="Frontend Developer with experience in React, TypeScript, and modern web technologies. Bringing sharp attention to detail and strong problem-solving skills from The Royal Palace to web development." />
          <meta property="og:image" content="https://simonwinter.no/profile-cartoon-wide.jpg" />
          <meta property="og:image:alt" content="Simon Winter - Frontend Developer" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="Simon Winter - Frontend Developer" />
          
          <!-- Twitter -->
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://simonwinter.no/" />
          <meta property="twitter:title" content="Simon Winter - Frontend Developer" />
          <meta property="twitter:description" content="Frontend Developer with experience in React, TypeScript, and modern web technologies. Bringing sharp attention to detail and strong problem-solving skills from The Royal Palace to web development." />
          <meta property="twitter:image" content="https://simonwinter.no/profile-cartoon-fixed.jpg" />
          <meta property="twitter:image:alt" content="Simon Winter - Frontend Developer" />
        </head>
        <body>
          <h1>Simon Winter - Frontend Developer</h1>
          <p>This page is shown to bots for rich preview purposes.</p>
        </body>
      </html>`,
      {
        status: 200,
        headers: {
          "Content-Type": "text/html",
        },
      }
    );
  }

  // All other cases = fall back to SPA
  return context.next();
};

export const config = {
  path: "/",
};