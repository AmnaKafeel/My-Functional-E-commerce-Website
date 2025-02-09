import {Playfair_Display,Cinzel,Bodoni_Moda,Prata,Montserrat} from "next/font/google"

const Playfair = Playfair_Display({subsets:["latin"]});
const  Cinzels= Cinzel({subsets:["latin"]});
const Bodoni = Bodoni_Moda({subsets:["latin"]});
const Pratas = Prata({subsets:["latin"], weight:"400"});
const Montserrats = Montserrat({subsets:["latin"]});

export default function Brands(){
    return(
        <div className="flex justify-center space-x-4 md:justify-between items-center bg-black w-full h-[122px] px-6 flex-wrap">
            <h1 className={`${Playfair.className} text-white text-2xl md:text-4xl`}>VERSACE</h1>
            <h1 className={`${Cinzels.className} text-white text-2xl md:text-4xl`}>ZARA</h1>
            <h1 className={`${Bodoni.className} text-white text-2xl md:text-4xl`}>GUCCI</h1>
            <h1 className={`${Pratas.className} text-white text-2xl md:text-4xl`}>PRADA</h1>
            <h1 className={`${Montserrats.className} text-white text-2xl md:text-4xl`}>Calvin Klein</h1>
            
        </div>
    )
}

