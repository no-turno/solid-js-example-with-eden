import { treaty } from "@elysiajs/eden";
import api from "~/server/api";

export const handler = () => treaty<typeof api>(api)
