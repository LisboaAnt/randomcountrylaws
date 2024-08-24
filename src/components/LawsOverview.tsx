// LawsOverview.tsx
import React from 'react';

interface LawsOverviewProps {
  laws: any; // Aceita qualquer estrutura de dados
  additionalInfo: string;
}

const LawsOverview: React.FC<LawsOverviewProps> = ({ laws, additionalInfo }) => {
  const renderLaws = () => {
    return Object.entries(laws).map(([key, value]) => {
      if (Array.isArray(value)) {
        // Se for uma lista (ex: BlockedLaws)
        return (
          <div key={key} className={`border p-4 m-2 rounded shadow-md w-1/4`}>
            <h2 className={`text-lg font-bold`}>{key}</h2>
            <ul>
              {value.map((law, index) => (
                <li key={index} className={`ml-4`}>{law}</li>
              ))}
            </ul>
          </div>
        );
      } else if (typeof value === 'object') {
        // Se for um objeto (ex: GovernancePrinciples)
        return (
          <div key={key} className={`border p-4 m-2 rounded shadow-md w-1/4`}>
            <h1 className={`text-lg font-bold`}>{value.name}</h1>
            <p className={`mb-2`}>{value.desc}</p>
            {value.promulgates && value.promulgates.length > 0 && (
              <div>
                <h3 className={`text-md font-semibold`}>Promulgates:</h3>
                <ul>
                  {value.promulgates.map((item, index) => (
                    <li key={index} className={`ml-4`}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {value.blocks && value.blocks.length > 0 && (
              <div>
                <h3 className={`text-md font-semibold`}>Blocks:</h3>
                <ul>
                  {value.blocks.map((item, index) => (
                    <li key={index} className={`ml-4`}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      }
      return null; // Em caso de não ser uma lista ou objeto
    });
  };

  return (
    <div className={`flex flex-wrap justify-start p-4`}>
      <h1 className={`text-2xl font-bold mb-4 w-full`}>Laws Overview</h1>
      {renderLaws()}
      <p className={`mt-4 w-full`}>{additionalInfo}</p>
    </div>
  );
};

export default LawsOverview;
