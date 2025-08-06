export default async (request, context) => {
  const userAgent = request.headers.get('user-agent') || '';
  
  // Check if the request is from a social media crawler
  const isCrawler = /facebookexternalhit|twitterbot|linkedinbot|whatsapp|telegrambot|slackbot|discordbot/i.test(userAgent);
  
  if (isCrawler) {
    // Return pre-rendered HTML with Open Graph tags for crawlers
    const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/jpeg" href="/profile-cartoon.jpeg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Primary Meta Tags -->
    <title>Simon Winter - Frontend Developer</title>
    <meta name="title" content="Simon Winter - Frontend Developer" />
    <meta name="description" content="Frontend Developer with skills in React, TypeScript, and modern web technologies. Bringing sharp attention to detail and strong problem-solving skills from The Royal Palace to web development." />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://simonwinter.no/" />
    <meta property="og:title" content="Simon Winter - Frontend Developer" />
    <meta property="og:description" content="Frontend Developer with skills in React, TypeScript, and modern web technologies. Bringing sharp attention to detail and strong problem-solving skills from The Royal Palace to web development." />
    <meta property="og:image" content="https://simonwinter.no/profile-cartoon-wide.jpg" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Simon Winter - Frontend Developer" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:site_name" content="Simon Winter - Frontend Developer" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://simonwinter.no/" />
    <meta property="twitter:title" content="Simon Winter - Frontend Developer" />
    <meta property="twitter:description" content="Frontend Developer with skills in React, TypeScript, and modern web technologies. Bringing sharp attention to detail and strong problem-solving skills from The Royal Palace to web development." />
    <meta property="twitter:image" content="https://simonwinter.no/profile-cartoon-wide.jpg" />
    <meta property="twitter:image:alt" content="Simon Winter - Frontend Developer" />
  </head>
  <body>
    <div id="root">
      <h1>Simon Winter - Frontend Developer</h1>
      <p>Frontend Developer with skills in React, TypeScript, and modern web technologies. Bringing sharp attention to detail and strong problem-solving skills from The Royal Palace to web development.</p>
    </div>
  </body>
</html>`;

    return new Response(html, {
      headers: {
        'content-type': 'text/html; charset=utf-8',
      },
    });
  }
  
  // For regular users, let the request pass through to the normal site
  return context.next();
};

export const config = {
  path: "/",
};
