export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.pathname === "/cart") {
    return new Response("Interdit d'accès direct sans être authentifié. Interception edge function pas de worker", {
      status: 403,
      headers: { "Content-Type": "text/plain; charset=utf-8"},
    });
  }

  // Toutes les autres routes continuent normalement
  return context.next();
}
