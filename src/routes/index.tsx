import { Title } from "@solidjs/meta";
import { createAsync } from "@solidjs/router";
import { handler } from "~/lib/api";

const loadData = async () => {
  "use server";
  return await handler().index.get();
};

export default function Home() {
  const data = createAsync(() => loadData());
  return (
    <main>
      <Title>Hello World</Title>
      <pre>
        <code>{data()?.data}</code>
      </pre>
    </main>
  );
}
