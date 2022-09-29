import React, { useState, useRef } from "react";
import { ErrorAlert } from "./components/ErrorAlert";
import { SuccessAlert } from "./components/SuccessAlert";

import { Meteor } from "meteor/meteor";

export default function ContactForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const imageUrlRef = useRef();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const showError = ({ message }) => {
    setError(message);
    setTimeout(() => {
      setError("");
    }, 3000);
  };
  const showSuccess = ({ message }) => {
    setSuccess(message);
    setTimeout(() => {
      setSuccess("");
    }, 3000);
  };

  const handleSaveContact = () => {
    console.log(
      nameRef.current.value,
      emailRef.current.value,
      imageUrlRef.current.value
    );

    const contact = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      imageUrl: imageUrlRef.current.value,
    };

    Meteor.call("contacts.insert", contact, (errorResponse) => {
      if (errorResponse) {
        showError({ message: errorResponse.error });
      } else {
        nameRef.current.value = "";
        emailRef.current.value = "";
        imageUrlRef.current.value = "";
        showSuccess({ message: "Contact saved." });
      }
    });
  };

  return (
    <form className="mt-6">
      {error && <ErrorAlert message={error} />}
      {success && <SuccessAlert message={success} />}
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            ref={nameRef}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <label
            htmlFor="imageUrl"
            className="block text-sm font-medium text-gray-700"
          >
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            ref={imageUrlRef}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      <div className="px-2 py-3 text-right">
        <button
          type="button"
          onClick={handleSaveContact}
          className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
        >
          Save Contact
        </button>
      </div>
    </form>
  );
}
