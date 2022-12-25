import { useState, useRef } from "react";
import Container from "./container";

export default function Pricing() {
  const products = [
    { name: "Hobbyist", price: "$12", desc: "This plan gets you..." },
    { name: "Freelancer", price: "$18", desc: "This plan gets you..." },
    { name: "Startup", price: "$24", desc: "This plan gets you..." },
    { name: "Enterprise", price: "30", desc: "This plan gets you..." },
  ];
  return (
    <>
      <Container className="flex justify-center ">
        <div className="flex justify-center items-center w-full ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 xl:gap-20">
            {products.map((product, idx) => {
              return (
                <div
                  key={idx}
                  className={`text-gray-800 dark:text-white rounded-md shadow-sm border border-indigo-600`}
                >
                  <div className="p-6">
                    <h2 className="text-2xl leading-6 font-semibold">
                      {product.name}
                    </h2>
                    <p className="mt-4">{product.desc}</p>
                    <p className="mt-8">
                      <span className="text-5xl font-extrabold ">
                        {product.price}
                      </span>
                      <span className="text-base font-medium">/month</span>
                    </p>

                    <button
                      onClick={() => console.log("subscribe")}
                      className="block mt-8 px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
}
