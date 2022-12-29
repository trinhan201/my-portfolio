import { portfolio, anonymousShop, menuBg } from '~/assets/img/index';

function Projects() {
    const dataProjects = [
        {
            id: 1,
            projectName: 'My Portfolio',
            imgSrc: portfolio,
            projectSrc: 'https://github.com/trinhan201/my-portfolio',
            demoLink: 'https://anphieuportfolio.netlify.app/',
        },
        {
            id: 2,
            projectName: 'Anonymous Shop',
            imgSrc: anonymousShop,
            projectSrc: 'https://github.com/trinhan201/e-commerce',
            demoLink: 'https://anonymousshop.netlify.app/',
        },
    ];
    return (
        <div id="projects" className="px-[36px] py-[72px] xl:p-[72px] dark:bg-[#19211e]">
            <div className="font-bold text-3xl">
                <h1 className="inline relative dark:text-white">
                    My Projects
                    <span className="absolute w-14 left-0 bottom-[-8px] border-b-4 border-[#88b4dc]"></span>
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] py-[24px] mt-[48px] select-none">
                {dataProjects.map((item) => (
                    <div
                        key={item.id}
                        className="group relative h-[160px] min-[600px]:h-[260px] md:h-[190px] lg:h-[222px] xl:h-[190px] rounded-md font-semibold before:content[''] before:rounded-md before:bg-[#ccc] before:absolute before:w-full before:h-0 before:opacity-80 before:transition-all hover:before:h-full"
                    >
                        <img className="rounded-md h-full object-fill" src={item.imgSrc} alt={item.projectName} />
                        <div className="absolute top-[50%] translate-y-[-50%] bottom-0 opacity-0 w-full group-hover:opacity-100">
                            <h1 className="text-center font-bold text-2xl">{item.projectName}</h1>
                            <div className="flex justify-center mt-5">
                                <a
                                    href={item.demoLink}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="rounded-md bg-slate-50 p-2 mx-1 opacity-90 hover:opacity-100"
                                >
                                    Demo
                                </a>
                                <a
                                    href={item.projectSrc}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="rounded-md bg-slate-50 p-2 mx-1 opacity-90 hover:opacity-100"
                                >
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="group relative h-[160px] min-[600px]:h-[260px] md:h-[190px] lg:h-[222px] xl:h-[190px] rounded-md font-semibold before:content[''] before:rounded-md before:bg-[#ccc] before:absolute before:w-full before:h-0 before:opacity-80 before:transition-all hover:before:h-full">
                    <img className="rounded-md w-full h-full object-contain" src={menuBg} alt="More..." />
                    <div className="absolute top-[50%] translate-y-[-50%] bottom-0 opacity-0 w-full group-hover:opacity-100">
                        <h1 className="text-center font-bold text-2xl">More...</h1>
                        <div className="flex justify-center mt-5">
                            <a
                                href="https://github.com/trinhan201?tab=repositories"
                                target="_blank"
                                rel="noreferrer noopener"
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
