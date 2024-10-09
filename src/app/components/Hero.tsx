import React from "react";
import Image from "next/image";
function Hero() {
  return (
    <main className="m-0 p-4 bg-slate-100">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-4 items-center">
        {/* Left side */}
        <div className="flex-1">
          <h1 className="font-bold text-2xl md:text-4xl text-green-500">Why Choose Organic? </h1>
          <p className="text-md md:text-lg text-black font-semibold mt-2">
            Organic fruits and vegetables are free from harmful chemicals,
            providing cleaner, nutrient-rich food. They help boost your health
            while supporting eco-friendly farming practices. Choosing organic
            means you're nourishing your body and protecting the environment at
            the same time!
          </p>
          <button className="bg-green-500 text-white py-2 mt-4 px-4 font-bold rounded-lg hover:bg-gray-300">
            Add Cart
          </button>
        </div>
        {/* Right Side */}
        <div className="flex-1 w-full h-auto">
          <Image width={900} height={900} src="/image1.webp" alt="Image" className="object-cover w-full h-full" />
        </div>
      </section>
    </main>
  );
}

export default Hero;
