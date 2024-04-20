import { setup } from "./setup";

export const api = (app: typeof setup, { prefix }: { prefix: string }) => app(prefix).get("/", async () => {
    return Bun.file("README.md").text()
});

export type Api = ReturnType<typeof api>;
