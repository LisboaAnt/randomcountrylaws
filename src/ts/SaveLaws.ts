// utils/captureScreen.ts
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

export async function SaveLaws(elementId: string): Promise<void> {
  const element = document.getElementById(elementId);
  
  if (element) {
    try {
      const canvas = await html2canvas(element);
      canvas.toBlob((blob: Blob | null) => {
        if (blob) {
          saveAs(blob, 'RandomLaws.png');
        }
      });
    } catch (error) {
      console.error('Erro ao capturar a tela:', error);
    }
  }
}