import { Title } from "@solidjs/meta";
import { createAsync } from "@solidjs/router";
import { client } from "~/server/main";

export default function Home() {
  const readme = createAsync(() => client().api.index.get());
  return (
    <main>
      <Title>Hello World</Title>
      <pre>
        <code>{readme()?.data}</code>
      </pre>
    </main>
  );
}
