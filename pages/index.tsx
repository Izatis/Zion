import { Inter } from "next/font/google";

import Hero from "@/components/Hero/Hero";
import Direction from "@/components/Direction/Direction";
import Comfort from "@/components/Comfort/Comfort";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Direction />
      <Comfort/>
    </>
  );
}
