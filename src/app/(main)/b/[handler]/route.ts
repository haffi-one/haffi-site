export async function GET(request: Request) {
  const match = request.url.match(/@([^\/]+|$)/);
  if (!match) {
    return;
  }
  const chatLinkUrl =
    "https://kuhw8l4ake.execute-api.us-east-1.amazonaws.com/api/business/chat_link/" +
    match[1];
  console.log("chat_link_url", chatLinkUrl);
  const response = await fetch(chatLinkUrl, {
    method: "post",
    redirect: "manual",
  });

  const redirectUrl = response.headers.get("location");

  // we expect a redirect
  if (response.status != 302 || !redirectUrl) {
    return;
  }

  // we will redirect ourselves (kinda like a proxy)
  return new Response("Hello, Next.js!", {
    status: 302,
    headers: { Location: redirectUrl },
  });
}
