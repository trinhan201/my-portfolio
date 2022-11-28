import { useState } from 'react';

function Form({ children }) {
    const [inputValue, setInputValue] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
    };
    return (
        <form name="contact" method="post" onSubmit={handleSubmit}>
            <div className="flex">
                <div className="flex-1 mt-4 mr-[8px]">
                    <input
                        className="p-3 w-full outline outline-1 outline-[#1f2044] focus:outline-[#88b4dc]"
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={inputValue.fullName}
                        required
                        onChange={(e) => setInputValue((prev) => ({ ...prev, fullName: e.target.value }))}
                    />
                </div>
                <div className="flex-1 mt-4 ml-[8px]">
                    <input
                        className="p-3 w-full outline outline-1 outline-[#1f2044] focus:outline-[#88b4dc]"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={inputValue.email}
                        required
                        onChange={(e) => setInputValue((prev) => ({ ...prev, email: e.target.value }))}
                    />
                </div>
            </div>
            <div className="mt-4">
                <input
                    className="p-3 w-full outline outline-1 outline-[#1f2044] focus:outline-[#88b4dc]"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={inputValue.subject}
                    onChange={(e) => setInputValue((prev) => ({ ...prev, subject: e.target.value }))}
                />
            </div>
            <textarea
                className="p-3 w-full mt-4 outline outline-1 outline-[#1f2044] focus:outline-[#88b4dc]"
                name="message"
                rows="8"
                cols="30"
                placeholder="Message"
                required
                value={inputValue.message}
                onChange={(e) => setInputValue((prev) => ({ ...prev, message: e.target.value }))}
            ></textarea>
            <button
                className="bg-[#88b4dc] text-white rounded py-2 px-5 font-semibold opacity-90 hover:opacity-100 mt-2 cursor-pointer"
                type="submit"
            >
                Send
            </button>
            {children}
        </form>
    );
}

export default Form;
