import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

function About() {
  return (
    <div>
      <Header />

      <section className="bg-green-100 min-h-screen">
        <div className="container px-5 py-10 mx-auto">
          <h1 className="text-green-600 text-center py-10 mb-2 font-bold text-5xl">
            Our Organic Journey
          </h1>
          <p className="text-black text-xl text-center pt-0 mb-5">
            At OrganicFit, our journey begins in the rich, fertile soils
            nurtured by nature’s own rhythms. Every seed we plant is a promise
            of purity, grown without harmful chemicals or pesticides. Our
            Teamwork to sustainability ensures that the freshest, most
            nutritious fruits and vegetables reach your table – just as nature
            intended.{" "}
          </p>
          <div className="flex flex-wrap  mb-0 -m-4">
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="text-4xl font-bold text-yellow-400 mb-1">
                  Organic Fruits
                </h2>
                <p className="text-gray-600 mb-10 pt-3">
                  {" "}
                  Our organic fruits are grown with care, free from synthetic
                  pesticides and chemicals, ensuring that every bite is pure and
                  packed with nature’s goodness. Handpicked at the peak of
                  ripeness, each fruit delivers fresh, vibrant flavors and
                  nutrients straight from our fields to your table. At
                  OrganicFit, we believe in nurturing both the land and our
                  communities, offering fruits that are as kind to the planet as
                  they are to your health."
                </p>
                <Link href="/">
                <button className="text-white bg-blue-400 font-bold py-2 px-2 items-center border-2 rounded-md hover:bg-yellow-300">
                  Details
                </button>
              </Link>
              
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="text-4xl font-bold text-yellow-400 mb-1">
                  Organic Vegatables
                </h2>

                <p className="text-gray-600 mb-10 pt-3">
                  Our organic vegetables are grown in harmony with nature, using
                  sustainable farming practices that preserve the earth's
                  vitality. Free from harmful chemicals, each vegetable is
                  carefully cultivated to retain its natural nutrients, vibrant
                  colors, and fresh flavors. From crisp greens to hearty roots,
                  our produce brings wholesome, nutrient-rich goodness to your
                  meals, offering the purest taste of nature in every bite.{" "}
                </p>
                <Link href="/">
                <button className="text-white bg-blue-400 font-bold py-2 px-2 items-center border-2 rounded-md hover:bg-yellow-300">
                  Details
                 </button>
                  </Link>

              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="text-4xl font-bold text-yellow-400 mb-1">
                  New:Organic Seeds
                </h2>
                <p className="text-gray-600 mb-10 pt-3">
                  Discover the essence of growth with our new arrival of organic
                  seeds! Carefully sourced and naturally cultivated, these seeds
                  are the perfect start to your garden, free from chemicals and
                  GMOs. Whether you're planting for fresh herbs, vegetables, or
                  vibrant blooms, our organic seeds ensure strong, healthy
                  growth that nurtures both the soil and your wellbeing. Begin
                  your journey to sustainable, homegrown goodness today!{" "}
                </p>
                <Link href="/">
               <button className="text-white bg-blue-400 font-bold py-2 px-2 items-center border-2 rounded-md hover:bg-yellow-300">
                Details
               </button>
               </Link>

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

export default About;
