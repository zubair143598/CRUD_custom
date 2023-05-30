
import Homee from "@/pages/Homee";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>cread-redux</title>
      </Head>

      <main className="bg-gradient-to-r from-black to-red-700 text-white">
        <Homee/>
        
      </main>
    </>
  );
}
