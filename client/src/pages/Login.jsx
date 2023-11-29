import { useState } from "react";

export default function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    console.log(login);
  };
  return (
    <section className="container register">
      <div className="register_image">
        <img src="/designer.svg" alt="register_image" draggable="false" />
      </div>
      <div className="register_form">
        <h1>Login</h1>
        <form onSubmit={submit}>
          <input
            name="email"
            onChange={handleInput}
            required
            value={login.email}
            type="email"
            placeholder="Email"
          />
          <input
            name="password"
            onChange={handleInput}
            required
            value={login.password}
            type="password"
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
}
