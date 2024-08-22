import Image from "next/image";
import LawList from "@/components/LawList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="main">
        Listas
        <LawList/>
      </div>
    </main>
  );
}


