import Image from "next/image";
import {laws} from "../js/Laws";
import {sortearTodasLeis } from "../js/sortearleis";
import LawsOverview from "@/components/LawsOverview";

export default function Home() {


const todasLeis = sortearTodasLeis(laws);

  return (
    <main className=" ">
      <div className="">
        Listas
        <LawsOverview laws={todasLeis} additionalInfo={""} />
      </div>
    </main>
  );
}


