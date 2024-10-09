import React from "react";
import Image from "next/image";
function Product() {
  return (
    <section className="bg-slate-100">
      <div className="container mx-auto py-15 px-5">
        <h1 className="text-green-500 sm:text-4xl text-2xl mb-2 text-center font-bold">
          Our Products are
        </h1>
        <div className="flex flex-wrap -m-2">
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/veg1.webp"
                alt="iamge"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 text-lg font-bold mb-1">
                Organic Veggies
              </h3>
              <h2 className="text-green-400 text-xl font-bold">Spinach</h2>
              <p>($10.00)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110 ">
            <a className="block relative h-48  border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/veg2.webp"
                alt="image"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 text-lg font-bold mb-1">
                Organic Veggies
              </h3>
              <h2 className="text-green-400 text-xl font-bold">Garlic</h2>
              <p>($20.10)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/veg3.webp"
                alt="iamge"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 text-lg font-bold mb-1">
                Organic Veggies
              </h3>
              <h2 className="text-green-400 text-xl font-bold">Potato</h2>
              <p>($13.00)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/veg4.webp"
                alt="image"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 text-lg font-bold mb-1">
                Organic Veggies
              </h3>
              <h2 className="text-green-400 text-xl font-bold">Carrot</h2>
              <p>($17.30)</p>
            </div>
          </div>

          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/veg5.webp"
                alt="iamge"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 text-lg font-bold mb-1">
                Organic Veggies
              </h3>
              <h2 className="text-green-400 text-xl font-bold">Green Onion</h2>
              <p>($18.00)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110 ">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/veg6.webp"
                alt="image"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 text-lg font-bold mb-1">
                Organic Veggies
              </h3>
              <h2 className="text-green-400 text-xl font-bold">Beet Root</h2>
              <p>($18.10)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/veg7.webp"
                alt="iamge"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 text-lg font-bold mb-1">
                Organic Veggies
              </h3>
              <h2 className="text-green-400 text-xl font-bold">Lemon</h2>
              <p>($15.20)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110 ">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/veg8.webp"
                alt="image"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 text-lg font-bold mb-1">
                Organic Veggies
              </h3>
              <h2 className="text-green-400 text-xl font-bold">Ginger</h2>
              <p>($21.50)</p>
            </div>
          </div>

          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/fruit2.webp"
                alt="image"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 text-lg font-bold mb-1">
                Organic Fruits
              </h3>
              <h2 className="text-green-400 text-xl font-bold">Mango</h2>
              <p>($22.00)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/fruit3.webp"
                alt="iamge"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 text-lg font-bold mb-1">
                Organic Fruits
              </h3>
              <h2 className="text-green-400 text-xl font-bold">Orange</h2>
              <p>($21.10)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110  ">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/fruit4.webp"
                alt="image"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 text-lg font-bold mb-1">
                Organic Fruits
              </h3>
              <h2 className="text-green-400 text-xl font-bold">Pomegranate</h2>
              <p>($19.70)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110 ">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/fruit1.webp"
                alt="image"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 text-lg font-bold mb-1">
                Organic Fruits
              </h3>
              <h2 className="text-green-400 text-xl font-bold">Apple</h2>
              <p>($12.00)</p>
            </div>
          </div>

          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/fruit5.webp"
                alt="image"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 text-lg font-bold mb-1">
                Organic Fruits
              </h3>
              <h2 className="text-green-400 text-xl font-bold">Water Melon</h2>
              <p>($15.00)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/fruit6.webp"
                alt="iamge"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 text-lg font-bold mb-1">
                Organic Fruits
              </h3>
              <h2 className="text-green-400 text-xl font-bold">Strawberry</h2>
              <p>($23.10)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/fruit7.webp"
                alt="image"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 text-lg font-bold mb-1">
                Organic Fruits
              </h3>
              <h2 className="text-green-400 text-xl font-bold">Grapes</h2>
              <p>($17.50)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/fruit8.webp"
                alt="image"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 text-lg font-bold mb-1">
                Organic Fruits
              </h3>
              <h2 className="text-green-400 text-xl font-bold">Guava</h2>
              <p>($14.20)</p>
            </div>
          </div>
          <button className="bg-green-500 py-1 mt-4 px-4 font-bold rounded-md mb-3 text-white hover:bg-gray-300">
            Add Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default Product;
