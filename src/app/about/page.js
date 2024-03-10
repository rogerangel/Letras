import Image from "next/image";
import Link from "next/link";
import book_green from "../../../public/book_green.jpg";

export default function AboutUs() {
  return (
    <main className="h-full min-h-[calc(100vh-152px)] w-full bg-stone-200 p-2 md:p-10">
      <div className="container mx-auto rounded-lg bg-stone-50">
        <Image
          src={book_green}
          alt="A green book"
          className="object-fixed h-48 w-full rounded-t-lg object-cover md:h-96"
          priority={true}
        />
        <div className="space-y-3 p-2 text-lg md:p-7">
          <h1 className="mb-2 mt-4 text-4xl font-bold text-gray-900">
            About Us
          </h1>
          <p className="">
            Welcome to Letras Inc. We are a project-based, community-focused
            organization based in New York City dedicated to increasing access
            to literacy for underserved populations. We believe that every child
            deserves a chance to succeed, regardless of where they come from or
            what language they speak.
          </p>
          <p>
            Our team works closely with schools and communities to provide
            books, resources, and support for children. We want to make sure
            that all kids have the tools they need to do well in school and in
            life.
          </p>
          <p>
            <b>Mission:</b> To empower underserved communities to achieve early
            childhood literacy success by providing tools, resources, and
            support.
          </p>
          <p>
            Our Founder:{" "}
            <Link
              className="font-semibold text-blue-700 underline"
              href="https://www.linkedin.com/in/leurys"
            >
              Leurys Acosta
            </Link>
            , the driving force behind Letras Inc., draws upon his Bronx
            upbringing and his five years of experience leading community
            engagement efforts at United Way of New York City. Through
            initiatives like establishing community libraries and enrolling over
            10,000 families in literacy programs, he has demonstrated a deep
            understanding of the challenges faced by underserved communities and
            a commitment to breaking down barriers to education. Leurys&apos;s
            hands-on experience and passion for literacy drive Letras
            Inc.&apos;s mission to provide access to educational resources for
            all.
          </p>
          <p>
            Would you like to learn more or get involved? Reach out to us by
            filling out our contact form{" "}
            <Link className="font-bold text-blue-700" href="/contact">
              here
            </Link>
            . We’d love to hear from you!
          </p>
        </div>
      </div>
    </main>
  );
}
