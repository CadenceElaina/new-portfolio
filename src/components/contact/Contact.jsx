import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Contact = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSnackbarOpen = () => {
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace "your_user_id" with your EmailJS User ID
    const userId = "ZUoiTDoYzvcOsCFWH";
    const serviceId = "service_6sxmwlq";
    const templateId = "template_6r04u6v";

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log("Email sent successfully:", response);
        handleSnackbarOpen();
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });

    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <div className="contact-container">
        <h3>Send me an email</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity="success"
        >
          Email sent successfully!
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default Contact;
