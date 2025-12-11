export interface ServeOptions {
  port: number;
}

export type Handler = (request: Request) => Promise<Response> | Response;

/**
 * Простейшая заглушка HTTP-интерфейса Farog.
 * В реальной реализации здесь будет интеграция с C++ рантаймом.
 */
export function serve(options: ServeOptions, handler: Handler): void {
  console.log(`Farog HTTP server listening on port ${options.port} (заглушка).`);
}
