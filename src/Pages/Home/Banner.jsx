
const Banner = () => {
    return (
        <>
            <div className="w-full h-[700px] bg-[url('https://i.ibb.co/54jZBZN/Screenshot-2023-09-22-at-11-30-28-PM.png')] bg-cover grid md:grid-cols-2  justify-center">
                <div className="hidden md:block"></div>
                <div className="flex h-full w-full items-center text-black ">
                    <div>
                        <h3 className="text-xl md:text-3xl">it has finally started</h3>
                        <h2 className="text-3xl md:text-6xl font-bold font-mono">HUGE SALE UP TO</h2>
                        <h1 className="text-6xl md:text-9xl font-bold">70% OFF</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;