// src/ContactPage.js
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          height: "500px",
          width: "400px",
          border: "2px solid black",
        }}
      >
        <h1 style={{ color: "black", marginBottom: "20px" }}>Contact Us</h1>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "400px",
          }}
        >
          <label style={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          <label style={styles.label}>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
          />
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  label: {
    marginBottom: "5px",
    color: "black",
    fontWeight: "bold",
  },
  input: {
    marginBottom: "15px",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid black",
    borderRadius: "5px",
    outline: "none",
  },
  textarea: {
    marginBottom: "15px",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid black",
    borderRadius: "5px",
    outline: "none",
    height: "100px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "orange",
    color: "white",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    outline: "none",
  },
};

export default ContactForm;
