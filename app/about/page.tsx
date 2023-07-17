import React from "react";

export default function page() {
  return (
    <div className=" h-max w-full">
      <div className="mockup-window border bg-base-300 -mx-4">
        <div className="flex justify-center px-4 py-16 bg-base-200 flex-col">
          <section className="text-gray-600 body-font ">
            <div className="flex flex-col w-full items-center justify-center mb-4">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                ABOUT US
              </h1>
              <p className=" text-justify w-1/1 m-10 mt-4 md:w-1/1  sm:w-1/1 leading-relaxed text-base">
                Our vision goes beyond a simple internet page, it is rather a
                solution so that each of the users obtains what they require,
                truthful information, products and services that meet their
                needs and expanded with the latest technology trends. applied to
                the internet.
              </p>
              <p className=" text-justify w-1/1 md:w-1/1 sm:w-1/1 m-10 mt-4 leading-relaxed text-base">
                At Elixir Cars we are committed to offering our clients the best
                service.
              </p>
              <button className="flex mx-auto mt-16 title-font font-medium text-lg text-white bg-blue-500 rounded-lg transition duration-300 hover:shadow-md shadow-[#555555] border-0 py-2 px-8 focus:outline-none hover:bg-[#FFD700] hover:text-gray-800 ">
                More information
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
