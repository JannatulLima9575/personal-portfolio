import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_t4jo61n', // 🔑 এখানে তোমার Service ID বসাবে। যেমন: 'service_gmail'
      '__ejs-test-mail-service__', // 🔑 এখানে তোমার Template ID বসাবে। যেমন: 'template_abc123'
      form.current,
      'OstHFNuCO9J-deGKc' // 🔑 এখানে তোমার Public Key (User ID) বসাবে। যেমন: 'zPzFxxxxxxxxxxxxxxxx'
    )
      .then((result) => {
          alert("Message sent successfully!");
      }, (error) => {
          alert("Failed to send message, please try again.");
      });

    e.target.reset();
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white py-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">📬 Contact Me</h2>
        
        <form ref={form} onSubmit={sendEmail} className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm mb-1">Your Name</label>
            <input
              type="text"
              name="user_name" // 📝 Template এর variable name এর সাথে মিল থাকতে হবে
              id="name"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-1">Email Address</label>
            <input
              type="email"
              name="user_email" // 📝 Template এর variable name এর সাথে মিল থাকতে হবে
              id="email"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm mb-1">Your Message</label>
            <textarea
              name="message" // 📝 Template এর variable name এর সাথে মিল থাকতে হবে
              id="message"
              rows="5"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;