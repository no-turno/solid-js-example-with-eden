import { treaty } from "@elysiajs/eden";
import { type Api, api } from "./api";
import { setup } from "./api/setup";

const app = api(setup, { prefix: "/api" });

export const client = () => treaty<Api>(app)
