import * as React from "react";
import {
  Tailwind,
  Img,
  Section,
  Text,
  Html,
  Head,
  Preview,
  Heading,
  Body,
  Container,
  Row,
  Column,
  Link,
} from "@react-email/components";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcDiscover,
  FaApplePay,
  FaGooglePay,
  FaInstagram,
} from "react-icons/fa6";

export default function LetrasIncSuccessReceipt({
  name,
  amount,
  ccn,
  cc,
  time,
}) {
  const amountPaid = Number(amount / 100).toFixed(2);
  const created = new Date(time * 1000).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    timeZone: "America/New_York",
    timeZoneName: "short",
  });

  const getIcon = (cc) => {
    switch (cc.toUpperCase()) {
      case "VISA":
        return <FaCcVisa size={30} />;
      case "MASTERCARD":
        return <FaCcMastercard size={30} />;
      case "AMEX":
        return <FaCcAmex size={30} />;
      case "DISCOVER":
        return <FaCcDiscover size={30} />;
      case "APPLEPAY":
        return <FaApplePay size={30} />;
      case "GOOGLEPAY":
        return <FaGooglePay size={30} />;
      default:
        return null;
    }
  };

  return (
    <Html lang="en">
      <Head />
      <Preview>Your contribution was processed successfully!</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-stone-300 p-4">
          <Container className="max-w-2xl rounded-lg border border-solid border-gray-300 bg-stone-100 p-4">
            <Section className="mt-8">
              <Link href="https://www.letrasinc.org/">
                <Img
                  src="https://ik.imagekit.io/o0j3ghd5q/letras.png?updatedAt=1706894404434"
                  alt="Letras Icon Logo"
                  width={280}
                  height="auto"
                  className="mx-auto my-0"
                />
              </Link>
            </Section>
            <Heading className="mx-8 my-6 text-center text-2xl font-bold text-cyan-700">
              Your contribution supports literacy!
            </Heading>
            <Section className="rounded-lg bg-stone-200 p-4">
              <Text className="text-center text-gray-500">Amount Paid</Text>
              <Text className="text-center text-4xl font-bold text-indigo-800">{`$${amountPaid}`}</Text>
              <Text className="text-center text-gray-500">Payment Method</Text>
              <Section>
                <Row>
                  <Column align="right" className="mx-auto pe-1">
                    {getIcon(cc)}
                  </Column>
                  <Column align="left" className="mx-auto">
                    {ccn}
                  </Column>
                </Row>
              </Section>
              <Text className="mt-4 text-center text-gray-500">Date Paid</Text>
              <Text className="text-center text-black">{created}</Text>
            </Section>
            <Text className="mb-7 mt-10 text-lg leading-6 text-stone-700">
              Hello {name},
            </Text>
            <Text className="mb-4 text-lg leading-7 text-stone-700">
              Thank you for your generous contribution! Your support will allow
              us to provide books, school materials, and other resources to
              strengthen the cultures of literacy sites with great need. With
              your help, we are one step closer to creating vibrant spaces that
              serve as hubs for learning. We are truly grateful for your
              partnership.
            </Text>
          </Container>
          <Container className="mx-auto mt-8 max-w-2xl">
            <Row>
              <Column align="right" className="mx-auto">
                Follow us on social media
              </Column>
              <Column align="center" className="mx-auto">
                <Link
                  href="https://www.instagram.com/letras.nyc/"
                  className="text-stone-700"
                >
                  <FaInstagram size={30} className="" />
                </Link>
              </Column>
            </Row>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
