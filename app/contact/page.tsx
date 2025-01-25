"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../Components/Button";
import { FaPaperPlane } from "react-icons/fa";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Here you can add logic to handle form submission, such as sending data to a backend server
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="text-center">
          <div className="text-2xl font-semibold mb-4">Thank you!</div>
          <div className="text-md">
            We appreciate your interest. Our team will get back to you soon.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full grid place-items-center mx-auto py-8 px-4 relative">
      <div className="w-full h-full absolute -top-1/2 skew-y-[-25deg] bg-red-200 z-0"></div>
      <form
        onSubmit={handleSubmit}
        className="mt-8 relative z-10">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Get In Touch
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-6 w-[40ch]">
            Have questions or need assistance? Feel free to reach out to us.
            We're here to help!
          </p>
        </div>

        <div className="mb-4 w-full">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="outline-none shadow-[0_0_2px_0_gray] py-1 px-2 w-full rounded text-sm "
            required
          />
        </div>
        <div className="mb-4 w-full">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="outline-none shadow-[0_0_2px_0_gray] py-1 px-2 w-full rounded text-sm"
            required
          />
        </div>
        <div className="mb-4 w-full">
          <textarea
            placeholder="Your message"
            name="message"
            rows={4}
            className="outline-none shadow-[0_0_2px_0_gray] py-1 px-2 w-full rounded text-sm"
            required></textarea>
        </div>
        <div className="text-center">
          <Button
            label="Send Message"
            size="sm"
            variant="primary"
            type="submit"
            icon={<FaPaperPlane />}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
