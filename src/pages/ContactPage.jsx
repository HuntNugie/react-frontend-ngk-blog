const ContactPage = () => {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-8">
          Ingin menghubungi kami? Gunakan form di bawah atau kirim email
          langsung ke: <span className="text-blue-500">contact@myblog.com</span>
        </p>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="bg-gray-50 p-6 rounded-lg shadow-md text-left">
            <label className="block mb-2 font-semibold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full mb-4 p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            />

            <label className="block mb-2 font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full mb-4 p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            />

            <label className="block mb-2 font-semibold" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your Message"
              className="w-full mb-4 p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info & Social */}
          <div className="flex flex-col justify-center items-center space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Get in Touch</h3>
              <p className="text-gray-700">
                Email: <span className="text-blue-500">contact@myblog.com</span>
              </p>
              <p className="text-gray-700">
                Phone: <span className="text-blue-500">+62 812 3456 7890</span>
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">Follow Us</h3>
              <div className="flex justify-center gap-4 text-gray-700">
                <a href="#" className="hover:text-blue-500 transition">
                  Twitter
                </a>
                <a href="#" className="hover:text-blue-700 transition">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-pink-500 transition">
                  Instagram
                </a>
                <a href="#" className="hover:text-gray-900 transition">
                  GitHub
                </a>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-2xl font-semibold mb-2">Newsletter</h3>
              <p className="text-gray-600 mb-2">
                Subscribe to our newsletter for updates:
              </p>
              <input
                type="email"
                placeholder="Your Email"
                className="w-64 p-3 border rounded-l focus:outline-none focus:ring focus:ring-blue-300"
              />
              <button className="bg-blue-500 text-white px-4 py-3 rounded-r hover:bg-blue-600 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Optional Map Placeholder */}
        <div className="mt-10">
          <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            Map Placeholder
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;