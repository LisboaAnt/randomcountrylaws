import Image from "next/image";
import {laws} from "../js/Laws";
import {sortearTodasLeis } from "../js/sortearleis";
import LawsOverview from "@/components/LawsOverview";

export default function Home() {


  const todasLeis: any = sortearTodasLeis(laws); 

  return (
    <main className=" ">
      <div className="" style={{ backgroundImage: 'url("/imgs/bg.png")'}}>
        <LawsOverview laws={todasLeis} additionalInfo={""} />
      </div>
    </main>
  );
}


