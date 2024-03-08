import Image from "next/image";
import proudkid from "../../../public/proudkid.jpeg";

export default function DonateLayout({ children }) {
  return (
    <main className="relative flex h-full min-h-[calc(100vh-152px)] w-full items-center justify-center overflow-auto bg-stone-200">
      <div className="container flex flex-col gap-10 bg-white p-5 md:my-4 md:flex-row md:rounded-xl md:p-10">
        <div className="w-full md:w-1/2">
          <Image
            src={proudkid}
            alt="Happy kid in school"
            className="w-full rounded-lg object-fill"
            priority={true}
          />
          <h2 className="mt-10 text-left text-4xl font-bold text-blue-900">
            How your contribution supports our project
          </h2>
          <p className="mt-2 text-xl font-medium">
            Your contribution will support the establishment of a community
            library that aims to:
          </p>
          <div className="ms-6 mt-2">
            <ul className="font-base list-inside list-disc text-lg">
              <li>Foster a love for learning</li>
              <li>Cultivate a culture of literacy</li>
              <li>Boost reading levels</li>
            </ul>
          </div>
          <p className="mt-1 text-xl font-medium">{`Here's how your donation will have an impact:`}</p>
          <div className="ms-6 mt-2">
            <ul className="font-base list-inside list-disc text-lg">
              <li>
                $50: Equips a child with a comprehensive school kit, including a
                backpack, notebook, pens, & pencils.
              </li>
              <li>
                $100: Helps purchase 20 early childhood books for the community
                to enjoy and access.
              </li>
              <li>
                $400: Fills a classroom library shelf with books in Spanish and
                bilingual editions, enhancing educational resources for
                students.
              </li>
            </ul>
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
