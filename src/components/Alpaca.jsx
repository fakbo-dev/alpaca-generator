import Assets from "./db/Assets"
import Buttons from "./Buttons"
import { useState } from "react";


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
                    <img src={Assets.background.blue50} alt="bg-image" className="h-[420px] w-[420px] z-0" />
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