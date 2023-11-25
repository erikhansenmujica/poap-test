import { Collections } from "./components/Collections";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export default async function Home() {
  return (
    <main className={comfortaa.className}>
      <Collections />
    </main>
  );
}
