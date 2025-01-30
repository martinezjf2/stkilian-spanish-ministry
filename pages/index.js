import Image from "next/image";
import { Inter } from "next/font/google";
import Jumbotron from "@/components/partial/Jumbotron";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Jumbotron />
      <div className="p-10 text-center">
        <h2 className="text-3xl font-bold">Welcome to Our Spanish Community</h2>
        <p className="mt-4 text-lg">
          We are dedicated to fostering growth, community, and faith through
          action.
        </p>
      </div>
    </>
  );
}
