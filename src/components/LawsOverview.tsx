import React from 'react';
import LawList from './LawList';
import { LawsOverviewProps } from '@/types';
import Image from 'next/image';


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
    <div className={`flex flex-row justify-around p-4`} >
      <div className='basis-1/5'>
        <div className={``}>
        <Image src={`/imgs/icons/RandomLawsLogo.png`} alt="Icon Law" className=" h-full w-full object-contain p-0 m-0" width={350} height={350}/>
          {renderFirstLawWithoutId()}
        </div>
      </div>

      <div className='basis-4/5 mx-12'>
        <h1 className={`text-2xl font-bold mb-4 w-full font-garamond`}>Laws Overview</h1>
        <div className={`flex justify-between`}>
          <div className={`w-2/6 pr-2 border border-r-2 border-[#7f6a45] bg-[#39121d]`} style={{ backgroundImage: 'url("/imgs/colunaleis.png")', backgroundSize: 'cover', backgroundPosition: 'center',marginInline: '10px', height: '643px', padding: '10px',paddingTop: '35px', borderRadius: '10px' }}>
              <LawList laws={laws} ids={powerStructureIds} />
          </div>

          <div className={`w-2/6 pr-2 border border-r-2 border-[#7f6a45] bg-[#39121d]`} style={{ backgroundImage: 'url("/imgs/colunaleis.png")', backgroundSize: 'cover', backgroundPosition: 'center',marginInline: '10px', height: '643px', padding: '10px',paddingTop: '35px', borderRadius: '10px' }}>
            <LawList laws={laws} ids={economyIds} />
          </div>

          <div className={`w-2/6 pr-2 border border-r-2 border-[#7f6a45] bg-[#39121d]`} style={{ backgroundImage: 'url("/imgs/colunaleis.png")', backgroundSize: 'cover', backgroundPosition: 'center',marginInline: '10px', height: '643px', padding: '10px',paddingTop: '35px', borderRadius: '10px' }}>
            <LawList laws={laws} ids={humanRightsIds} />
          </div>
        </div>
      </div>

      <p className={`mt-4`}>{additionalInfo}</p>
    </div>
  );
};

export default LawsOverview;
