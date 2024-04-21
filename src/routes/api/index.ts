import type { APIEvent } from "@solidjs/start/server";
import { handler } from "~/lib/api";

const router = handler()

export const GET = (event: APIEvent) => router.index.get({
  fetch: event.request,
  query: event.params
})
