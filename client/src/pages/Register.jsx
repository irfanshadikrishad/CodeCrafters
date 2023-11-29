import { useState } from "react";

export default function Register() {
  const [register, setRegister] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    console.log(register);
  };
  return (
    <section className="container register">
      <div className="register_image">
        <img src="/designer.svg" alt="register_image" draggable="false" />
      </div>
      <div className="register_form">
        <h1>Register</h1>
        <form onSubmit={submit}>
          <input
            name="username"
            onChange={handleInput}
            required
            value={register.username}
            type="text"
            placeholder="Username"
          />
          <input
            name="email"
            onChange={handleInput}
            required
            value={register.email}
            type="email"
            placeholder="Email"
          />
          <input
            name="phone"
            onChange={handleInput}
            required
            value={register.phone}
            type="phone"
            placeholder="Phone"
          />
          <input
            name="password"
            onChange={handleInput}
            required
            value={register.password}
            type="password"
            placeholder="Password"
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </section>
  );
}
