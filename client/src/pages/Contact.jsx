import { useState } from "react";

export default function Contact() {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });
  const handleInput = (e) => {
    const { value, name } = e.target;
    setContact({ ...contact, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    console.log(contact);
  };
  return (
    <section className="container contact">
      <div>
        <img src="/contact.svg" alt="contact image" draggable="false" />
      </div>
      <div>
        <h1>Contact Us</h1>
        <form onSubmit={submit} className="contact_form">
          <input
            onChange={handleInput}
            name="username"
            type="text"
            placeholder="Username"
            value={contact.username}
            autoCorrect="false"
            required={true}
          />
          <input
            onChange={handleInput}
            name="email"
            type="email"
            placeholder="Email"
            value={contact.email}
            autoCorrect="false"
            required={true}
          />
          <textarea
            onChange={handleInput}
            name="message"
            placeholder="Message"
            value={contact.message}
            autoCorrect="false"
            required={true}
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}
