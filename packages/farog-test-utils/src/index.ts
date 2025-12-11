export function withMockRequest(url: string = "http://localhost"): Request {
  return new Request(url);
}
