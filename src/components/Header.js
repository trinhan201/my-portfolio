import { useState, useEffect } from 'react';
import { ContactModal } from '~/components/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

const navList = [
    ['Home', '#home'],
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
    ['Contact', '#contact'],
];

function Header() {
    const [toggle, setToggle] = useState(false);
    const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark' ? true : false);
    const [scrolled, setScrolled] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

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
            menu.classList.replace('block', 'hidden');
        } else {
            setToggle(true);
            menu.classList.replace('hidden', 'block');
        }
    };

    useEffect(() => {
        document.documentElement.setAttribute('class', localStorage.getItem('theme'));
    }, []);

    const handleDarkMode = () => {
        if (darkMode === false) {
            localStorage.setItem('theme', 'dark');
            document.documentElement.setAttribute('class', localStorage.getItem('theme'));
            setDarkMode(true);
        } else {
            localStorage.setItem('theme', 'light');
            document.documentElement.setAttribute('class', localStorage.getItem('theme'));
            setDarkMode(false);
        }
    };

    return (
        <header
            className={
                'h-20 flex items-center justify-center fixed top-0 right-0 left-0 z-30' +
                ' ' +
                (scrolled ? 'bg-white shadow-xl animate-appear dark:bg-[#131917]' : 'bg-transparent')
            }
        >
            <div className="flex justify-between w-full px-[36px] xl:w-[1208px] xl:px-0 max-w-[100%] text-[#1f2044]">
                <a href="#home" className="flex text-[36px] font-bold my-auto select-none dark:text-white">
                    Pixels
                    <span className="text-base lg:text-xl self-start dark:text-white">
                        <ion-icon name="happy-outline"></ion-icon>
                    </span>
                </a>
                <ul className="hidden lg:flex text-lg font-medium self-center">
                    {navList.map(([title, location], index) => (
                        <li key={index} className="relative lg:rounded mx-1 select-none">
                            <a
                                className="relative block px-3 py-1 hover:text-[#88b4dc]
                                        before:content[''] before:absolute before:opacity-0 before:w-[0%] before:h-[2px] before:bg-[#1f2044] dark:before:bg-white
                                        before:transition-all before:duration-300 before:left-0 before:top-0 hover:before:opacity-100 hover:before:w-[100%]
                                        after:content[''] after:absolute after:opacity-0 after:w-[0%] after:h-[2px] after:bg-[#1f2044] dark:after:bg-white
                                        after:transition-all after:duration-300 after:right-0 after:bottom-0 hover:after:opacity-100 hover:after:w-[100%]
                                        dark:text-white"
                                href={location}
                            >
                                {title}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="text-[#ffffff] flex flex-row-reverse relative">
                    <div
                        tabIndex="1"
                        className=" self-center text-[24px] leading-5 p-2 md:text-[30px] rounded-lg bg-[#88b4dc]  focus:ring-2 focus:ring-white lg:hidden"
                        onClick={handleMenu}
                    >
                        {toggle ? (
                            <ion-icon name="close-outline"></ion-icon>
                        ) : (
                            <ion-icon name="menu-outline"></ion-icon>
                        )}
                    </div>

                    <div
                        className="text-3xl text-[#1f2044] self-center px-2 cursor-pointer dark:text-white"
                        onClick={handleDarkMode}
                    >
                        {darkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
                    </div>
                    <div className="hidden lg:block xl:hidden self-center">
                        <button
                            className="rounded py-2 px-3 font-semibold opacity-90 hover:opacity-100"
                            onClick={() => {
                                setModalOpen(true);
                            }}
                        >
                            Let's Work Together
                        </button>
                    </div>
                </div>
            </div>
            <ul
                id="menu"
                className="hidden overflow-hidden bg-[#ffffff] text-[#1f2044] text-center font-medium absolute top-[90px] 
                        py-2 w-[80%] md:w-[90%] rounded-br-md rounded-bl-md animate-scaleDown origin-top shadow-2xl dark:bg-[#19211e]"
            >
                {navList.map(([title, location], index) => (
                    <li key={index} className="lg:rounded select-none">
                        <a
                            className="block px-5 py-2.5 md:px-7 md:py-4 hover:text-[#88b4dc] hover:text-2xl hover:duration-500 dark:text-white"
                            href={location}
                            onClick={() => handleMenu(toggle === false)}
                        >
                            {title}
                        </a>
                    </li>
                ))}
                <div className="block lg:hidden">
                    <button
                        className="rounded py-2 px-7 md:px-56 font-semibold opacity-90 hover:opacity-100"
                        onClick={() => {
                            setModalOpen(true);
                        }}
                    >
                        Let's Work Together
                    </button>
                </div>
            </ul>
            {modalOpen && <ContactModal setOpenModal={setModalOpen} />}
        </header>
    );
}

export default Header;
