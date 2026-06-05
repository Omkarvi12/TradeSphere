import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (!form.email || !form.password) return setError("Email and password required");
    setLoading(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });

      const json = await res.json().catch(() => ({}));
      if (res.ok) {
        // For now just navigate to home/dashboard
        navigate("/");
      } else {
        setError(json.message || "Login failed");
      }
    } catch (err) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrap">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Sign in</h2>

        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={handleChange} />
        </label>

        <label>
          Password
          <input name="password" type="password" value={form.password} onChange={handleChange} />
        </label>

        <label className="remember">
          <input name="remember" type="checkbox" checked={form.remember} onChange={handleChange} /> Remember me
        </label>

        {error && <div className="error">{error}</div>}

        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </button>

        <div className="foot">
          Don't have an account? <span className="link" onClick={() => navigate("/signup")}>Sign up</span>
        </div>
      </form>
    </div>
  );
}
