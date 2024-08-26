"use client";
import React from 'react';
import Image from 'next/image';
import { Law } from '@/types';

interface LawCardProps {
  law: Law;
}

const LawCard: React.FC<LawCardProps> = ({ law }) => {


  return (
    <div className={`flex p-[2px] m-0 rounded shadow-md relative group w-full `}>
      {/* Imagem de Fundo usando o componente Image */}
      <Image src="/imgs/fundolei.png" alt="Fundo Lei" className="h-[70px]" width={350} height={64} />
      {/* Conteúdo do Card */}
      <div className="absolute top-0 left-0 p-2 w-full h-full flex items-start">
        <div className='flex justify-center align-middle pt-[3px]'>
          <Image src={"/imgs/laws/Law_"+law.name.replace(/ /g, '_').toLowerCase()+".png"} alt={"Icon Law"+law.name.replace(/ /g, '_').toLowerCase()} className="h-[50px]" width={50} height={40}/>    
        </div>
        <div className='flex flex-col ml-2'>
          <span className='text-xs text-[#857870] text-border'>{law.id}</span>
          <h1 className={`mt-[-2px] text-base text-[#eff2e0] font-bold text-border`}>{law.name}</h1>
        </div>
      </div>
      {/* Pop-up */}
      <div className='absolute z-10 hidden group-hover:block border border-[#7f6a45] p-4 rounded shadow-lg -top-2 right-full mr-2 w-64' style={{
        background: 'linear-gradient(-45deg, #1e1819, #272021, #282022, #433437)',
        backgroundSize: 'cover', // Ajusta a textura para cobrir todo o contêiner
        backgroundBlendMode: 'overlay' // Mescla a textura com o gradiente
      }}>
        <div className='flex align-middle items-center'>

          <div className="w-[40px] h-[40px] rounded-full bg-[#303030] border-2 border-[#80663af4] flex items-center justify-center mt-[-10px] mr-1 ml-[-10px]">
            <Image src={"/imgs/laws/Law_"+law.name.replace(/ /g, '_').toLowerCase()+".png"} alt={"Icon Law"+law.name.replace(/ /g, '_').toLowerCase()} className="h-[30px] w-[30px]" width={30} height={30}/>
          </div>
          <p className={`mb-2 ml-2 mt-[-5px] font-bold`}>{law.name}</p>
        </div>
        <p className={`mb-2 text-[#a4a09c]`}>{law.desc}</p>
        {law.promulgates && law.promulgates.length > 0 && (
          <div>
            <h3 className={`text-sm font-semibold text-[#ce8f61]`}>Promulgates:</h3>
            <ul>
              {law.promulgates.map((item, index) => (
                <li key={index} className={`ml-4 text-[#cdc8c3]`}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        {law.blocks && law.blocks.length > 0 && (
          <div>
            <h3 className={`text-sm font-semibold text-[#ce6161]`}>Blocks:</h3>
            <ul>
              {law.blocks.map((item, index) => (
                <li key={index} className={`ml-4 text-[#cdc8c3]`}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default LawCard;
