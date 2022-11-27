import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
function ContactModal({ setOpenModal }) {
    return (
        <div
            id="modal"
            className="flex justify-center items-center fixed top-0 left-0 bottom-0 right-0 z-40 bg-black/[.40]"
        >
            <div className="relative container w-[330px] h-[550px] md:w-[500px] md:h-[550px] bg-white p-7 rounded-md animate-modalFadeIn">
                <div
                    className="absolute text-2xl leading-[15px] top-2.5 right-3 p-4 opacity-60 hover:opacity-100 cursor-pointer"
                    onClick={() => {
                        setOpenModal(false);
                    }}
                >
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <header>
                    <h1 className="text-3xl font-semibold">Contact Form</h1>
                </header>
                <div className="py-5">
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
                        <button
                            className="rounded py-2 px-5 font-semibold opacity-90
                                hover:opacity-100 mt-2 cursor-pointer"
                        >
                            Send
                        </button>
                        <button
                            className="bg-[#ffffff] text-[#88b4dc] rounded py-2 px-5 font-semibold opacity-90
                                hover:opacity-100 hover:underline mt-2 ml-2 cursor-pointer"
                            onClick={() => {
                                setOpenModal(false);
                            }}
                        >
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactModal;
