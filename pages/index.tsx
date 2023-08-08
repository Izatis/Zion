import { Inter } from "next/font/google";
import Direction from "@/components/Direction/Direction";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <>
        <Direction/>
      </>
  );
}
