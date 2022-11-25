import { bannerImg, alarmIcon, triangleIcon, discIcon, boxIcon } from '~/assets/img/index';
function Home() {
    return (
        <div
            id="home"
            className="bg-[#fcf1e7]
                            bg-center bg-no-repeat bg-contain h-screen flex flex-col items-center relative"
        >
            <div className="flex flex-col justify-center xl:flex-row xl:justify-between items-center h-screen xl:w-[1200px] mx-auto">
                <div className="text-center xl:text-justify">
                    <h1 className="py-3 text-lg md:text-xl lg:text-3xl">Hello !!!</h1>
                    <h1 className="py-3 text-3xl md:text-4xl lg:text-6xl">
                        I'm <span className="font-extrabold">Trinh Phieu An</span>
                    </h1>
                    <div className="flex justify-center text-left xl:justify-start mt-2">
                        <h1 className="font-extrabold text-lg md:text-xl lg:text-3xl h-[40px]">a</h1>
                        <ul className="text-lg md:text-xl lg:text-3xl h-[40px] leading-[40px] ml-2 overflow-hidden">
                            <li className="relative top-[-6.5px] lg:top-[-1.5px] animate-slide">
                                <span
                                    className="leading-[40px] py-1 relative after:content[''] after:border-l-2 after:border-solid
                             after:border-[#1f2044] after:h-full after:w-full after:absolute after:left-0 after:animate-typing after:bg-[#fcf1e7]"
                                >
                                    Developer
                                </span>
                            </li>
                            <li className="mt-3 relative top-[-7.5px] md:top-[-8px] lg:top-0 animate-slide">
                                <span
                                    className="leading-[40px] py-1 relative after:content[''] after:border-l-2 after:border-solid after:border-[#1f2044] 
                                after:h-full after:w-full after:absolute after:left-0 after:animate-typing after:bg-[#fcf1e7]"
                                >
                                    React JS
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <img className="w-[300px] md:w-[400px] lg:w-[500px]" src={bannerImg} alt="" />
            </div>
            <div className="hidden xl:block absolute bottom-48 left-[76px]">
                <button className="bg-[#f79784] rounded py-2 px-3 font-semibold opacity-90 hover:opacity-100">
                    Let's Work Together
                </button>
            </div>
            <a href="#about">
                <div className="flex flex-col mb-6">
                    <div className="flex justify-center border-[2px] rounded-xl border-[#df2222] w-7 h-12">
                        <div className="mt-1 h-3 w-3 bg-[#df2222] rounded-3xl animate-translateY"></div>
                    </div>
                    <div className="self-center">
                        <div
                            className="before:block before:w-2.5 before:h-2.5 before:border-l-2 before:border-l-[#f79784] before:border-b-2
                                    before:border-b-[#ff5959] before:rotate-[-45deg] before:animate-mouseScroll before:animation-delay-100
                                    after:block after:w-2.5 after:h-2.5 after:border-l-2 after:border-l-[#f79784] after:border-b-2
                                    after:border-b-[#ff5959] after:rotate-[-45deg] after:animate-mouseScroll after:animation-delay-300
                                    mt-2"
                        >
                            <span
                                className="block w-2.5 h-2.5 border-l-2 border-l-[#f79784] border-b-2 
                                        border-b-[#ff5959] rotate-[-45deg] animate-mouseScroll animation-delay-200"
                            ></span>
                        </div>
                    </div>
                </div>
            </a>

            <img
                className="absolute top-[100px] left-[150px] md:left-[250px] lg:top-[100px] lg:left-[300px] w-10 animate-spin-slow"
                src={triangleIcon}
                alt=""
            />
            <img
                className="hidden lg:block absolute top-[100px] lg:top-[100px] lg:right-[80px] w-10 animate-spin-slow"
                src={alarmIcon}
                alt=""
            />
            <img
                className="absolute bottom-[150px] left-[100px] md:left-[200px] lg:bottom-[100px] lg:left-[350px] w-10 animate-spin-slow"
                src={boxIcon}
                alt=""
            />
            <img
                className="hidden lg:block absolute bottom-[100px] lg:bottom-[100px] lg:right-[80px] w-10 animate-spin-slow"
                src={discIcon}
                alt=""
            />
        </div>
    );
}

export default Home;
