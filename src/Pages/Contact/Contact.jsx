import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

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

    // EmailJS service (replace with your own User ID, Service ID, and Template ID)
    emailjs
      .sendForm("service_1pquych", "template_gj5kdh2", e.target, "ye2m85S2Qiwn8xsJh")
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
    <section id="contact" className="py-20 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12">
          Get in Touch
        </h2>

        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-2 gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Contact Information Section */}
          <div className="flex flex-col justify-center items-center space-y-6 md:space-y-0 md:items-start md:text-left">
            <h3 className="text-3xl font-semibold mb-6">Contact Information</h3>
            <div className="flex items-center space-x-4 text-lg">
              <FaEnvelope className="text-teal-500 text-3xl" />
              <span className="text-white">your-email@example.com</span>
            </div>
            <div className="flex items-center space-x-4 text-lg">
              <FaPhoneAlt className="text-teal-500 text-3xl" />
              <span className="text-white">+123 456 7890</span>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-6 text-center">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 text-lg rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 text-lg rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div className="mb-6">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="6"
                  className="w-full px-4 py-3 text-lg rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition duration-300"
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
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
