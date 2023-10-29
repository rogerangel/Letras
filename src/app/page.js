import Hero from "@/components/Hero";
import Image from "next/image";
import kid_2 from "../..//public/kid_2.jpeg";
import material from "../../public/material.jpeg";
import kid_pick from "../../public/kid_pick.jpeg";
import kids_2 from "../../public/kids_2.jpeg";
import ScrollCard from "@/components/ScrollCard";
import { FaBookOpenReader } from "react-icons/fa6";
import { Baloo_2 } from "next/font/google";
import Link from "next/link";

const LogoFont = Baloo_2({
  subsets: ["latin"],
});

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export default function Home() {
  return (
    <main className="relative flex flex-col">
      <Hero />
      <div className="bg-stone-200 w-full py-14 gap-9 flex flex-col justify-center items-center text-center">
        {/* <h1 className="text-4xl font-bold text-indigo-900"> */}
        <h1
          className={classNames(
            LogoFont.className,
            "text-4xl font-bold text-indigo-900"
          )}
        >
          Community Centered
          Literacy projects!
        </h1>
        <p className="text-xl md:text-2xl w-full px-1.5 md:p-0 md:w-1/2 font-medium text-neutral-700">
          We are partnering with two schools in the city of San Francisco de
          Macoris, Dominican Republic, to create school and community libraries
          in the Fall of 2024.
        </p>
      </div>
      <div className="bg-gradient-to-b from-stone-200 to-stone-300 w-full h-auto flex flex-col md:flex-row gap-4 md:justify-around items-center from-10% to-90%">
        <Image
          src={kid_2}
          alt="kid_2"
          className="object-cover w-11/12 md:w-[33%] md:h-[80%] rounded-3xl"
        />
        <div className="flex items-center md:items-start gap-7 mt-10 px-3 w-full md:w-1/2 flex-col md:gap-16">
          <h1 className="text-4xl font-bold text-indigo-900">What we do</h1>
          <p className="text-2xl tracking-tighter sm:tracking-tight md:tracking-wider text-justify md:text-start leading-normal font-medium text-neutral-800">
            We support and strengthen community learning spaces, ensuring that
            everyone has the opportunity to read, learn and grow. We are
            committed to assisting families and communities in overcoming
            obstacles and creating a literacy-rich environment that reflects
            their unique cultural backgrounds and experiences.
          </p>
        </div>
      </div>
      <div className="via-stone-200 to-stone-300 from-stone-300 bg-gradient-to-b from-60% via-30% to-10% w-full flex flex-col h-[1500px]">
        <ScrollCard className="mt-10 h-full w-full rounded-3xl bg-teal-600 shadow-md">
          <div className="sticky top-0 flex px-4 pt-36 pb-20 flex-col md:pt-64 md:px-72 md:pb-52">
            <div className="gap-5 flex text-2xl text-white">
              <FaBookOpenReader />
              <h3>Humanity & Literacy</h3>
            </div>
            <h1 className="mt-7 text-4xl font-bold text-white">
              Why Literacy
            </h1>
            <p className="text-3xl leading-snug mt-3 text-white">
              Literacy is crucial for education, employment, health, civic
              engagement, and social cohesion. It enables individuals to access
              information, make informed decisions, participate in their
              communities, and contribute to the development of society.
              Ultimately, literacy improves the quality of life and the
              well-being of a community.
            </p>
            <Link
              href="/about"
              className="text-teal-900 underline font-medium text-lg mt-5 hover:bg-white rounded-xl p-1 px-2 transition duration-500 ease-in-out"
            >
              Get to know more about us!
            </Link>
          </div>
        </ScrollCard>
      </div>
      <div className="via-stone-300 to-stone-200 from-stone-300 bg-gradient-to-b from-8% via-35% to-90% w-full py-10 gap-10 flex flex-col md:justify-center items-center text-center h-auto">
        {/* <div className="flex flex-wrap content-start mt-10">
          <div className="relative p-25 h-460 flex-none w-40 max-w-40 p-6 rounded-md bg-stone-200 shadow-md">
            <p className="pb-5 text-xl font-medium text-gray-800">Card 1</p>
          </div>
          <div className="relative p-25 h-460 flex-none w-40 max-w-40 p-6 rounded-md bg-stone-200 shadow-md">
            <p className="pb-5 text-xl font-medium text-gray-800">Card 2</p>
          </div>
          <div className="relative p-25 h-460 flex-none w-40 max-w-40 p-6 rounded-md bg-stone-200 shadow-md">
            <p className="pb-5 text-xl font-medium text-gray-800">Card 3</p>
          </div>
          <div className="relative p-25 h-460 flex-none w-40 max-w-40 p-6 rounded-md bg-stone-200 shadow-md">
            <p className="pb-5 text-xl font-medium text-gray-800">Card 4</p>
          </div>
        </div> */}
        <h3 className="mt-16 text-4xl font-bold text-indigo-900">
          Our Approach
        </h3>
        <div className="mt-10 gap-7 flex flex-col md:content-start md:gap-4 lg:gap-10 md:flex-row">
          <div className="card overflow-visible relative p-2 flex flex-col items-center max-w-[392px] h-[488px] rounded-2xl bg-stone-100 hover:bg-white shadow-lg">
            <Image
              src={kid_pick}
              alt=""
              width="auto"
              height="auto"
              className="rounded-lg"
            />
            <h4 className="pb-5 text-xl font-semibold mt-4 text-gray-800">
              Facilitating Access to Literacy Material
            </h4>
            <p className="text-lg text-gray-700">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam quis nostrud exercitation ullamco laboris
              nisi ut
            </p>
          </div>
          <div className="card overflow-visible relative p-2 flex flex-col items-center max-w-[392px] h-[488px] rounded-2xl bg-stone-100 hover:bg-white shadow-lg">
            <Image
              src={material}
              alt=""
              width="auto"
              height="auto"
              className="rounded-lg"
            />
            <h4 className="pb-5 text-xl font-semibold mt-4 text-gray-800">
              Hosting Program and Events
            </h4>
            <p className="text-lg text-gray-700">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam quis nostrud exercitation ullamco laboris
              nisi ut
            </p>
          </div>
          <div className="card overflow-visible relative p-2 flex flex-col items-center max-w-[392px] h-[488px] rounded-2xl bg-stone-100 hover:bg-white shadow-lg">
            <Image
              src={kids_2}
              alt=""
              width="auto"
              height="auto"
              className="rounded-lg"
            />
            <h4 className="pb-5 text-xl font-semibold mt-4 text-gray-800">
              Creating Education Content
            </h4>
            <p className="text-lg text-gray-700">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam quis nostrud exercitation ullamco laboris
              nisi ut
            </p>
          </div>
        </div>
      </div>
      <div className="bg-stone-200 w-full py-10 gap-10 flex flex-col justify-center items-center text-center h-[600px]">
        container
      </div>
    </main>
  );
}
