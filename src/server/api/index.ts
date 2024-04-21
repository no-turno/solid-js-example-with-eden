import { setup } from "./setup";

export const api = (app: typeof setup,) => app.get("/", async () => {
    return Bun.file("README.md").text()
});

export default api(setup);
