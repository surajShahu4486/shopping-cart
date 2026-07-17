import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 px-6 py-20 text-white">

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10"></div>
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-white/10"></div>

        <div className="relative mx-auto max-w-7xl text-center">
          <p className="mb-4 font-semibold uppercase tracking-widest text-blue-200">
            We Are Here To Help
          </p>

          <h1 className="text-4xl font-extrabold md:text-6xl">
            Get In Touch With Us
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Have a question, feedback, or need help with your order?
            Our friendly support team is always ready to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-10 lg:grid-cols-3">

          {/* Contact Information */}
          <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 p-8 text-white shadow-2xl">

            <h2 className="text-3xl font-bold">
              Let's Talk
            </h2>

            <p className="mt-4 leading-7 text-indigo-100">
              We would love to hear from you. Contact us through any of the
              following channels.
            </p>

            <div className="mt-10 space-y-7">

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-2xl">
                  📍
                </div>

                <div>
                  <h3 className="font-bold">Our Location</h3>
                  <p className="mt-1 text-sm text-indigo-100">
                    123 Shopping Street, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-2xl">
                  📧
                </div>

                <div>
                  <h3 className="font-bold">Email Us</h3>
                  <p className="mt-1 text-sm text-indigo-100">
                    surajshahu19@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-2xl">
                  📞
                </div>

                <div>
                  <h3 className="font-bold">Call Us</h3>
                  <p className="mt-1 text-sm text-indigo-100">
                    +91 9049194486
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-2xl">
                  ⏰
                </div>

                <div>
                  <h3 className="font-bold">Working Hours</h3>
                  <p className="mt-1 text-sm text-indigo-100">
                    Monday - Saturday
                  </p>
                  <p className="text-sm text-indigo-100">
                    9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl bg-white p-8 shadow-xl lg:col-span-2">

            <h2 className="text-3xl font-bold text-gray-900">
              Send Us a Message
            </h2>

            <p className="mt-2 text-gray-500">
              Fill out the form and we will get back to you shortly.
            </p>

            <form className="mt-8 space-y-6">

              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block font-semibold text-gray-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-semibold text-gray-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>

              </div>

              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="How can we help you?"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 py-4 font-bold text-white shadow-lg transition hover:scale-[1.02] hover:from-indigo-700 hover:to-purple-700"
              >
                Send Message 🚀
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* FAQ / Bottom CTA */}
      <section className="bg-white px-6 py-16 text-center">

        <h2 className="text-3xl font-bold text-gray-900">
          Need Quick Help?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-gray-600">
          Check our frequently asked questions or contact our support team
          for quick assistance.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="rounded-full bg-indigo-600 px-7 py-3 font-semibold text-white transition hover:bg-indigo-700">
            View FAQs
          </button>

          <button className="rounded-full border border-indigo-600 px-7 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-50">
            Live Chat 💬
          </button>
        </div>

      </section>

    </div>
  );
};

export default Contact;