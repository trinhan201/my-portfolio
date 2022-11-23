import bannerImg from '~/assets/banner.png';
import { htmlIcon, cssIcon, jsIcon, reactIcon } from '~/assets/index';
function Home() {
    return (
        <div
            className="bg-[#fcf1e7]
                            bg-center bg-no-repeat bg-contain h-screen flex flex-col items-center relative"
        >
            <div className="flex flex-col justify-center xl:flex-row xl:justify-between items-center h-screen xl:w-[1200px] mx-auto">
                <div className="text-center xl:text-justify text-[#1f2044]">
                    <h2 className="py-3 text-lg md:text-xl lg:text-3xl">Hello !!!</h2>
                    <h1 className="py-3 text-3xl md:text-4xl lg:text-6xl font-black">I'm Trinh Phieu An</h1>
                    <ul className="font-bold text-lg md:text-xl lg:text-3xl h-[40px] leading-[40px] overflow-hidden">
                        <li className="relative top-0 animate-slide">
                            <span
                                className="leading-[40px] py-1 relative after:content[''] after:border-l-2 after:border-solid
                             after:border-[#1f2044] after:h-full after:w-full after:absolute after:left-0 after:animate-typing after:bg-[#fcf1e7]"
                            >
                                Developer
                            </span>
                        </li>
                        <li className="mt-4 relative top-0 animate-slide">
                            <span
                                className="leading-[40px] py-1 relative after:content[''] after:border-l-2 after:border-solid after:border-[#1f2044] 
                                after:h-full after:w-full after:absolute after:left-0 after:animate-typing after:bg-[#fcf1e7]"
                            >
                                React JS
                            </span>
                        </li>
                    </ul>
                </div>
                <img className="w-[300px] md:w-[400px] lg:w-[500px]" src={bannerImg} alt="" />
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

            <img className="absolute top-[100px] left-[300px] w-12 animate-spin-slow" src={htmlIcon} alt="" />
            <img className="absolute top-[100px] right-[80px] w-12 animate-spin-slow" src={cssIcon} alt="" />
            <img className="absolute bottom-[100px] left-[350px] w-12 animate-spin-slow" src={jsIcon} alt="" />
            <img className="absolute bottom-[100px] right-[80px] w-12 animate-spin-slow" src={reactIcon} alt="" />
        </div>
    );
}

export default Home;
