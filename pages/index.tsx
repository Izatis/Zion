import { Inter } from "next/font/google";
import Direction from "@/components/Direction/Direction";

import Hero from "@/components/Hero/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Direction />
    </>
  );
}
