import React, { useRef } from "react";
import { ContactsCollection } from "../api/ContactsCollection";

export default function ContactForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const imageUrlRef = useRef();

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

    ContactsCollection.insert(contact);
    nameRef.current.value = "";
    emailRef.current.value = "";
    imageUrlRef.current.value = "";
  };
  return (
    <form action="">
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" ref={nameRef} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" ref={emailRef} />
      </div>
      <div>
        <label htmlFor="imageUrl">Image Url</label>
        <input id="imageUrl" type="text" ref={imageUrlRef} />
      </div>
      <div>
        <button type="button" onClick={handleSaveContact}>
          Save Contact
        </button>
      </div>
    </form>
  );
}
