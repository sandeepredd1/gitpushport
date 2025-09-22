import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!email) {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Invalid email format.";
    }

    if (!password) {
      formErrors.password = "Password is required.";
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h1>Login / Signup</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Enter Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input 
            type="password" 
            placeholder="Enter Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
