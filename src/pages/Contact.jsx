import React from "react";
import Navbar from "../components/navigation/Navbar";
import officeimg from "../assets/office-image.jpg";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section flex flex-row max-md:flex-col h-auto mt-5 xmlg:pl-28 xmlg:pr-28">
        <div className="container w-[50%] max-md:w-full flex flex-col items-center">
          <div className="max-w-xl ">
            <h1 className="text-4xl max-md:text-2xl font-gothicbold">
              Talk to our product analytics expert
            </h1>
            <p className="font-gothicbook text-md  pt-3">
              Have questions on pricing, plans or growthly? Fill out the form
              and our product analytics expert will be in touch directly.
            </p>
          </div>
          <div className="max-w-xl">
            <h1 className="text-2xl font-gothicbold pt-2">Our Office</h1>
            <img
              src={officeimg}
              alt="office image"
              className="w-[70%] h-auto max-md:hidden"
            />
            <p className="font-gothicbook text-md pt-1 ">
              Have questions about pricing, plans, or growthly? Fill out the
              form and our product analytics expert will be in touch directly
            </p>
            <div className="flex flex-row items-start justify-start pt-5">
              <div className="w-[50%] flex flex-col ">
                <p className="font-gothicbold whitespace-nowrap">
                  United Kingdom
                </p>
                <div className="flex flex-row w-[80%] py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2em"
                    height="1.2em"
                    className="max-md:w-[3em] max-md:h-[3em]"
                    viewBox="0 0 21 21"
                  >
                    <g
                      fill="none"
                      fill-rule="evenodd"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      transform="translate(4 2)"
                    >
                      <path d="m6.5 16.54l.631-.711Q8.205 14.6 9.064 13.49l.473-.624Q12.5 8.875 12.5 6.533C12.5 3.201 9.814.5 6.5.5s-6 2.701-6 6.033q0 2.342 2.963 6.334l.473.624a55 55 0 0 0 2.564 3.05" />
                      <circle cx="6.5" cy="6.5" r="2.5" />
                    </g>
                  </svg>
                  <p className="text-xs">
                    30 Eastbourne terrace Paddington, London W2 6LA UK
                  </p>
                </div>
                <div className="flex flex-row w-[80%] py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2em"
                    height="1.2em"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="m221.59 160.3l-47.24-21.17a14 14 0 0 0-13.28 1.22a5 5 0 0 0-.56.42l-24.69 21a1.88 1.88 0 0 1-1.68.06c-15.87-7.66-32.31-24-40-39.65a1.91 1.91 0 0 1 0-1.68l21.07-25a6 6 0 0 0 .42-.58a14 14 0 0 0 1.12-13.27L95.73 34.49a14 14 0 0 0-14.56-8.38A54.24 54.24 0 0 0 34 80c0 78.3 63.7 142 142 142a54.25 54.25 0 0 0 53.89-47.17a14 14 0 0 0-8.3-14.53M176 210c-71.68 0-130-58.32-130-130a42.23 42.23 0 0 1 36.67-42h.23a2 2 0 0 1 1.84 1.31l21.1 47.11a2 2 0 0 1 0 1.67l-21.11 25.06a5 5 0 0 0-.43.57a14 14 0 0 0-.91 13.73c8.87 18.16 27.17 36.32 45.53 45.19a14 14 0 0 0 13.77-1c.19-.13.38-.27.56-.42l24.68-21a1.92 1.92 0 0 1 1.6-.1l47.25 21.17a2 2 0 0 1 1.21 2A42.24 42.24 0 0 1 176 210"
                    />
                  </svg>
                  <p className="text-xs">+44 133-4232-54</p>
                </div>
              </div>
              <div className="w-[50%] flex flex-col">
                <p className="font-gothicbold">France</p>
                <div className="flex flex-row w-[80%] py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2em"
                    height="1.2em"
                    className="max-md:w-[3em] max-md:h-[3em]"
                    viewBox="0 0 21 21"
                  >
                    <g
                      fill="none"
                      fill-rule="evenodd"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      transform="translate(4 2)"
                    >
                      <path d="m6.5 16.54l.631-.711Q8.205 14.6 9.064 13.49l.473-.624Q12.5 8.875 12.5 6.533C12.5 3.201 9.814.5 6.5.5s-6 2.701-6 6.033q0 2.342 2.963 6.334l.473.624a55 55 0 0 0 2.564 3.05" />
                      <circle cx="6.5" cy="6.5" r="2.5" />
                    </g>
                  </svg>
                  <p className="text-xs">
                    30 Eastbourne terrace Paddington, London W2 6LA UK
                  </p>
                </div>
                <div className="flex flex-row w-[80%] py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2em"
                    height="1.2em"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="m221.59 160.3l-47.24-21.17a14 14 0 0 0-13.28 1.22a5 5 0 0 0-.56.42l-24.69 21a1.88 1.88 0 0 1-1.68.06c-15.87-7.66-32.31-24-40-39.65a1.91 1.91 0 0 1 0-1.68l21.07-25a6 6 0 0 0 .42-.58a14 14 0 0 0 1.12-13.27L95.73 34.49a14 14 0 0 0-14.56-8.38A54.24 54.24 0 0 0 34 80c0 78.3 63.7 142 142 142a54.25 54.25 0 0 0 53.89-47.17a14 14 0 0 0-8.3-14.53M176 210c-71.68 0-130-58.32-130-130a42.23 42.23 0 0 1 36.67-42h.23a2 2 0 0 1 1.84 1.31l21.1 47.11a2 2 0 0 1 0 1.67l-21.11 25.06a5 5 0 0 0-.43.57a14 14 0 0 0-.91 13.73c8.87 18.16 27.17 36.32 45.53 45.19a14 14 0 0 0 13.77-1c.19-.13.38-.27.56-.42l24.68-21a1.92 1.92 0 0 1 1.6-.1l47.25 21.17a2 2 0 0 1 1.21 2A42.24 42.24 0 0 1 176 210"
                    />
                  </svg>
                  <p className="text-xs">+44 133-4232-54</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] container max-md:w-full max-md:py-10 items-center">
          <form className="max-w-xl mx-auto bg-[#F2F2F2] p-10 max-md:p-5 max-md:rounded-lg rounded-3xl shadow-inner font-gothicdemi">
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="johndoe@yuga.com"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                First name
              </label>
              <input
                type="fname"
                id="fname"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="John"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Last name
              </label>
              <input
                type="lname"
                id="lname"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Doe"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Phone number
              </label>
              <input
                type="phone"
                id="phone"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="708787878"
                required
              />
            </div>
            <div className="flex flex-col mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
