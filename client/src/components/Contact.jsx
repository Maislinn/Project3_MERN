import React, { useRef } from "react";
import emailjs from "emailjs-com";


const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_bwg4wxs',
        'template_3yqv3t9',
        form.current,
        '-0fBDvvdgcSeYE7uC')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        })
        .then(alert("Your message has been sent"))
      .then(e.target.reset());;
    };

    return (
        <>
        <h2 className="text-center text-3xl pt-10">Questions?</h2>
        <p className="text-center m-3">If you'd like a customer service representative to contact you for a specific order, please fill out the form below and we'll be in touch soon!</p>
        <form
            className="m-5 grid place-items-center"
            ref={form}
            onSubmit={sendEmail}
            method="POST"
            target="_blank">
            <div className="mb-3 w-1/2">
                <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus: ring w-full"
                    required
                />
            </div>
            <div className="mb-3 pt-0 w-1/2">
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus: ring w-full"
                    required
                />
            </div>
            <div className="mb-3 pt-0 w-1/2">
                <textarea
                    placeholder="Your message"
                    name="message"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus: ring w-full"
                    required
                />
            </div>
            <div className="mb-3 pt-0">
                <button className="[background-color:#f5bcb1] [color:#9c9897]  active:bg-neutral-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                >
                    Send Message
                </button>
            </div>
        </form>
        </>
    );
};

export default ContactForm;
