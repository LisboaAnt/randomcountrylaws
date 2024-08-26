import React from 'react';
import Image from 'next/image';
import { Law } from '@/types';

interface LawCardProps {
  law: Law;
}

const LawCard: React.FC<LawCardProps> = ({ law }) => {
    console.log(law.name)
  return (
    <div className={`flex p-[2px] m-0 rounded shadow-md relative group w-full font-garamond`}>
      {/* Imagem de Fundo usando o componente Image */}
      <Image src="/imgs/fundolei.png" alt="Fundo Lei" className="h-[70px]" width={350} height={64} />
      {/* Conteúdo do Card */}
      <div className="absolute top-0 left-0 p-2 w-full h-full flex items-start">
        <div className='flex justify-center align-middle pt-[3px]'>
          <Image src={`/imgs/Law_${law.name.replace(/ /g, '_')}.png`} alt="Icon Law" className="h-[50px]" width={50} height={40}/>
          
        </div>
        <div className='flex flex-col ml-2'>
          <span className='text-xs text-[#857870] text-border'>{law.id}</span>
          <h1 className={`mt-[-2px] text-base text-[#eff2e0] font-bold text-border`}>{law.name}</h1>
        </div>
      </div>
      {/* Pop-up */}
      <div className='absolute z-10 hidden group-hover:block bg-black border border-gray-300 p-4 rounded shadow-lg -top-2 right-full mr-2 w-64'>
        <p className={`mb-2`}>Desc: {law.desc}</p>
        {law.promulgates && law.promulgates.length > 0 && (
          <div>
            <h3 className={`text-sm font-semibold`}>Promulgates:</h3>
            <ul>
              {law.promulgates.map((item, index) => (
                <li key={index} className={`ml-4`}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        {law.blocks && law.blocks.length > 0 && (
          <div>
            <h3 className={`text-sm font-semibold`}>Blocks:</h3>
            <ul>
              {law.blocks.map((item, index) => (
                <li key={index} className={`ml-4`}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default LawCard;
