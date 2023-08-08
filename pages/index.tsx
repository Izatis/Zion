import { Inter } from "next/font/google";
import Direction from "@/components/Direction/Direction";
import Comfort from "@/components/Comfort/Comfort";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <>
          <Direction/>
          <Comfort/>
      </>
  );
}
