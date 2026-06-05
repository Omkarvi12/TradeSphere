import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "", agree: false });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Full name is required";
    if (!form.email) err.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) err.email = "Enter a valid email";
    if (!form.password) err.password = "Password is required";
    else if (form.password.length < 6) err.password = "Password must be at least 6 characters";
    if (form.password !== form.confirm) err.confirm = "Passwords do not match";
    if (!form.agree) err.agree = "You must accept the terms";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    if (!validate()) return;

    try {
      // Try to POST to backend if available. Fallback to a local success message.
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, password: form.password }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        // If backend returns error, show message body if available
        const json = await res.json().catch(() => ({}));
        setStatus(json.message || "error");
      }
    } catch (err) {
      // Network error or no backend - show local success as fallback
      setStatus("success (local)");
    }
  };

  if (status === "success") {
    return (
      <div className="signup-wrap">
        <div className="signup-card">
          <h2>Welcome aboard!</h2>
          <p>Your account was created. You can now log in.</p>
          <button className="btn" onClick={() => navigate("/login")}>
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  if (status && status !== "success") {
    return (
      <div className="signup-wrap">
        <div className="signup-card">
          <h2>Signup error</h2>
          <p>{String(status)}</p>
          <button className="btn" onClick={() => setStatus(null)}>
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="signup-wrap">
      <form className="signup-card" onSubmit={handleSubmit} noValidate>
        <h2>Create your account</h2>

        <label>
          Full name
          <input name="name" value={form.name} onChange={handleChange} />
          {errors.name && <div className="error">{errors.name}</div>}
        </label>

        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={handleChange} />
          {errors.email && <div className="error">{errors.email}</div>}
        </label>

        <label>
          Password
          <input name="password" type="password" value={form.password} onChange={handleChange} />
          {errors.password && <div className="error">{errors.password}</div>}
        </label>

        <label>
          Confirm Password
          <input name="confirm" type="password" value={form.confirm} onChange={handleChange} />
          {errors.confirm && <div className="error">{errors.confirm}</div>}
        </label>

        <label className="terms">
          <input name="agree" type="checkbox" checked={form.agree} onChange={handleChange} /> I agree to the terms
        </label>
        {errors.agree && <div className="error">{errors.agree}</div>}

        <button className="btn" type="submit">
          Sign up
        </button>

        <div className="foot">
          Already have an account? <span className="link" onClick={() => navigate("/login")}>Login</span>
        </div>
      </form>
    </div>
  );
}

export default Signup;
