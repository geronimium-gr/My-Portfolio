import React from "react";
import { FaRegPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      className="flex justify-center items-center p-4 bg-gunmetal"
    >
      <form
        id="form"
        action="https://getform.io/f/b3b43de4-6b66-43fc-bbb6-858a5cf494b7"
        className="flex flex-col max-w-[600px] w-full"
        method="POST"
      >
        <div>
          <div className="relative flex items-center pt-5">
            <div className="flex-grow border-2 border-newYorkPink"></div>
            <span className="p-2 text-whitish text-2xl text-center font-bold md:text-3xl">
              Contact
            </span>
            <div className="flex-grow border-2 border-newYorkPink"></div>
          </div>
          <p className="text-whitish py-4">
            Feel free to leave me a message via form, or you can get a hold of
            me at <strong>geronimoadalia@gmail.com</strong>
          </p>
        </div>
        <input
          type="text"
          className="p-2 bg-whitish focus:outline-none"
          placeholder="Name (Optional)"
          name="name"
        />
        <input
          type="email"
          className="my-4 p-2 bg-whitish focus:outline-none"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="p-2 bg-whitish focus:outline-none"
          name="message"
          id=""
          rows="5"
          maxLength={200}
          placeholder="Message"
          required
        ></textarea>
        <button className="text-whitish m-4 p-4 px-6 py-3 font-semibold group border-[3px] relative inline-flex mx-auto items-center justify-center overflow-hidden border-whitish text-newYorkPink shadow-md transition duration-300 ease-out hover:border-newYorkPink">
          <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-newYorkPink text-white duration-300 group-hover:translate-x-0">
            <FaRegPaperPlane className="text-gunmetal" size={25} />
          </span>
          <span className="ease absolute flex h-full w-full transform items-center justify-center text-whitish transition-all duration-300 group-hover:translate-x-full">
            Send Message
          </span>
          <span className="invisible relative">Send Message</span>
        </button>
      </form>
    </div>
  );
};

export default Contact;
