

import laws from "./Laws";

  function sortearLei(leis, blockedLaws) {
    const leisFiltradas = leis.filter(lei => !blockedLaws.has(lei.name));
    return leisFiltradas.length > 0 ? leisFiltradas[Math.floor(Math.random() * leisFiltradas.length)] : null;
  }
  
  function sortearLeisPorCategoria(laws, blockedLaws) {
    const result = {};
    
    for (const key in laws) {
      const selectedLaw = sortearLei(Object.values(laws[key]).flat(), blockedLaws);
      result[key] = selectedLaw;
  
      if (selectedLaw) {
        selectedLaw.blocks.forEach(blockedLaw => blockedLaws.add(blockedLaw));
      }
    }
  
    return result;
  }
  
 export function sortearTodasLeis(laws) {
    const blockedLaws = new Set();
    const result = {
      BlockedLaws: [] // Inicializa como um array vazioa
    }
  
    for (const categoryKey in laws) {
      const categoryResult = sortearLeisPorCategoria(laws[categoryKey], blockedLaws);
      
      for (const subKey in categoryResult) {
        result[subKey] = categoryResult[subKey];
      }
    }
  
    result.BlockedLaws = Array.from(blockedLaws);
    return result;
  }
  
  // Executar o sorteio
  const resultado = sortearTodasLeis(laws);
  