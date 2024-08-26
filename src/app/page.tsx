"use client"; // Adicione isso para tornar o componente um Client Component

import { laws } from "../js/Laws";
import { sortearTodasLeis } from "../js/sortearleis";
import LawsOverview from "@/components/LawsOverview";
import BtnReload from "../components/BtnReload";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  console.log("Home component rendered"); 
  const [todasLeis, setTodasLeis] = useState<any>([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchLeis = async () => {
      const novasLeis = sortearTodasLeis(laws);
      setTodasLeis(novasLeis);
      setLoading(false); 
    };
    
    fetchLeis();
  }, []); 

  const handleSortearLeis = () => {
    const novasLeis = sortearTodasLeis(laws);
    setTodasLeis(novasLeis);
  };

  return (
    <main className="">
      <div className="min-h-screen font-garamond" style={{ backgroundImage: 'url("/imgs/bg.png")' }}>
        {loading ? (
          <div className="flex justify-center min-h-screen">
              <Image className="pb-80" src={"/imgs/RandomLawsLogo.png"} alt="Carregando..." width={"1000"} height={"1000"}/>
          </div>
        ) : (
          <div className="home">
            <LawsOverview laws={todasLeis} handleSortearLeis={handleSortearLeis} additionalInfo={""} />
          </div>
        )}
      </div>
    </main>
  );
}
