import Assets from "./db/Assets"
import Buttons from "./Buttons"
import { useState } from "react";


// Default Img
import accessoriesImg from "../assets/alpaca/accessories/earings.png";
import bgImg from "../assets/alpaca/backgrounds/blue50.png";
import earsImg from "../assets/alpaca/ears/default.png";
import eyesImg from "../assets/alpaca/eyes/default.png";
import hairImg from "../assets/alpaca/hair/default.png";
import legImg from "../assets/alpaca/leg/default.png";
import mouthImg from "../assets/alpaca/mouth/default.png";
import neckImg from "../assets/alpaca/neck/default.png";
import noseImg from "../assets/alpaca/nose.png";

const Alpaca = () => {
    const [currentBtn, setCurrentBtn] = useState("background");
    const handleClick = (e) => {
        setCurrentBtn(e.target.id)
    }
    return (
        <section className="flex flex-col gap-10">
            <h1 className="text-6xl">Alpaca Generator</h1>

            {/* Content */}
            <div className="flex gap-12 flex-col md:flex-row">

                {/* Image */}
                <div className="relative flex justify-center items-center">
                    <img src={bgImg} alt="bg-image" className="h-[420px] w-[420px] z-0" />
                    <img src={earsImg} alt="bg-image" className="h-[420px] w-[420px] z-0 absolute top-0 left-0" />
                    <img src={eyesImg} alt="bg-image" className="h-[420px] w-[420px] z-[99] absolute top-0 left-0" />
                    <img src={hairImg} alt="bg-image" className="h-[420px] w-[420px] z-[0] absolute top-0 left-0" />
                    <img src={accessoriesImg} alt="bg-image" className="h-[420px] w-[420px] z-0 absolute top-0 left-0" />
                    <img src={legImg} alt="bg-image" className="h-[420px] w-[420px] z-0 absolute top-0 left-0" />
                    <img src={mouthImg} alt="bg-image" className="h-[420px] w-[420px] z-[99] absolute top-0 left-0" />
                    <img src={neckImg} alt="bg-image" className="h-[420px] w-[420px] z-1 absolute top-0 left-0" />
                    <img src={noseImg} alt="bg-image" className="h-[420px] w-[420px] z-0 absolute top-0 left-0" />
                </div>

                {/* Buttons */}

                <div className="flex flex-col gap-2">
                    {/* Accessories */}
                    <div className=" flex gap-2 flex-col">
                        <h2 className="self-center">Accessorize the Alpaca's</h2>
                        {/* Buttons */}
                        <div className="grid grid-cols-3 grid-rows-3 gap-3">
                            {Object.keys(Assets).map((key, i) => (
                                <Buttons key={i} handleChange={handleClick} id={key}>
                                    {key.toUpperCase()}
                                </Buttons>
                            ))}
                        </div>
                    </div>
                    {/* Styles */}
                    <div className="flex flex-col gap-2">
                        <h2 className="self-center">Styles</h2>
                        {/* Buttons */}
                        <div className="grid grid-cols-3 grid-rows-3 gap-3">
                            {Object.keys(Assets[currentBtn] || {}).map((key, i) => (
                                <Buttons key={i}>
                                    {key.toUpperCase()}
                                </Buttons>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Alpaca