import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
function Contact() {
  return (
    <div>
      <Header />
      <section className="bg-slate-100">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-4xl text-2xl font-bold mb-4 text-green-400">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto  text-black font-semibold">
              "Get in touch with us to learn more about our organic products and
              how they fit into a healthier lifestyle. Whether you have
              questions about our offerings or need personalized
              recommendations, we're here to help you on your wellness journey.
              Fill out the form below and we'll respond as soon as possible!"
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-md text-gray-800"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-300 bg-opacity-100 rounded focus:bg-white border border-gray-100 text-black p-2 focus:border-yellow-400 focus:ring-2 focus:ring-green-400"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-md text-gray-800"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-300 bg-opacity-100 rounded focus:bg-white border border-gray-100 text-black p-2 focus:border-yellow-400 focus:ring-2 focus:ring-green-400"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-md text-gray-800"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-300 bg-opacity-100 rounded focus:bg-white border border-gray-100 text-black h-32 py-1 px-3 resize-none focus:border-yellow-400 focus:ring-2 focus:ring-green-400"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white font-bold bg-yellow-400 border-0 py-2 px-4 hover:bg-gray-200 rounded text-lg">
                  Submit
                </button>
                <Link href="/"></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
