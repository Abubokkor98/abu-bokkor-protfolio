import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  FaArrowRight,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setStatus("Please fill in all fields.");
      return;
    }

    emailjs
      .sendForm(
        `${import.meta.env.VITE_EMAILJS_SERVICE_ID}`,
        `${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`,
        e.target,
        `${import.meta.env.VITE_EMAILJS_USER_ID}`
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setStatus("Error: Message not sent.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 text-gray-800 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <header className="flex justify-between items-center mb-12">
          {/* Header */}
          <h2 className="text-4xl font-bold text-blue-600">Contact Me:</h2>
        </header>
        {/* Contact Information */}
        <div className="p-8">
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-blue-600 mr-4" size={24} />
            <a
              href="mailto:example@example.com"
              className="text-lg text-gray-800 hover:text-blue-600"
            >
              mail.abubokkor@gmail.com
            </a>
          </div>
          <div className="flex items-center mb-4">
            <FaPhoneAlt className="text-blue-600 mr-4" size={24} />
            <a
              href="tel:+880123456789"
              className="text-lg text-gray-800 hover:text-blue-600"
            >
              +88 01778313311
            </a>
          </div>
          <div className="flex items-center">
            <FaWhatsapp className="text-green-600 mr-4" size={24} />
            <a
              href="https://wa.me/+8801778313311"
              className="text-lg text-gray-800 hover:text-green-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 text-lg rounded-lg bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 text-lg rounded-lg bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="6"
                className="w-full px-4 py-3 text-lg rounded-lg bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </div>
            {status && (
              <div
                className={`mt-4 text-lg font-medium ${
                  status.includes("Error") ? "text-red-500" : "text-green-500"
                }`}
              >
                {status}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
