import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="flex justify-center items-center p-4 bg-gunmetal"
    >
      <form
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
            Submit the form below or send me an email - geronimoadalia@gmail.com
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
        <button className="text-whitish border-2 hover:bg-newYorkPink hover:border-newYorkPink px-4 py-3 my-8 mx-auto flex items-center">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
