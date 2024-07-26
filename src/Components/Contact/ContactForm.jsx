import React, { useState } from "react";
import axios from "axios";

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
        { property: "firstname", value: firstName },
        { property: "lastname", value: lastName },
        { property: "email", value: email },
        { property: "phone", value: phoneNumber },
        { property: "message", value: message },
      ],
    };
    console.log(data);
    const apiKey= import.meta.env.VITE_Hubspot_API;
    console.log(apiKey);

    try {
        console.log('hey')
      const response = await axios.post('https://api.hubapi.com/contacts/v1/contact', data, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'https://api.hubapi.com/',
        }
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-[15%]">
      <input
        name="firstname"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      <input
        name="lastname"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <input
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        name="phoneNumber"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <br />
      <input
        name="message"
        placeholder="Please add information regarding your inquiry"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}