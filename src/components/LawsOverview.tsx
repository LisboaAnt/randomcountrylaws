import React from 'react';
import Image from 'next/image'; // Importando o componente Image do Next.js
import { LawsOverviewProps, Law } from '@/types';

const LawsOverview: React.FC<LawsOverviewProps> = ({ laws, additionalInfo }) => {
  const powerStructureIds = [
    'GovernancePrinciples', 'DistributionOfPower', 'Citizenship', 'ChurchAndState', 
    'Bureaucracy', 'ArmyModel', 'InternalSecurity'
  ];
  const economyIds = [
    'EconomicSystems', 'Trade Policy', 'Taxation', 'Land Reform', 
    'Colonization', 'Policing', 'Education System', 'Health System'
  ];
  const humanRightsIds = [
    'Free Speech', 'Labor Rights', "Children's Rights", 'Rights of Women', 
    'Welfare', 'Migration', 'Slavery'
  ];

  const renderLawsByIds = (ids: string[]) => {
    return ids.map((id) => {
      const law = Object.values(laws).find((law) => law.id === id);
      if (law) {
        return (
          <div key={id} className={`flex p-[2px] m-0 rounded shadow-md relative group w-full`}>
            {/* Imagem de Fundo usando o componente Image */}
            <Image src="/imgs/fundolei.png" alt="Fundo Lei" className="h-[70px]" width={350} height={64} />
            {/* Conteúdo do Card */}
            <div className="absolute top-0 left-0 p-2 w-full h-full flex items-start">
              <div className='flex justify-center align-middle'>
                Logo
              </div>
              <div className='flex flex-col ml-2'>
                <span className='text-xs text-[#88827d] font-semibold'>{law.id}</span>
                <h1 className={`pt-0 text-sm text-[#f3f6e3] font-bold`}>{law.name}</h1>
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
      }
      return null;
    });
  };

  const renderFirstLawWithoutId = () => {
    const idsSet = new Set([...powerStructureIds, ...economyIds, ...humanRightsIds]);
    const [key, value] = Object.entries(laws).find(([_, value]) => !idsSet.has(value.id)) || [];
  
    if (key && value) {
      const listItems: JSX.Element[] = []; // Array para armazenar os itens da lista
  
      // Se value é um array ou possui uma estrutura esperada
      if (Array.isArray(value)) {
        value.forEach((law: string, index: number) => {
          listItems.push(<li key={index} className={`ml-2`}>{law}</li>);
        });
      } else {
        // Caso value seja um objeto com propriedades específicas
        for (const prop in value) {
          if (value.hasOwnProperty(prop)) {
            listItems.push(<li key={prop} className={`ml-2`}>{value[prop]}</li>);
          }
        }
      }
  
      return (
        <div key={key} className={`border p-4 rounded shadow-md w-52`}>
          <h2 className={`text-lg font-bold`}>{key}</h2>
          <ul>
            {listItems} {/* Renderiza os itens da lista */}
          </ul>
        </div>
      );
    }
  
    return null;
  };
  
  return (
    <div className={`flex flex-row justify-around p-4`}>
      <div className='basis-1/5'>
        <div className={`mt-8`}>
          {renderFirstLawWithoutId()}
        </div>
      </div>

      <div className='basis-4/5 mx-12'>
        <h1 className={`text-2xl font-bold mb-4 w-full`}>Laws Overview</h1>
        <div className={`flex justify-between`}>
          <div className={`w-2/6 pr-2`}>
            <h2 className={`text-xl font-semibold mb-2`}>Power Structure Laws</h2>
            {renderLawsByIds(powerStructureIds)}
          </div>

          <div className={`w-2/6 px-2`}>
            <h2 className={`text-xl font-semibold mb-2`}>Economy Laws</h2>
            {renderLawsByIds(economyIds)}
          </div>

          <div className={`w-2/6 pl-2`}>
            <h2 className={`text-xl font-semibold mb-2`}>Human Rights Laws</h2>
            {renderLawsByIds(humanRightsIds)}
          </div>
        </div>
      </div>

      <p className={`mt-4`}>{additionalInfo}</p>
    </div>
  );
};

export default LawsOverview;
