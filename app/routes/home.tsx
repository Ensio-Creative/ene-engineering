import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ene Engineering" },
    { name: "description", content: "Welcome to Ene Engineering!" },
  ];
}

export default function Home() {
  return <>
   hello world
  </>;
}
