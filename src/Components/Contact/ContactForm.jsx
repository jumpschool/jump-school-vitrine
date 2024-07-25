import React, { useState } from "react";
import { Client } from "@hubspot/api-client";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
        properties: [

            {"property": "firstname", "value":firstName},
            {"property": "lastname", "value":lastName},
            {"property": "email", "value":email},
            {"property": "phone", "value":phoneNumber},
            {"property": "message", "value":message},
        ],
    };

    const apiKey = import.meta.env.VITE_Hubspot_API;
    console.log(apiKey);
    if (!apiKey) {
      console.error("HubSpot API key is missing");
      return;
    }

    const hubspotClient = new Client({ accessToken: apiKey });
    console.log(hubspotClient)

    // const x = hubspotClient.setBasePath('/api');

    try {
      const createContactResponse = await hubspotClient.crm.contacts.basicApi.create(data);
      console.log('Contact created successfully:', createContactResponse);
    } catch (e) {
      console.log('well you have to fix this:', createContactResponse);
      console.error('Error creating contact:', e);
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-[15%]">
      <input name="firstname" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <br />

      <input name="lastname" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <br />

      <input name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />

      <input name="phoneNumber" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <br />

      <input name="message" placeholder="Please add information regarding your inquiry" value={message} onChange={(e) => setMessage(e.target.value)} />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}
