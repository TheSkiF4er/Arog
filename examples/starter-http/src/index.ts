import { serve } from "farog/http";

serve({ port: 8080 }, async (request) => {
  const url = new URL(request.url);
  return new Response(`Farog starter-http: ${url.pathname}`);
});
