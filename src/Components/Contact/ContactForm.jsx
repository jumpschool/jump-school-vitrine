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
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
    };

    try {
      const response = await axios.post('https://hook.eu2.make.com/yhja7t6uq6nwyz9fa7wfqykukfi1v92z', data, {
        headers: {
          'Content-Type': 'application/json',
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
