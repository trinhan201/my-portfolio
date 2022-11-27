import { faEnvelope, faHouseUser, faLocationDot, faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Contact() {
    return (
        <div id="contact" className="px-[36px] py-[72px] xl:p-[72px] bg-[#f1f5f8] dark:bg-[#131917]">
            <div className="font-bold text-3xl">
                <h1 className="inline relative dark:text-white">
                    Contact
                    <span className="absolute w-14 left-0 bottom-[-8px] border-b-4 border-[#88b4dc]"></span>
                </h1>
            </div>
            <div className="flex flex-col gap-y-[50px] md:flex-row xl:justify-between xl:gap-x-[100px] py-[24px] mt-[32px]">
                <div className="flex-1">
                    <h1 className="text-xl font-semibold dark:text-white">Info</h1>
                    <ul className="mt-2">
                        <li className="flex flex-col md:flex-row justify-between py-2">
                            <span className="flex w-5 mr-3 dark:text-white">
                                <FontAwesomeIcon className="m-auto" icon={faLocationDot} />
                            </span>
                            <span className="flex-1 dark:text-white">
                                Address:
                                <span className="ml-1.5 dark:text-white">District 5, HCM City</span>
                            </span>
                        </li>
                        <li className="flex flex-col md:flex-row justify-between py-2">
                            <span className="flex w-5 mr-3 dark:text-white">
                                <FontAwesomeIcon className="m-auto" icon={faMobile} />
                            </span>
                            <span className="flex-1 dark:text-white">
                                Phone:
                                <span className="ml-1.5 hover:text-[#88b4dc] dark:text-white">
                                    <a href="tel:+84367430529 ">+84 367 430 529</a>
                                </span>
                            </span>
                        </li>
                        <li className="flex flex-col md:flex-row justify-between py-2">
                            <span className="flex w-5 mr-3 dark:text-white">
                                <FontAwesomeIcon className="m-auto" icon={faEnvelope} />
                            </span>
                            <span className="flex-1 dark:text-white">
                                Email:
                                <span className="ml-1.5 hover:text-[#88b4dc] dark:text-white">
                                    <a href="mailto:trinhphieuan@gmail.com">trinhphieuan@gmail.com</a>
                                </span>
                            </span>
                        </li>
                        <li className="flex flex-col md:flex-row justify-between py-2">
                            <span className="flex w-5 mr-3 dark:text-white">
                                <FontAwesomeIcon className="m-auto" icon={faHouseUser} />
                            </span>
                            <span className="flex-1 dark:text-white">
                                Website:
                                <span className="ml-1.5 hover:text-[#88b4dc] dark:text-white">
                                    <a href="www.google.com">www.google.com</a>
                                </span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="flex-1">
                    <h1 className="text-xl font-semibold mb-2 dark:text-white">Contact Form</h1>
                    <form>
                        <div className="flex">
                            <div className="flex-1 mt-4 mr-[8px]">
                                <input
                                    className="p-3 w-full outline outline-1 outline-[#1f2044] focus:outline-[#88b4dc]"
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name"
                                    value=""
                                    required
                                />
                            </div>
                            <div className="flex-1 mt-4 ml-[8px]">
                                <input
                                    className="p-3 w-full outline outline-1 outline-[#1f2044] focus:outline-[#88b4dc]"
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    value=""
                                    required
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <input
                                className="p-3 w-full outline outline-1 outline-[#1f2044] focus:outline-[#88b4dc]"
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value=""
                            />
                        </div>
                        <textarea
                            className="p-3 w-full mt-4 outline outline-1 outline-[#1f2044] focus:outline-[#88b4dc]"
                            name="message"
                            rows="8"
                            cols="30"
                            placeholder="Message"
                            required
                        ></textarea>
                        <button className="rounded py-2 px-5 font-semibold opacity-90 hover:opacity-100 mt-2 cursor-pointer">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
