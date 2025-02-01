import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { name, email, message } = formData;
  //   if (!name || !email || !message) {
  //     setStatus("Please fill in all fields.");
  //     return;
  //   }
  //   emailjs
  //     .sendForm(
  //       import.meta.env.VITE_EMAILJS_SERVICE_ID,
  //       import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  //       e.target,
  //       import.meta.env.VITE_EMAILJS_USER_ID
  //     )
  //     .then(
  //       () => {
  //         setStatus("Message sent successfully!");
  //         setFormData({ name: "", email: "", message: "" });
  //       },
  //       () => setStatus("Error: Message not sent.")
  //     );
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setStatus("Please fill in all fields.");
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(() => {
        setStatus("Message sent successfully!");

        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({ name: "", email: "", message: "" });
          setStatus(null);
        }, 3000);
      })
      .catch(() => {
        setStatus("Error: Message not sent.");
        setTimeout(() => {
          setStatus(null);
        }, 3000);
      });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6 sm:px-12 lg:px-20">
      <div className="container mx-auto grid lg:grid-cols-2 items-center gap-16">
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ x: "-50vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-gray-800"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Get in Touch
          </h2>
          <p className="text-gray-600">Have something on your mind? Let's talk — drop me a message!</p>
          <div className="space-y-4">
            <div className="flex items-center bg-blue-500/10 p-4 rounded-lg">
              <FaEnvelope className="text-blue-600 mr-4" size={24} />
              <a
                href="mailto:mail.abubokkor@gmail.com"
                className="text-lg text-gray-800 hover:text-blue-600"
              >
                mail.abubokkor@gmail.com
              </a>
            </div>
            <div className="flex items-center bg-blue-500/10 p-4 rounded-lg">
              <FaPhoneAlt className="text-blue-600 mr-4" size={24} />
              <a
                href="tel:+8801778313311"
                className="text-lg text-gray-800 hover:text-blue-600"
              >
                +88 01778313311
              </a>
            </div>
            <div className="flex items-center bg-green-500/10 p-4 rounded-lg">
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
            <div className="flex items-center bg-pink-500/10 p-4 rounded-lg">
              <FaMapMarkerAlt className="text-pink-600 mr-4" size={24} />
              <p className="text-lg text-gray-800">
                Chowkbazar, Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ x: "100vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 text-lg rounded-lg bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 text-lg rounded-lg bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 text-lg rounded-lg bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 text-white font-semibold rounded-lg transition duration-300"
            >
              Send Message
            </button>
            {status && (
              <div
                className={`text-center text-lg font-medium mt-4 ${
                  status.includes("Error") ? "text-red-500" : "text-green-500"
                }`}
              >
                {status}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
