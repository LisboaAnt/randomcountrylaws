// BlockedLaws.tsx
import React from 'react';

const BlockedLaws: React.FC<{ laws: string[] }> = ({ laws }) => {
  return (
    <div>
      <h2>Blocked Laws:</h2>
      <ul>
        {laws.map((law, index) => (
          <li key={index}>{law}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlockedLaws;
