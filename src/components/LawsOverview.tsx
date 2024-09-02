
import React from 'react';
import LawList from './LawList';
import { LawsOverviewProps } from '@/types';
import Image from 'next/image';
import BtnReload from './BtnReload';

const LawsOverview: React.FC<LawsOverviewProps> = ({ laws, additionalInfo, handleSortearLeis}) => {
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

      console.log(listItems)
      return (
    <div key={key} className="border border-[#80663af4] my-10 p-4 rounded shadow-md bg-[#000000] bg-opacity-20 w-72">
      <h2 className="text-[#ce6161] text-lg font-bold text-center">{key}</h2>
      <ul className="grid grid-cols-2">
        {listItems.map((item, index) => (
          <li key={index} className="text-sm text-[#cdc8c3]">
            {item}
          </li>
        ))}
      </ul>
    </div>

      );
    }

    return null;
  };

  return (
    <div className={`flex flex-row justify-around p-4`} >
      <div className='basis-2/10'>
        <div className={`pt-24 flex flex-col justify-center items-center`}>
        {/*<Image src={`/imgs/RandomLawsLogo.png`} alt="Icon Law" className=" h-full w-full object-contain mt-[-30px] " width={350} height={350}/>*/}
          
            <div className='flex items-center justify-center pr-1' style={{ backgroundImage: 'url("/imgs/menu_randomlaws.png")',backgroundSize: 'cover', height: '364.46px', width: '331.46px'}}>
              <div className='flex items-center justify-center'>
                <BtnReload onReload={handleSortearLeis} />
              </div>
            </div>
          
          {renderFirstLawWithoutId()}
        </div>
      </div>

      <div className='basis-8/10 mx-8'>
      <div className='bg-cover bg-center h-[50px] mr-[14px] ml-[13px] rounded-t-full' style={{ backgroundImage: "url('/imgs/fundoPolitica.png')" }}/>
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

