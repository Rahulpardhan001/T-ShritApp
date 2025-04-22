import React from "react";

const Contact = () => {
  return (
    <section className="w-full bg-gray-100 py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Contact Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Get in touch</h3>
            <p className="text-gray-600">We’d love to hear from you! Fill out the form or contact us directly.</p>
            <div className="space-y-2 text-gray-600">
              <p><span className="font-medium">Email:</span> contact@example.com</p>
              <p><span className="font-medium">Phone:</span> +1 234 567 890</p>
              <p><span className="font-medium">Address:</span> 123 Main Street, NY</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
