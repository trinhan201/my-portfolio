import { useState } from 'react';

const navList = [
    ['Home', '#home'],
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
    ['Contact', '#contact'],
];

function Header() {
    const [toggle, setToggle] = useState(false);

    const handleMenu = () => {
        const menu = document.getElementById('menu');
        if (toggle) {
            setToggle(false);
            menu.classList.replace('block', 'hidden');
        } else {
            setToggle(true);
            menu.classList.replace('hidden', 'block');
        }
    };

    return (
        <header
            className="h-20
                    flex
                    items-center
                    justify-center
                    bg-transparent
                    fixed
                    top-0
                    right-0
                    left-0
                    z-50"
        >
            <div
                className="flex
                        justify-between
                        w-[300px]
                        md:w-[700px]
                        md:mx-6
                        lg:w-[1200px]
                        m-w-[100%]
                        text-[#ffffff]"
            >
                <a
                    href="#home"
                    className="flex
                            text-2xl
                            lg:text-3xl
                            font-bold
                            my-auto"
                >
                    Pixels
                    <span
                        className="text-base
                                    lg:text-xl
                                    self-start"
                    >
                        <ion-icon name="happy-outline"></ion-icon>
                    </span>
                </a>
                <ul
                    className="hidden
                            lg:flex
                            text-lg
                            font-bold
                            uppercase"
                >
                    {navList.map(([title, location], index) => (
                        <li
                            key={index}
                            className="px-3
                                    py-1
                                    lg:rounded
                                    hover:text-[#976a13]
                                    hover:bg-[#facf5a]
                                    mx-1"
                        >
                            <a href={location}>{title}</a>
                        </li>
                    ))}
                </ul>
                <div
                    onClick={handleMenu}
                    className="text-[#ffffff]
                                block
                                lg:hidden
                                relative"
                >
                    <div
                        className="text-2xl
                                leading-5
                                p-2
                                border
                                border-[#cccccc]
                                rounded-lg
                                bg-[#423d3c]"
                    >
                        <ion-icon name="menu-outline"></ion-icon>
                    </div>
                    <ul
                        id="menu"
                        className="hidden 
                                bg-[#150f0c] 
                                text-[#ffffff] 
                                text-center 
                                font-bold 
                                uppercase 
                                absolute 
                                top-[62px] 
                                min-w-[300px] 
                                right-0 
                                md:min-w-[700px]
                                rounded-br-md
                                rounded-bl-md"
                    >
                        {navList.map(([title, location], index) => (
                            <li
                                key={index}
                                className="px-5
                                        py-2.5
                                        md:px-7
                                        md:py-4
                                        lg:rounded
                                        hover:text-[#976a13]
                                        hover:bg-[#facf5a]"
                            >
                                <a href={location}>{title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
