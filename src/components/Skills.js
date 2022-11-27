import { htmlIcon, cssIcon, jsIcon, reactIcon, gitIcon, tailwindIcon } from '~/assets/img/index';

function Skills() {
    return (
        <div id="skills" className="px-[36px] py-[72px] xl:p-[72px] bg-[#f1f5f8] dark:bg-[#131917]">
            <div className="font-bold text-3xl">
                <h1 className="inline relative dark:text-white">
                    My Skills
                    <span className="absolute w-14 left-0 bottom-[-8px] border-b-4 border-[#88b4dc]"></span>
                </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-x-[30px] gap-y-[50px] xl:justify-between xl:gap-x-[80px] py-[24px] mt-[48px] select-none">
                <div class="relative w-[300px] h-[200px] shadow-custom rounded-lg border-b-[3px] border-[#ff5722] bg-[#fff]">
                    <img className="absolute top-[-30px] left-[50%] translate-x-[-50%]" src={htmlIcon} alt="" />
                    <div class="text-center pt-[60px]">
                        <h1 className="text-xl font-semibold mb-3">HTML</h1>
                        <p className="px-2">HyperText Markup Language</p>
                    </div>
                </div>
                <div class="relative w-[300px] h-[200px] shadow-custom rounded-lg border-b-[3px] border-[#1572b6] bg-[#fff]">
                    <img className="absolute top-[-30px] left-[50%] translate-x-[-50%]" src={cssIcon} alt="" />
                    <div class="text-center pt-[60px]">
                        <h1 className="text-xl font-semibold mb-3">CSS</h1>
                        <p className="px-2">Cascading Style Sheets</p>
                    </div>
                </div>
                <div class="relative w-[300px] h-[200px] shadow-custom rounded-lg border-b-[3px] border-[#ffdf00] bg-[#fff]">
                    <img className="absolute top-[-30px] left-[50%] translate-x-[-50%]" src={jsIcon} alt="" />
                    <div class="text-center pt-[60px]">
                        <h1 className="text-xl font-semibold mb-3">JavaScript</h1>
                        <p className="px-2">
                            Programming language that is one of the core technologies of the World Wide Web
                        </p>
                    </div>
                </div>
                <div class="relative w-[300px] h-[200px] shadow-custom rounded-lg border-b-[3px] border-[#61d9fb] bg-[#fff]">
                    <img className="absolute top-[-30px] left-[50%] translate-x-[-50%]" src={reactIcon} alt="" />
                    <div class="text-center pt-[60px]">
                        <h1 className="text-xl font-semibold mb-3">React</h1>
                        <p className="px-2">Free and open-source front-end JavaScript library</p>
                    </div>
                </div>
                <div class="relative w-[300px] h-[200px] shadow-custom rounded-lg border-b-[3px] border-[#000000] bg-[#fff]">
                    <img className="absolute top-[-30px] left-[50%] translate-x-[-50%]" src={tailwindIcon} alt="" />
                    <div class="text-center pt-[60px]">
                        <h1 className="text-xl font-semibold mb-3">Tailwind</h1>
                        <p className="px-2">An open source CSS framework</p>
                    </div>
                </div>
                <div class="relative w-[300px] h-[200px] shadow-custom rounded-lg border-b-[3px] border-[#f34f29] bg-[#fff]">
                    <img className="absolute top-[-30px] left-[50%] translate-x-[-50%]" src={gitIcon} alt="" />
                    <div class="text-center pt-[60px]">
                        <h1 className="text-xl font-semibold mb-3">Git</h1>
                        <p className="px-2">A distributed version control system</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
