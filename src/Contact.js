import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔹 Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Validation
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim())
      newErrors.name = "Name is required";

    if (!formData.email.trim())
      newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";

    if (!formData.message.trim())
      newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🔹 Submit (Frontend → Backend)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("Message sent successfully ✅");
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        setSuccess(data.error || "Something went wrong ❌");
      }

    } catch (error) {
      setSuccess("Server error ❌");
    }

    setLoading(false);
  };

  return (
    <div className="portfolio-contact">
      <h2>Contact Me</h2>

      <div className="contact-flex">

        {/* Contact Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <small className="error">{errors.name}</small>}

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <small className="error">{errors.email}</small>}

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <small className="error">{errors.message}</small>}

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && <p className="success">{success}</p>}

          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><strong>Email:</strong> hilawit.ahailu@gmail.com</p>
          <p><strong>Phone:</strong> +251 82622917</p>
          <p><strong>Location:</strong> Addis Ababa, Ethiopia</p>

          <p>
            <strong>Social:</strong><br />
            <a href="https://linkedin.com/in/hilawit-assefa" target="_blank" rel="noopener noreferrer">LinkedIn</a><br />
            <a href="https://github.com/hilawitahailu-wq" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Contact;