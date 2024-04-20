import type { APIEvent } from "@solidjs/start/server";
import { client } from "~/server/main";

export const GET = (event: APIEvent) => client().api.index.get({
  fetch: event.request,
  query: event.params
})
