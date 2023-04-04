import React from "react";
import login_illustration from "../assets/login_illustration.svg";
import lendsqr_logo from "../assets/lendsqr_logo.svg";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/dashboard/users");
  };

  return (
    <div className="login">
      <header>
        <img src={lendsqr_logo} alt="lendsqr logo" />
      </header>
      <figure>
        <img src={login_illustration} alt="" />
      </figure>
      <main>
        <form onSubmit={handleSubmit}>
          <p>Welcome!</p>
          <p>Enter details to login</p>
          <input
            required
            type="email"
            name="email"
            aria-label="email"
            placeholder="Email"
          ></input>
          <div className="password_container">
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              aria-label="password"
              placeholder="Password"
              minLength={7}
            ></input>
            <button
              type="button"
              onClick={() => setShowPassword((state) => !state)}
            >
              {showPassword ? "hide" : "show"}
            </button>
          </div>
          <a href="" onClick={() => alert("This is a demo website")}>
            forgot password?
          </a>
          <button type="submit">Log in</button>
        </form>
      </main>
    </div>
  );
};
