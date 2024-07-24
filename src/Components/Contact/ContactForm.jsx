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

        {"property": "firstname", "value":firstName},
        {"property": "lastname", "value":lastName},
        {"property": "email", "value":email},
        {"property": "phone", "value":phone},
        {"property": "message", "value":message},
    ],
    };

    try {
      const response = await axios.post(
        `https://api.hubapi.com/crm/v3/objects/contacts`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${import.meta.env.VITE_Hubspot_API}`, 
          },
        }
      );

      if (response.status === 200) { 
        alert("Submission successful");
      } else {
        const errorMessage = response.data && response.data.message
          ? response.data.message
          : "An unknown error occurred";
        alert(`Submission failed: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Submission failed");
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-[15%]">
      <input name="firstname" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
      <br />

      <input name="lastname" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
      <br />

      <input name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <br />

      <input name="phone" placeholder="Phone Number" value={phone} onChange={(e) => setPhoneNumber(e.target.value)}/>
      <br />

      <input name="message" placeholder="Please add information regarding your inquiry" value={message} onChange={(e) => setMessage(e.target.value)}/>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}
