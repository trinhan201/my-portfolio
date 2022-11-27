import { faFacebookF, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
        <div className="flex flex-col items-center bg-black px-10 py-14 opacity-90 dark:bg-[#19211e]">
            <ul className="flex pb-8">
                <li className="flex mx-1 text-white w-9 h-9 border border-white rounded-[50%] hover:border-[#88b4dc] hover:text-[#88b4dc]">
                    <a className="m-auto px-2 py-1" href="https://www.facebook.com/martinbilly.spears">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                </li>
                <li className="flex mx-1 text-white w-9 h-9 border border-white rounded-[50%] hover:border-[#88b4dc] hover:text-[#88b4dc]">
                    <a className="m-auto px-2 py-1" href="https://www.instagram.com/zheng_biao_an/">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
                <li className="flex mx-1 text-white w-9 h-9 border border-white rounded-[50%] hover:border-[#88b4dc] hover:text-[#88b4dc]">
                    <a className="m-auto px-2 py-1" href="https://github.com/trinhan201">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
            </ul>
            <div className="w-[90%] border-t-[1px] border-[#454545] pt-8">
                <h1 className="text-white text-center">
                    © 2022 My Website. All rights reserved | Designed by Trinh Phieu An
                </h1>
            </div>
        </div>
    );
}

export default Footer;
