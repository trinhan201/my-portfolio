function Form({ children }) {
    return (
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
            {children}
        </form>
    );
}

export default Form;
