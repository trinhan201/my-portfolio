import Form from './Form.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
function ContactModal({ setOpenModal }) {
    return (
        <div
            id="modal"
            className="flex justify-center items-center fixed top-0 left-0 bottom-0 right-0 z-40 bg-black/[.40]"
        >
            <div className="relative container w-[330px] h-[550px] md:w-[500px] md:h-[550px] bg-white p-7 rounded-md animate-fadeIn">
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
                    <Form>
                        <button
                            className="bg-transparent underline text-[#88b4dc] rounded py-2 px-5 font-semibold opacity-90 hover:opacity-100 mt-2 cursor-pointer"
                            onClick={() => {
                                setOpenModal(false);
                            }}
                        >
                            Cancel
                        </button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default ContactModal;
