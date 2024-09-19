import { useState } from "react"
import DefaultImage from "../assets/alpaca/backgrounds/blue50.png"
import Accesorie from "../assets/alpaca/accessories/earings.png"
import ears from "../assets/alpaca/ears/default.png"
import eyes from "../assets/alpaca/eyes/angry.png"
import hair from "../assets/alpaca/hair/bang.png"
import leg from "../assets/alpaca/leg/bubble-tea.png"
import mount from "../assets/alpaca/mouth/astonished.png"
import neck from "../assets/alpaca/neck/bend-backward.png"
import nose from "../assets/alpaca/nose.png"
import { alpacaData } from "../components/db/data"
const Alpaca = () => {
    const [current, setCurrent] = useState("accesories");


    const handleCurrent = (e) => {
        setCurrent(e.target.textContext);
        console.log(e.target.textContent);
    }
    return (
        <section className="flex flex-col gap-10">
            <h1 className="text-6xl">Alpaca Generator</h1>
            {/* Content */}
            <div className="flex gap-12 flex-col md:flex-row">
                {/* Image */}
                <div className="relative ">
                    <img src={DefaultImage} alt="background image" className="h-[520px] w-[520px] z-0" />
                    <img src={neck} alt="background image" className="h-[520px] w-[520px] z-10 top-0 left-0 absolute" />
                    <img src={Accesorie} alt="background image" className="h-[520px] w-[520px] z-10 top-0 left-0 absolute" />
                    <img src={ears} alt="background image" className="h-[520px] w-[520px] z-[1] top-0 left-0 absolute" />
                    <img src={eyes} alt="background image" className="h-[520px] w-[520px] z-[99] top-0 left-0 absolute" />
                    <img src={mount} alt="background image" className="h-[520px] w-[520px] z-[109] top-0 left-0 absolute" />
                    <img src={leg} alt="background image" className="h-[520px] w-[520px] z-[99] top-0 left-0 absolute" />
                    <img src={hair} alt="background image" className="h-[520px] w-[520px] z-[99] top-0 left-0 absolute" />
                    <img src={nose} alt="background image" className="h-[520px] w-[520px] z-[99] top-0 left-0 absolute" />
                </div>

                {/* Buttons */}
                <div className="flex flex-col ">
                    {/* Accesories */}
                    <div className=" flex  gap-2 flex-col">
                        <h2 className="self-center">Accesorize the Alpaca's</h2>
                        {/* buttons */}
                        <div className="grid grid-cols-2 grid-rows-4 gap-3">
                            {alpacaData.map(({ name }, i) => (
                                <button key={i} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={handleCurrent}>{name}</button>
                            ))}

                        </div>
                    </div>
                    {/* Styles */}
                    <div className="flex flex-col gap-2">
                        <h2 className="self-center">Styles</h2>
                        {/* buttons */}
                        <div className="flex flex-wrap gap-3">

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}


export default Alpaca;
