import Hero from "@/components/Hero";
import Image from "next/image";
import kid_2 from "../../public/kid_2.jpeg";
import material from "../../public/material.jpeg";
import kid_pick from "../../public/kid_pick.jpeg";
import ylp_dr_cover from "../../public/ylp_dr_cover.jpg";
import kids_2 from "../../public/kids_2.jpeg";
import ScrollCard from "@/components/ScrollCard";
import { FaBookOpenReader } from "react-icons/fa6";
import { FaNetworkWired } from "react-icons/fa6";
import Link from "next/link";
// import ContactForm from "@/components/ContactForm";
import ContactUsForm from "@/components/ContactUsForm";
// import IG_Embed from "@/components/IG_Embed";
import InViewAnimation from "@/components/InViewAnimation";
import WordStagger from "@/components/WordStagger";
import { articles } from "@/components/articles";
import InstagramEmbed from "@/components/Instagram_Embed";
// import LetterStagger from "@/components/LetterStagger";

const animationVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

// const heroVariants = {
//   initial: { opacity: 0 },
//   animate: {
//     opacity: 1,
//     transition: {
//       duration: 1,
//     },
//   },
// };

export default function Home() {
  const project = articles[0];
  return (
    <main className="relative flex flex-col">
      {/* <LetterStagger
        as="h1"
        animeDelay={7.7}
        stagger={0.08}
        variant={heroVariants}
        className="flex select-none text-4xl font-extrabold text-emerald-500 md:font-bold lg:text-5xl"
      >
        Our Little Learners Need Your Help!
      </LetterStagger> */}
      <Hero>
        {/* <LetterStagger
          as="h1"
          // animeDelay={7.7}
          variant={heroVariants}
          className="flex select-none text-4xl font-extrabold text-emerald-500 md:font-bold lg:text-5xl"
        // className="flex text-4xl font-extrabold text-emerald-500 md:font-bold lg:text-5xl"

        // className={classNames(
        //   LogoFont.className,
        //   "flex text-center text-4xl font-extrabold text-emerald-500 md:px-5 md:text-left md:font-bold lg:text-5xl",
        // )}
        >
          Our Little Learners Need Your Help!
        </LetterStagger> */}
        <h1 className="text-center text-4xl font-extrabold text-emerald-500 md:px-5 md:text-left md:font-bold lg:text-5xl">
          Our Little Learners Need Your Help!
        </h1>
        <h3 className="text-center text-2xl font-semibold italic tracking-wider text-neutral-200 md:px-10 lg:text-3xl">
          {`Together, we can empower individuals and create a positive impact on communities through the transformative power of education and cultural understanding.`}
        </h3>
        <div className="flex flex-row">
          <Link
            href="/donate"
            className="rounded-full bg-amber-400 px-4 pb-1 pt-4 text-xl font-semibold text-neutral-800 shadow-xl duration-300 hover:scale-110 hover:bg-amber-500 hover:font-semibold hover:duration-300"
          >
            Donate Today!
          </Link>
        </div>
      </Hero>
      <div className="flex w-full flex-col items-center justify-center gap-9 bg-stone-200 py-14 text-center">
        <h1 className="text-4xl font-bold text-indigo-900">
          Community Centered Literacy projects!
        </h1>
        <WordStagger
          className="flex w-full flex-wrap justify-center px-1.5 text-xl font-medium text-neutral-700 md:text-2xl lg:w-1/2 lg:p-0"
          as="span"
          variant={animationVariants}
        >
          We are partnering with two schools in the city of San Francisco de
          Macoris, Dominican Republic, to create school and community libraries
          in the Fall of 2024.
        </WordStagger>
      </div>
      <div
        id="about"
        className="flex h-auto w-full scroll-mt-16 flex-col items-center gap-4 bg-gradient-to-b from-stone-200 from-10% to-stone-300 to-90% pt-10 lg:flex-row lg:justify-around lg:px-16 2xl:px-44"
      >
        <InViewAnimation
          transform={{ in: "none", out: "translateX(-200px)" }}
          opacity={{ in: 1, out: 0 }}
          transition="all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          parentClassName="w-11/12 h-auto lg:w-[48%]"
        >
          <Image
            src={kid_2}
            alt="kid_2"
            className="w-full rounded-3xl object-cover"
          />
        </InViewAnimation>
        <div className="mt-10 flex w-full flex-col items-center gap-7 px-3 lg:w-1/2 lg:items-start lg:gap-16">
          <h1 className="text-4xl font-bold text-indigo-900">What we do</h1>
          <InViewAnimation
            transform={{ in: "none", out: "translateX(100px)" }}
            opacity={{ in: 1, out: 0 }}
            transition="all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            parentClassName="overflow-hidden w-full h-auto"
          >
            <p className="px-5 text-2xl font-medium text-neutral-800 sm:tracking-tight md:text-start lg:px-0 lg:leading-normal lg:tracking-wider">
              We support and strengthen community learning spaces, ensuring that
              everyone has the opportunity and resources to read, learn, and
              grow. We are committed to working alongside families and
              communities to overcome systemic obstacles, fostering a
              literacy-rich environment that reflects their unique cultural
              backgrounds and lived experiences.
            </p>
          </InViewAnimation>
        </div>
      </div>
      <div className="flex w-full flex-col bg-gradient-to-b from-stone-300 from-60% via-stone-200 via-30% to-stone-300 to-10% md:h-[1500px]">
        <ScrollCard className="mt-10 h-full w-full rounded-t-3xl bg-teal-600 shadow-md">
          <div className="sticky top-0 px-4 pb-20 pt-36 md:px-20 md:pb-52 md:pt-64 lg:px-32">
            <div className="flex flex-row gap-5">
              <div>
                <div className="mb-5 flex flex-col">
                  <div className="mt-7 flex items-baseline gap-5 text-white">
                    <FaBookOpenReader className="text-3xl" />
                    <h2 className="text-4xl font-bold">Why Literacy</h2>
                  </div>
                  <WordStagger
                    className="mt-3 flex w-full flex-wrap text-3xl leading-snug text-white"
                    as="span"
                    variant={animationVariants}
                  >
                    Literacy plays a pivotal role in education, employment,
                    health, civic engagement, and social integration. It
                    empowers individuals to access information, make informed
                    decisions, actively participate in their communities, and
                    contribute to the overall development of society.
                    Ultimately, literacy is a catalyst for enhancing the quality
                    of life and fostering the well-being of a community.
                  </WordStagger>
                </div>
              </div>
            </div>
          </div>
        </ScrollCard>
      </div>
      <div className="from-8% flex h-auto w-full flex-col items-center gap-10 bg-gradient-to-b from-stone-300 via-stone-300 via-35% to-stone-200 to-90% py-10 text-center md:justify-center">
        <h2 className="mt-16 text-5xl font-bold tracking-wide text-indigo-900">
          Our Approach
        </h2>
        <div className="mt-10 flex flex-col gap-7 md:flex-row md:content-start md:gap-4 lg:gap-10">
          <div className="card relative flex h-[488px] max-w-[392px] flex-col items-center overflow-visible rounded-2xl bg-stone-100 p-2 shadow-lg hover:bg-white">
            <Image
              src={kids_2}
              alt=""
              width="auto"
              height="auto"
              className="rounded-lg"
            />
            <h4 className="mt-4 pb-5 text-xl font-semibold text-gray-800">
              Facilitating Access to Literacy Materials
            </h4>
            <p className="text-lg text-gray-700">
              Fostering familiarity with language, stories, and characters, in
              our collection of culturally relevant books.
            </p>
          </div>
          <div className="card relative flex h-[488px] max-w-[392px] flex-col items-center overflow-visible rounded-2xl bg-stone-100 p-2 shadow-lg hover:bg-white">
            <Image
              src={kid_pick}
              alt=""
              width="auto"
              height="auto"
              className="rounded-lg"
            />
            <h4 className="mt-4 pb-5 text-xl font-semibold text-gray-800">
              Hosting Program and Events
            </h4>
            <p className="text-lg text-gray-700">
              From captivating storytime sessions and author visits to book
              distributions and enriching parent-child workshops.
            </p>
          </div>
          <div className="card relative flex h-[488px] max-w-[392px] flex-col items-center overflow-visible rounded-2xl bg-stone-100 p-2 shadow-lg hover:bg-white">
            <Image
              src={material}
              alt=""
              width="auto"
              height="auto"
              className="rounded-lg"
            />
            <h4 className="mt-4 pb-5 text-xl font-semibold text-gray-800">
              Research-Based Learning Materials & Resources
            </h4>
            <p className="text-lg text-gray-700">
              Including tips, best practices, activity sheets, phonics kits, and
              other educational content to support research-based learning.
            </p>
          </div>
        </div>
      </div>
      <div
        id="projects"
        className="flex h-full w-full flex-col bg-stone-200 md:h-[3000px]"
      >
        <ScrollCard
          offset={["0 5", "0.5 1.5"]}
          className="from-8% mt-10 h-full w-full rounded-t-3xl bg-gradient-to-b from-sky-700 via-cyan-700 via-35% to-stone-200 to-90% shadow-md"
        >
          <div className="sticky top-0 flex flex-col px-4 pb-20 pt-16 md:pb-52 md:pt-56 lg:px-16 xl:px-28">
            <div className="flex items-baseline gap-5 pb-10 text-2xl text-white">
              <FaNetworkWired className="text-3xl" />
              <h2 className="text-4xl font-bold">Current Projects</h2>
            </div>
            <ol className="relative border-s border-gray-200 md:mt-7">
              <li className="mb-10 ms-4">
                <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200" />
                <div className="rounded-lg bg-stone-100 drop-shadow-xl">
                  <div className="relative h-[12rem] overflow-hidden">
                    <Image
                      src={ylp_dr_cover}
                      alt={project.title}
                      className="absolute h-full w-full select-none rounded-t-lg object-cover object-[center_60%] shadow-md"
                    />
                  </div>
                  <h3 className="mt-4 select-none p-2 text-2xl font-bold text-slate-800 lg:text-3xl">
                    {project.title}
                  </h3>
                  <p className="px-4 py-2 text-lg font-semibold text-gray-700 lg:text-xl">
                    {project.description}
                  </p>
                  <Link
                    href="/projects"
                    className="rounded-md px-4 py-2 text-xl font-semibold text-rose-700 underline hover:text-blue-700"
                  >
                    Read more
                  </Link>
                </div>
              </li>
            </ol>
          </div>
        </ScrollCard>
      </div>
      <div
        id="contact"
        className="flex w-full flex-col items-center justify-center gap-2 bg-stone-200 px-5 pb-10 text-center lg:flex-row lg:items-start"
      >
        <div className="w-full md:w-11/12 md:py-0 lg:w-1/2">
          <div className="mx-auto flex max-h-[515px] max-w-3xl flex-col items-start justify-center">
            <h3 className="mb-1 text-left text-4xl font-bold text-indigo-900">
              Follow us on Instagram
            </h3>
            <InstagramEmbed />
          </div>
        </div>
        <div className="w-full pt-10 md:w-11/12 md:py-0 lg:w-1/2">
          <h3 className="mb-1 text-left text-4xl font-bold text-indigo-900">
            Contact Us
          </h3>
          <ContactUsForm
            className="flex w-full max-w-3xl flex-col gap-3 rounded-sm border border-gray-300 bg-white p-4"
            txtAreaRows={3}
          />
        </div>
      </div>
    </main>
  );
}
