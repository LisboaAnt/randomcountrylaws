import Image from "next/image";
import {laws} from "../js/Laws";
import {sortearTodasLeis } from "../js/sortearleis";
import LawsOverview from "@/components/LawsOverview";

export default function Home() {


const todasLeis = sortearTodasLeis(laws);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="main">
        Listas
        <LawsOverview laws={todasLeis} additionalInfo={""} />
      </div>
    </main>
  );
}


