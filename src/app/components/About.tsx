
import Image from 'next/image';
import React from 'react';
function About() {
  return (
    <section className="bg-slate-100">
  <div className="container m-0 p-0 py-10 mx-auto">
    <div className="flex flex-wrap w-full mb-18">
      <div className="lg:w-1/2 w-full mb-6  lg:mb-0"> 
        <h1 className="sm:text-4xl text-2xl g-3 font-bold mb-2 text-green-500">Fresh, Organic, Sustainable</h1>
      </div>
      <p className="lg:w-1/2 w-full text-bold text-black">We are passionate about delivering the freshest organic fruits and vegetables since 2010 grown sustainably and free from harmful chemicals.Our mission is to promote healthy living while protecting the environment offering you nutritious farm-fresh produce that is good for you and the planet.Now afetr the success of our product introducing a organic seeds for sale for the betterment of our earth eco-friendly and healthy.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="p-6 rounded-lg transition-transform duration-200 ease-in-out transform hover:scale-110">
          <Image className="h-40 rounded w-full object-cover object-center mb-6" src="/water.jpg" alt="image" width={400} height={300} />
          <h2 className="text-lg text-yellow-400 font-bold  mb-4">Pure Water free-Pesticides</h2>
          <p className="text-base">We prioritize using clean high-quality water to nourish our crops ensuring they grow naturally and free from harmful pesticides.By embracing organic farming methods we protect both the environment and your health delivering produce that is as pure as nature intended.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="p-6 rounded-lg transition-transform duration-200 ease-in-out transform hover:scale-110">
          <Image className="h-40 rounded w-full object-cover object-center mb-6" src="/benefit.png" alt="image" width={400} height={300} />
          <h2 className="text-lg text-yellow-400 font-bold mb-4">
          Benefits of Organic Farming</h2>
          <p className="text-base"> Organic farming provides chemical-free nutrient-rich produce that tastes better and is healthier for you. It protects the environment by reducing pollution and promoting biodiversity while sustainable practices preserve soil health for the future. Supporting organic farming also means backing local farmers and contributing to a healthier planet.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="p-6 rounded-lg transition-transform duration-200 ease-in-out transform hover:scale-110">
          <Image className="h-40 rounded w-full object-cover object-center mb-6" src="/heat.jpg" alt="image" width={400} height={300} />
          <h2 className="text-lg text-yellow-400 font-bold mb-4">Temperature Control </h2>
          <p className="text-base"> Effective heat control in organic greenhouses ensures optimal growing conditions for plants.Techniques like natural ventilation shade cloths and thermal mass materials help regulate temperatures promoting healthy growth.These methods reduce the need for chemical interventions fostering a sustainable and eco-friendly farming environment.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="p-6 rounded-lg transition-transform duration-200 ease-in-out transform hover:scale-110 ">
          <Image className="h-40 rounded w-full object-cover object-center mb-6" src="/seed.webp" alt="image" width={400} height={300}/> 
          <h2 className="text-lg text-yellow-400 font-bold mb-4">New Organic Seeds </h2>
          <p className="text-base"> We are excited to offer a diverse selection of high-quality organic seeds for your garden.Our seeds are carefully sourced to ensure they are free from synthetic pesticides and genetically modified organisms GMOs promoting healthy growth and vibrant produce.Whether you are a seasoned gardener or just starting organic cultivate eco-friendly garden.</p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

export default About;