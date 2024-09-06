import {SaveLaws} from './SaveLaws';

interface BtnSaveProps {
    onSave: string;
}

function BtnSave({ onSave }: BtnSaveProps) {
    return (
        <div className="my-6 scale-75">
            <button 
                onClick={()=>SaveLaws(onSave)} 
                className="btn bg-cover bg-center transform transition-all duration-150 hover:scale-[1.01] active:scale-[1]"
                style={{backgroundImage: 'url("/imgs/button_menu1.png")', backgroundSize: 'cover', width: '315px',height: '56px' }}
            >
                <p className="text-[#eff2e0e4] text-3xl font-bold text-border">Download</p>
            </button>
        </div>
    );
}

export default BtnSave;