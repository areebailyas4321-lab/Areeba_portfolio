import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_axbtt7a",
        "template_1ziboq3",
        form.current,
        "Rz7W9pVF0HdDryNNL"
      )
      .then(
        () => {
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I&apos;d love to hear from you—reach out for any opportunities or questions!
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-10 w-full justify-center items-start">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-6 lg:w-1/4"
        >
          <div className="bg-[#0d081f] p-6 rounded-xl border border-gray-800 shadow-lg hover:border-purple-500/50 transition-colors">
            <div className="flex items-center space-x-4 mb-2">
              <div className="bg-purple-500/20 p-3 rounded-full text-purple-400">
                <FaEnvelope size={20} />
              </div>
              <h3 className="text-xl font-semibold text-white">Email</h3>
            </div>
            <p className="text-gray-400 pl-14">areebailyas8421@gmail.com</p>
          </div>

          <div className="bg-[#0d081f] p-6 rounded-xl border border-gray-800 shadow-lg hover:border-purple-500/50 transition-colors">
            <div className="flex items-center space-x-4 mb-2">
              <div className="bg-purple-500/20 p-3 rounded-full text-purple-400">
                <FaMapMarkerAlt size={20} />
              </div>
              <h3 className="text-xl font-semibold text-white">Location</h3>
            </div>
            <p className="text-gray-400 pl-14">Riastabad, Wah Cantt</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/3 bg-[#0d081f] p-8 rounded-xl shadow-2xl border border-gray-800"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-6">
            Send a Message <span className="ml-1">🚀</span>
          </h3>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
            <motion.input
              whileFocus={{ scale: 1.02, borderColor: "#8245ec" }}
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-lg bg-[#131025] text-white border border-gray-700 focus:outline-none transition-all"
            />
            <motion.input
              whileFocus={{ scale: 1.02, borderColor: "#8245ec" }}
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-lg bg-[#131025] text-white border border-gray-700 focus:outline-none transition-all"
            />
            <motion.input
              whileFocus={{ scale: 1.02, borderColor: "#8245ec" }}
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-4 rounded-lg bg-[#131025] text-white border border-gray-700 focus:outline-none transition-all"
            />
            <motion.textarea
              whileFocus={{ scale: 1.02, borderColor: "#8245ec" }}
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="w-full p-4 rounded-lg bg-[#131025] text-white border border-gray-700 focus:outline-none transition-all resize-none"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-4 text-white font-bold rounded-lg shadow-lg hover:shadow-purple-500/30 transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/3"
        >
          <div className="bg-[#0d081f] p-4 rounded-xl border border-gray-800 shadow-lg h-full">
            <h3 className="text-2xl font-bold text-white text-center mb-4">Find Me Here</h3>
            <div className="rounded-lg overflow-hidden border-2 border-purple-500/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106360.40277227183!2d72.61299490000002!3d33.7247266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df948974419acb%3A0x984357e1632d30f!2sWah%20Cantt%2C%20Rawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1732792000000!5m2!1sen!2s"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wah Cantt Location"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
