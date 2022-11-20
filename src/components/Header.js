import { useState, useEffect } from 'react';

const navList = [
    ['Home', '#home'],
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
    ['Contact', '#contact'],
];

function Header() {
    const [toggle, setToggle] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const scrollPage = () => {
            const windowHeight = window.scrollY;
            if (windowHeight >= 80) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', scrollPage);

        return () => window.removeEventListener('scroll', scrollPage);
    }, []);

    const handleMenu = () => {
        const menu = document.getElementById('menu');
        if (toggle) {
            setToggle(false);
            var delay;
            window.clearTimeout(delay);
            delay = setTimeout(() => {
                menu.classList.replace('block', 'hidden');
            }, 1000);
            menu.classList.replace('animate-scaleDown', 'animate-scaleUp');
        } else {
            setToggle(true);
            menu.classList.replace('hidden', 'block');
            menu.classList.replace('animate-scaleUp', 'animate-scaleDown');
        }
        console.log(toggle);
    };

    const handleActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <header
            className={
                (scrolled ? 'bg-black animate-appear' : 'bg-transparent') +
                ' ' +
                'h-20 flex items-center justify-center fixed top-0 right-0 left-0 z-50'
            }
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
                            md:text-[28px]
                            lg:text-[36px]
                            font-bold
                            my-auto
                            select-none"
                    onClick={() => handleActiveLink('#home')}
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
                            font-medium"
                >
                    {navList.map(([title, location], index) => (
                        <li
                            key={index}
                            className="
                                    lg:rounded
                                    hover:text-[#976a13]
                                    hover:bg-[#facf5a]
                                    mx-1
                                    select-none"
                        >
                            <a
                                className={
                                    (activeLink === location ? 'text-[#976a13] bg-[#facf5a] lg:rounded' : '') +
                                    ' ' +
                                    'block px-3 py-1'
                                }
                                href={location}
                                onClick={() => handleActiveLink(location)}
                            >
                                {title}
                            </a>
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
                        tabIndex="1"
                        className="
                                text-[24px]
                                leading-5
                                p-2
                                md:text-[30px]
                                rounded-lg
                                bg-[#423d3c] 
                                focus:ring-2
                                focus:ring-white"
                    >
                        <ion-icon name="menu-outline"></ion-icon>
                    </div>
                    <ul
                        id="menu"
                        className={
                            'hidden overflow-hidden bg-[#150f0c] text-[#ffffff] text-center font-medium absolute top-20 right-0 min-w-[300px] md:min-w-[700px] rounded-br-md rounded-bl-md animate-scaleUp origin-top'
                        }
                    >
                        {navList.map(([title, location], index) => (
                            <li key={index} className="lg:rounded hover:text-[#976a13] hover:bg-[#facf5a] select-none">
                                <a
                                    className={
                                        (activeLink === location ? 'text-[#976a13] bg-[#facf5a] lg:rounded' : '') +
                                        ' ' +
                                        'block px-5 py-2.5 md:px-7 md:py-4'
                                    }
                                    href={location}
                                    onClick={() => handleActiveLink(location)}
                                >
                                    {title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
