import { portfolio, menuBg } from '~/assets/img/index';

function Projects() {
    return (
        <div id="projects" className="px-[36px] py-[72px] xl:p-[72px]">
            <div className="font-bold text-3xl">
                <h1 className="inline relative">
                    My Projects
                    <span className="absolute w-14 left-0 bottom-[-8px] border-b-4 border-[#88b4dc]"></span>
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] py-[24px] mt-[48px] select-none">
                <div className="group relative h-[160px] min-[600px]:h-[260px] md:h-[190px] lg:h-[222px] xl:h-[190px] rounded-md font-semibold before:content[''] before:rounded-md before:bg-[#ccc] before:absolute before:w-full before:h-0 before:opacity-80 before:transition-all hover:before:h-full">
                    <img className="rounded-md h-full object-fill" src={portfolio} alt="" />
                    <div className="absolute top-[50%] translate-y-[-50%] bottom-0 opacity-0 w-full group-hover:opacity-100">
                        <h1 className="text-center font-bold text-2xl">My Portfolio</h1>
                        <div className="flex justify-center mt-5">
                            <a href="#" className="rounded-md bg-slate-50 p-2 mx-1 opacity-90 hover:opacity-100">
                                Demo
                            </a>
                            <a href="#" className="rounded-md bg-slate-50 p-2 mx-1 opacity-90 hover:opacity-100">
                                Source Code
                            </a>
                        </div>
                    </div>
                </div>
                <div className="group relative h-[160px] min-[600px]:h-[260px] md:h-[190px] lg:h-[222px] xl:h-[190px] rounded-md font-semibold before:content[''] before:rounded-md before:bg-[#ccc] before:absolute before:w-full before:h-0 before:opacity-80 before:transition-all hover:before:h-full">
                    <img className="rounded-md h-full object-fill" src={portfolio} alt="" />
                    <div className="absolute top-[50%] translate-y-[-50%] bottom-0 opacity-0 w-full group-hover:opacity-100">
                        <h1 className="text-center font-bold text-2xl">My Portfolio</h1>
                        <div className="flex justify-center mt-5">
                            <a href="#" className="rounded-md bg-slate-50 p-2 mx-1 opacity-90 hover:opacity-100">
                                Demo
                            </a>
                            <a href="#" className="rounded-md bg-slate-50 p-2 mx-1 opacity-90 hover:opacity-100">
                                Source Code
                            </a>
                        </div>
                    </div>
                </div>
                <div className="group relative h-[160px] min-[600px]:h-[260px] md:h-[190px] lg:h-[222px] xl:h-[190px] rounded-md font-semibold before:content[''] before:rounded-md before:bg-[#ccc] before:absolute before:w-full before:h-0 before:opacity-80 before:transition-all hover:before:h-full">
                    <img className="rounded-md h-full object-fill" src={portfolio} alt="" />
                    <div className="absolute top-[50%] translate-y-[-50%] bottom-0 opacity-0 w-full group-hover:opacity-100">
                        <h1 className="text-center font-bold text-2xl">My Portfolio</h1>
                        <div className="flex justify-center mt-5">
                            <a href="#" className="rounded-md bg-slate-50 p-2 mx-1 opacity-90 hover:opacity-100">
                                Demo
                            </a>
                            <a href="#" className="rounded-md bg-slate-50 p-2 mx-1 opacity-90 hover:opacity-100">
                                Source Code
                            </a>
                        </div>
                    </div>
                </div>
                <div className="group relative h-[160px] min-[600px]:h-[260px] md:h-[190px] lg:h-[222px] xl:h-[190px] rounded-md font-semibold before:content[''] before:rounded-md before:bg-[#ccc] before:absolute before:w-full before:h-0 before:opacity-80 before:transition-all hover:before:h-full">
                    <img className="rounded-md h-full object-fill" src={portfolio} alt="" />
                    <div className="absolute top-[50%] translate-y-[-50%] bottom-0 opacity-0 w-full group-hover:opacity-100">
                        <h1 className="text-center font-bold text-2xl">My Portfolio</h1>
                        <div className="flex justify-center mt-5">
                            <a href="#" className="rounded-md bg-slate-50 p-2 mx-1 opacity-90 hover:opacity-100">
                                Demo
                            </a>
                            <a href="#" className="rounded-md bg-slate-50 p-2 mx-1 opacity-90 hover:opacity-100">
                                Source Code
                            </a>
                        </div>
                    </div>
                </div>
                <div className="group relative h-[160px] min-[600px]:h-[260px] md:h-[190px] lg:h-[222px] xl:h-[190px] rounded-md font-semibold before:content[''] before:rounded-md before:bg-[#ccc] before:absolute before:w-full before:h-0 before:opacity-80 before:transition-all hover:before:h-full">
                    <img className="rounded-md h-full object-fill" src={portfolio} alt="" />
                    <div className="absolute top-[50%] translate-y-[-50%] bottom-0 opacity-0 w-full group-hover:opacity-100">
                        <h1 className="text-center font-bold text-2xl">My Portfolio</h1>
                        <div className="flex justify-center mt-5">
                            <a href="#" className="rounded-md bg-slate-50 p-2 mx-1 opacity-90 hover:opacity-100">
                                Demo
                            </a>
                            <a href="#" className="rounded-md bg-slate-50 p-2 mx-1 opacity-90 hover:opacity-100">
                                Source Code
                            </a>
                        </div>
                    </div>
                </div>
                <div className="group relative h-[160px] min-[600px]:h-[260px] md:h-[190px] lg:h-[222px] xl:h-[190px] rounded-md font-semibold before:content[''] before:rounded-md before:bg-[#ccc] before:absolute before:w-full before:h-0 before:opacity-80 before:transition-all hover:before:h-full">
                    <img className="rounded-md w-full h-full object-contain" src={menuBg} alt="" />
                    <div className="absolute top-[50%] translate-y-[-50%] bottom-0 opacity-0 w-full group-hover:opacity-100">
                        <h1 className="text-center font-bold text-2xl">More...</h1>
                        <div className="flex justify-center mt-5">
                            <a
                                href="https://github.com/trinhan201?tab=repositories"
                                className="rounded-md bg-slate-50 p-2 mx-1 opacity-90 hover:opacity-100"
                            >
                                Go Now!!!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
