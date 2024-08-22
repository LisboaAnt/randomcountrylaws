import React from 'react';
import laws from '../ts/Laws';

const LawList: React.FC = () => {
    return (
        <div className={"p-4 space-y-6"}>
          <h1 className={"text-3xl font-bold text-center mb-8"}>Power Structure Laws - Governance Principles</h1>
          
          {laws.PowerStructureLaws.GovernancePrinciples.map((law) => (
            <div 
              key={law.name}
              className={"border rounded-lg p-4 shadow-md bg-white hover:bg-gray-100 transition-all text-cyan-800"}
            >
              <h2 className={"text-xl font-semibold mb-2"}>{law.name}</h2>
              <p className={"text-sm mb-2"}><strong>Promulgates:</strong> {law.promulgates.join(", ") || "None"}</p>
              <p className={"text-sm mb-2"}><strong>Blocks:</strong> {law.blocks.join(", ") || "None"}</p>
              <p className={"text-sm mb-2"}><strong>Effects:</strong></p>
              <ul className={"list-disc list-inside mb-2"}>

                {Object.entries(law.effects).map(([effect, value]) => {
                if (typeof value === 'number' || typeof value === 'string') {
                    return <li key={effect}>{effect}: {value}</li>;
                }
                return <li key={effect}>{effect}</li>;
                })}

              </ul>
              <p className={"text-sm"}><strong>Interest Groups:</strong> {law.interest_groups.join(", ")}</p>
            </div>
          ))}
        </div>
      );
    };

export default LawList;
