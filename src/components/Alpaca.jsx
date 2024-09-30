import Assets from "../components/db/Assets"
import Buttons from "./Buttons"
import { useState } from "react";
import { BtnMaker, changeBtn, customizeImg } from "./allFuntions.jsx";
import { saveAsPng } from "save-html-as-image";
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
import Donwload from "./Donwload.jsx";

const Alpaca = () => {
    const [currentBtn, setCurrentBtn] = useState("backgrounds");
    const [dataImg, setDataImg] = useState({
        accessories: accessoriesImg,
        backgrounds: bgImg,
        ears: earsImg,
        eyes: eyesImg,
        hair: hairImg,
        leg: legImg,
        mouth: mouthImg,
        neck: neckImg,
        nose: noseImg,
    });


    const handleUpdate = (e) => {
        setDataImg({
            ...dataImg,
            [currentBtn]: Assets[currentBtn][e.target.id],
        });
    }

    const handleDownload = (e) => {
        const alpacaImg = document.getElementById("alpacaImg");
        saveAsPng(alpacaImg, { filename: "my alpaca.png", printDate: false })
    };
    return (
        <section className="flex flex-col gap-10 mt-[500px] xl:mt-0">
            <h1 className="text-6xl ">Alpaca Generator</h1>

            {/* Content */}
            <div className="flex gap-12 flex-col md:flex-row">

                {/* Image */}
                <div className="relative flex justify-center items-center" id="alpacaImg">
                    <img src={dataImg.backgrounds} alt="bg-image" className="h-[420px] w-[420px] z-0" />
                    <img src={dataImg.ears} alt="bg-image" className="h-[420px] w-[420px] z-0 absolute top-0 left-0" />
                    <img src={dataImg.eyes} alt="bg-image" className="h-[420px] w-[420px] z-[99] absolute top-0 left-0" />
                    <img src={dataImg.hair} alt="bg-image" className="h-[420px] w-[420px] z-[0] absolute top-0 left-0" />
                    <img src={dataImg.accessories} alt="bg-image" className="h-[420px] w-[420px] z-[99] absolute top-0 left-0" />
                    <img src={dataImg.leg} alt="bg-image" className="h-[420px] w-[420px] z-0 absolute top-0 left-0" />
                    <img src={dataImg.mouth} alt="bg-image" className="h-[420px] w-[420px] z-[99] absolute top-0 left-0" />
                    <img src={dataImg.neck} alt="bg-image" className="h-[420px] w-[420px] z-1 absolute top-0 left-0" />
                    <img src={dataImg.nose} alt="bg-image" className="h-[420px] w-[420px] z-0 absolute top-0 left-0" />
                </div>

                {/* Buttons */}

                <div className="flex flex-col gap-2">
                    {/* Accessories */}
                    <div className=" flex gap-2 flex-col">
                        <h2 className="self-center">Accessorize the Alpaca's</h2>
                        {/* Buttons */}
                        <div className="grid  grid-cols-2 xl:grid-cols-3 grid-rows-3 gap-3">
                            <BtnMaker location={Assets} className="rounded-full border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-white hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none text-[8px]  md:text-[10px] xl:text-2xl"
                                func={changeBtn(setCurrentBtn)}
                            />
                        </div>
                    </div>
                    {/* Styles */}
                    <div className="flex flex-col gap-2">
                        <h2 className="self-center">Styles</h2>
                        {/* Buttons */}
                        <div className="grid grid-cols-2 xl:grid-cols-3 grid-rows-3 gap-3">
                            <BtnMaker location={Assets[currentBtn]} className="rounded-full border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-white hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none text-[10px] xl:text-2xl"
                                giveClass={true}
                                func={handleUpdate}
                            />
                        </div>
                    </div>
                </div>

            </div>
            <Donwload handleClick={handleDownload} />
        </section>
    )
}

export default Alpaca