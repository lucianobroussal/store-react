export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.pathname === "/cart") {
    return new Response("Interdit", {
      status: 403,
      headers: { "Content-Type": "text/plain" },
    });
  }

  // Toutes les autres routes continuent normalement
  return context.next();
}
