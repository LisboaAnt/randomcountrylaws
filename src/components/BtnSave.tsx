import {SaveLaws} from '../ts/SaveLaws';

interface BtnSaveProps {
    onSave: string;
}

function BtnSave({ onSave }: BtnSaveProps) {
    return (
        <div className="my-6 scale-[0.76]">
            <button 
                onClick={()=>SaveLaws(onSave)} 
                className="btn bg-cover bg-center transform transition-all duration-150 hover:scale-[1.01] active:scale-[1]"
                style={{backgroundImage: 'url("/imgs/button_menu2.png")', backgroundSize: 'cover', width: '310px',height: '53px' }}
            >
                <p className="text-[#eff2e0e4] mb-1 text-2xl font-bold text-border">Download</p>
            </button>
        </div>
    );
}

export default BtnSave;