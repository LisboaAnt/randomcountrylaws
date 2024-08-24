// GovernancePrinciples.tsx
import React from 'react';

const GovernancePrinciples: React.FC<{ principles: any }> = ({ principles }) => {
  return (
    <div>
      <h2>Governance Principles:</h2>
      <h3>{principles?.name}</h3>
      <p>{principles?.desc}</p>
    </div>
  );
};

export default GovernancePrinciples;
