import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { ContactsCollection } from "../api/ContactsCollection";

export default function ContactList() {
  const contacts = useTracker(() => ContactsCollection.find({}).fetch());
  return (
    <>
      <h3>Contact List</h3>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.email}>
            <img src={contact.imageUrl} />
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul>
    </>
  );
}
