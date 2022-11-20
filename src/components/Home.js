function Home() {
    return (
        <div className="relative">
            <div className="bg-[url('https://www.engineready.com/wp-content/uploads/2016/08/portfolio-banner.jpg')] bg-center bg-no-repeat bg-cover h-screen"></div>
            <div className="absolute top-[50%] left-0 translate-y-[-50%] right-0 text-center text-white">
                <h2 className="py-3 text-lg md:text-xl lg:text-3xl">Hello !!!</h2>
                <h1 className="py-3 text-3xl md:text-4xl lg:text-6xl font-extrabold">I'm Trinh Phieu An</h1>
                <ul className="font-semibold text-lg md:text-xl lg:text-3xl h-[40px] leading-[40px] overflow-hidden">
                    <li className="relative top-0 animate-slide">
                        <span className="leading-[40px] py-1 relative after:content[''] after:border-l-2 after:border-solid after:border-white after:h-full after:w-full after:absolute after:left-0 after:animate-typing after:bg-[#292b38]">
                            Developer
                        </span>
                    </li>
                    <li className="mt-4 relative top-0 animate-slide">
                        <span className="leading-[40px] py-1 relative after:content[''] after:border-l-2 after:border-solid after:border-white after:h-full after:w-full after:absolute after:left-0 after:animate-typing after:bg-[#292b38]">
                            React JS
                        </span>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col absolute bottom-[50px] left-[50%] translate-x-[-50%]">
                <div className="flex justify-center border-[2px] rounded-xl border-[#df2222] w-7 h-12">
                    <div className="mt-1 h-3 w-3 bg-[#df2222] rounded-3xl animate-translateY"></div>
                </div>
                <div className="self-center">
                    <div>
                        <span className="inline-block w-1 h-2 border-l-2 rotate-[-45deg]"></span>
                        <span className="inline-block w-1 h-2 border-r-2 rotate-45"></span>
                    </div>
                    <div>
                        <span className="inline-block w-1 h-2 border-l-2 rotate-[-45deg]"></span>
                        <span className="inline-block w-1 h-2 border-r-2 rotate-45"></span>
                    </div>
                    <div>
                        <span className="inline-block w-1 h-2 border-l-2 rotate-[-45deg]"></span>
                        <span className="inline-block w-1 h-2 border-r-2 rotate-45"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
