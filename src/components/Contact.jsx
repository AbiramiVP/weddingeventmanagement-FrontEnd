import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");     
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
        toast.error("Please fill in all fields.");
        return;
    }

    setLoading(true);

    const payload = { name, email, subject, message };
    console.log("Sending payload:", payload); // Log the payload

    try {
        const res = await axios.post(
            "http://localhost:4000/api/v2/message/send",
            payload,
            {
                withCredentials: true,
                headers: { "Content-Type": "application/json" }, // Ensure the content type is set to JSON
            }
        );
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    } catch (error) {
        console.error("Error response:", error);
        const errorMessage = error.response?.data?.message || "An error occurred.";
        toast.error(errorMessage);
    } finally {
        setLoading(false);
    }
};

  return (
    <div className="contact container">
      <div className="banner">
        <div className="item">
          <h4>Address</h4>
          <p>Chrompet, Chennai, 600044</p>
        </div>
        <div className="item">
          <h4>Call Us</h4>
          <p>+91 9483932999</p>
        </div>
        <div className="item">
          <h4>Mail Us</h4>
          <p>dreamakers@gmail.com</p>
        </div>
      </div>
      <div className="banner">
        <div className="item">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31106.771294929316!2d80.12568332910476!3d12.949671365962077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fb1cef75f81%3A0xe2956fefeaa0fa80!2sChromepet%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1730917835113!5m2!1sen!2sin"
            style={{ border: 0, width: "100%", height: "450px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="item">
          <form onSubmit={handleSendMessage}>
            <h2>CONTACT</h2>
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <textarea
              rows={10}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
