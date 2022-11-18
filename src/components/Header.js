function Header() {
    return (
        <header className="h-20 flex items-center justify-center bg-black">
            <div className="flex justify-between w-[1200px] m-w-[100%] text-[#ffffff]">
                <a href="#home" className="text-3xl font-bold my-auto">
                    My Portfolio
                </a>
                <ul className="flex text-lg font-semibold">
                    <li className="px-3 py-1 rounded hover:text-[#976a13] hover:bg-[#facf5a]">
                        <a href="#home">Home</a>
                    </li>
                    <li className="px-3 py-1 rounded hover:text-[#976a13] hover:bg-[#facf5a]">
                        <a href="#about">About</a>
                    </li>
                    <li className="px-3 py-1 rounded hover:text-[#976a13] hover:bg-[#facf5a]">
                        <a href="#skills">Skills</a>
                    </li>
                    <li className="px-3 py-1 rounded hover:text-[#976a13] hover:bg-[#facf5a]">
                        <a href="#projects">Projects</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
