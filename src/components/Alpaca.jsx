import DefaultImage from "../assets/alpaca/backgrounds/blue50.png"

const Alpaca = () => {

    return (
        <section className="flex flex-col gap-10">
            <h1 className="text-6xl">Alpaca Generator</h1>
            {/* Content */}
            <div className="flex gap-12">
                {/* Image */}
                <div className="h-[520px] w-[520px]">
                    <img src={DefaultImage} alt="background image" className="object-cover" />
                </div>

                {/* Buttons */}
                <div className="flex flex-col">
                    {/* Accesories */}
                    <div className=" flex  gap-2 flex-col">
                        <h2 className="self-center">Accesories Alpacas</h2>
                        {/* buttons */}
                        <div className="flex flex-wrap gap-3">

                            <button className=" px-[20px] py-[12px] border border-white">pog</button>
                            <button className=" px-[20px] py-[12px] border border-white">pog</button>
                            <button className=" px-[20px] py-[12px] border border-white">pog</button>
                            <button className=" px-[20px] py-[12px] border border-white">pog</button>
                            <button className=" px-[20px] py-[12px] border border-white">pog</button>
                            <button className=" px-[20px] py-[12px] border border-white">pog</button>
                            <button className=" px-[20px] py-[12px] border border-white">pog</button>
                            <button className=" px-[20px] py-[12px] border border-white">pog</button>
                            <button className=" px-[20px] py-[12px] border border-white">pog</button>
                            <button className=" px-[20px] py-[12px] border border-white">pog</button>
                        </div>
                    </div>
                    {/* Styles */}
                    <div className="flex flex-col gap-2">
                        <h2 className="self-center">Styles</h2>
                        {/* buttons */}
                        <div className="flex flex-wrap gap-3">

                            <button className=" px-[20px] py-[12px] border border-white">pog</button>
                            <button className=" px-[20px] py-[12px] border border-white">pog</button>
                            <button className=" px-[20px] py-[12px] border border-white">pog</button>
                            <button className=" px-[20px] py-[12px] border border-white">pog</button>
                            <button className=" px-[20px] py-[12px] border border-white">pog</button>
                            <button className=" px-[20px] py-[12px] border border-white">pog</button>
                            <button className=" px-[20px] py-[12px] border border-white">pog</button>
                            <button className=" px-[20px] py-[12px] border border-white">pog</button>
                            <button className=" px-[20px] py-[12px] border border-white">pog</button>
                            <button className=" px-[20px] py-[12px] border border-white">pog</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Alpaca;
