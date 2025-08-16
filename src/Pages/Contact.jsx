import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t4jo61n",     // ✅ তোমার EmailJS Service ID
        "template_26euwqo",     // ✅ তোমার Template ID
        formRef.current,
        "OstHFNuCO9J-deGKc"    
      )
      .then(
        (result) => {
          console.log("SUCCESS:", result.text);
          alert("Message sent successfully! ✅");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message. ❌ Try again.");
        }
      );

    e.target.reset(); // Reset form
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white py-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">📬 Contact Me</h2>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-2 rounded bg-gray-700 text-white"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-2 rounded bg-gray-700 text-white"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm mb-1">
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="w-full px-4 py-2 rounded bg-gray-700 text-white"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
