import { Elysia } from "elysia";


export const setup = (prefix: string) => new Elysia<typeof prefix>({
    prefix: prefix,
})