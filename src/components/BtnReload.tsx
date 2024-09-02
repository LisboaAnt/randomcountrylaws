"use client"; // Adicione isso no topo do arquivo

interface BtnReloadProps {
    onReload: () => void; // Define a prop como uma função
}

function BtnReload({ onReload }: BtnReloadProps) {

    return (
        <div className="my-6 mr-1 scale-75">
            <button 
                onClick={onReload} 
                className="btn bg-cover bg-center transform transition-all duration-150 hover:scale-[1.01] active:scale-[1]"
                style={{backgroundImage: 'url("/imgs/button_menu1.png")', backgroundSize: 'cover', width: '315px',height: '56px' }}
            >
                <p className="text-[#eff2e0e4] text-3xl font-bold text-border">Reload</p>
            </button>
        </div>
    );
}

export default BtnReload;
