// Definindo a interface para a Lei
export interface Law {
    id: string;
    name: string;
    desc: string;
    promulgates?: string[];
    blocks?: string[];
    [key: string]: any;
  }
  
  // Definindo a interface para as propriedades do componente
 export interface LawsOverviewProps {
    laws: Record<string, Law>;
    additionalInfo: string;
    handleSortearLeis: () => void; // Adiciona a nova prop
    
  }