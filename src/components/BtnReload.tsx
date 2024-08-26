"use client"; // Adicione isso no topo do arquivo

interface BtnReloadProps {
    onReload: () => void; // Define a prop como uma função
}

function BtnReload({ onReload }: BtnReloadProps) {

    return (
        <div className="my-6">
            <button 
            onClick={onReload} 
            className="h-[56.25px] w-[249px] btn bg-cover bg-center transform transition-all hover:scale-105 "
            style={{backgroundImage: 'url("/imgs/btn.png")',marginInline: '10px'}}
            >
                <p className="text-[#eff2e0] text-lg font-bold text-border">Reload</p>
            </button>
        </div>
    );
}

export default BtnReload;
