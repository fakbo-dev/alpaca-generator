import { useState } from "react"
import DefaultImageimg from "../assets/alpaca/backgrounds/blue50.png"
import Accesorieimg from "../assets/alpaca/accessories/earings.png"
import earsimg from "../assets/alpaca/ears/default.png"
import eyesimg from "../assets/alpaca/eyes/angry.png"
import hairimg from "../assets/alpaca/hair/bang.png"
import legimg from "../assets/alpaca/leg/bubble-tea.png"
import mountimg from "../assets/alpaca/mouth/astonished.png"
import neckimg from "../assets/alpaca/neck/bend-backward.png"
import noseimg from "../assets/alpaca/nose.png"

// DB
import { accessories, backgrounds, ears, eyes, hair, leg, mouth, neck } from "./db/dataTest";
import { alpacaData } from "./db/data";
const Alpaca = () => {
    const [current, setCurrent] = useState("accesories");
    // ? maybe need fix
    const [value, setValue] = useState(accessories.styles);
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
                    <img src={DefaultImageimg} alt="background image" className="h-[520px] w-[520px] z-0" />
                    <img src={neckimg} alt="background image" className="h-[520px] w-[520px] z-10 top-0 left-0 absolute" />
                    <img src={Accesorieimg} alt="background image" className="h-[520px] w-[520px] z-10 top-0 left-0 absolute" />
                    <img src={earsimg} alt="background image" className="h-[520px] w-[520px] z-[1] top-0 left-0 absolute" />
                    <img src={eyesimg} alt="background image" className="h-[520px] w-[520px] z-[99] top-0 left-0 absolute" />
                    <img src={mountimg} alt="background image" className="h-[520px] w-[520px] z-[109] top-0 left-0 absolute" />
                    <img src={legimg} alt="background image" className="h-[520px] w-[520px] z-[99] top-0 left-0 absolute" />
                    <img src={hairimg} alt="background image" className="h-[520px] w-[520px] z-[99] top-0 left-0 absolute" />
                    <img src={noseimg} alt="background image" className="h-[520px] w-[520px] z-[99] top-0 left-0 absolute" />
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
                            {value.map((value, i) => (
                                <button key={i} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">{value}</button>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}


export default Alpaca;
