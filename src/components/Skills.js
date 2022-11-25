import { htmlIcon, cssIcon, jsIcon, reactIcon, gitIcon, tailwindIcon } from '~/assets/img/index';

function Skills() {
    return (
        <div id="skills" className="px-[36px] py-[72px] xl:p-[72px] bg-[#fcf1e7]">
            <div className="font-bold text-3xl">
                <h1 className="inline relative">
                    My Skills
                    <span className="absolute w-14 left-0 bottom-[-8px] border-b-4 border-[#88b4dc]"></span>
                </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-x-[30px] gap-y-[50px] xl:justify-between xl:gap-x-[80px] py-[24px] mt-[48px] select-none">
                <div
                    className="flex flex-col items-center justify-center border border-[#cccccc] 
                            p-2 text-center rounded-lg hover:bg-[#fff] hover:shadow-custom w-[120px] h-[140px]"
                >
                    <img className="w-[90px]" src={htmlIcon} alt="" />
                    <h1 className="font-semibold mt-2">HTML</h1>
                </div>
                <div
                    className="flex flex-col items-center justify-center border border-[#cccccc] 
                            p-2 text-center rounded-lg hover:bg-[#fff] hover:shadow-custom w-[120px] h-[140px]"
                >
                    <img className="w-[90px]" src={cssIcon} alt="" />
                    <h1 className="font-semibold mt-2">CSS</h1>
                </div>
                <div
                    className="flex flex-col items-center justify-center border border-[#cccccc] 
                            p-2 text-center rounded-lg hover:bg-[#fff] hover:shadow-custom w-[120px] h-[140px]"
                >
                    <img className="w-[90px]" src={jsIcon} alt="" />
                    <h1 className="font-semibold mt-2">JavaScript</h1>
                </div>
                <div
                    className="flex flex-col items-center justify-center border border-[#cccccc] 
                            p-2 text-center rounded-lg hover:bg-[#fff] hover:shadow-custom w-[120px] h-[140px]"
                >
                    <img className="w-[90px]" src={reactIcon} alt="" />
                    <h1 className="font-semibold mt-2">React</h1>
                </div>
                <div
                    className="flex flex-col items-center justify-center border border-[#cccccc] 
                            p-2 text-center rounded-lg hover:bg-[#fff] hover:shadow-custom w-[120px] h-[140px]"
                >
                    <img className="w-[90px]" src={tailwindIcon} alt="" />
                    <h1 className="font-semibold mt-2">Tailwind</h1>
                </div>
                <div
                    className="flex flex-col items-center justify-center border border-[#cccccc] 
                            p-2 text-center rounded-lg hover:bg-[#fff] hover:shadow-custom w-[120px] h-[140px]"
                >
                    <img className="w-[90px]" src={gitIcon} alt="" />
                    <h1 className="font-semibold mt-2">Git</h1>
                </div>
            </div>
        </div>
    );
}

export default Skills;
