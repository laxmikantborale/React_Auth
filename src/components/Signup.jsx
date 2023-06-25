import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import ReCAPTCHA from "react-google-recaptcha";

const Signup = () => {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const { signup } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(email, password)
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  return (
    <>
      <div className="login_container">
        <h2 className="mb-3">Firebase Auth Signup</h2>
        {error && <p variant="danger">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <ReCAPTCHA
            sitekey="6LfrAssmAAAAAHp0fzwh2whJHRgOXEGfvmzF7HyR"
            onChange={handleRecaptchaChange}
          />
          <button type="submit">Signup</button>
        </form>
        <hr />

      </div>
      <div className="toSignup">
        Already have an account? <Link to="/">Login</Link>
      </div>
    </>
  )
}

export default Signup