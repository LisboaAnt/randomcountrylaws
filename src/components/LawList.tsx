"use client";
import React from 'react';
import { LawsOverviewProps, Law } from '@/types';
import LawCard from './LawCard';

interface LawListProps {
  laws: LawsOverviewProps['laws'];
  ids: string[];
}

const LawList: React.FC<LawListProps> = ({ laws, ids }) => {
  return (
    <>
      {ids.map((id) => {
        const law = Object.values(laws).find((law) => law.id === id);
        if (law) {
          return <LawCard key={id} law={law} />;
        }
        return null;
      })}
    </>
  );
};

export default LawList;
