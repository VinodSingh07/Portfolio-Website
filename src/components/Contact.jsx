import React from "react";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../index.css";
import { BsYoutube } from "react-icons/bs";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_sjndizr",
        "template_c2inppn",
        formRef.current,
        "NuF1pVkaKV1p3atJ4"
      )
      .then(
        (result) => {
          alert("Message successfully sent!");
          window.location.reload(false);
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the messae, please try again!");
        }
      );
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-2">
            //Submit the form below and shoot me an email -
            vinodlatwal03@gmail.com
          </p>
        </div>

        <input
          className=" bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="user_name"
        />
        <input
          className="p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Subject"
          name="user_subject"
        />
        <input
          className="p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="user_email"
        />
        <textarea
          className="p-2 bg-[#ccd6f6]"
          name="message"
          rows="7"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center duration-300">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
