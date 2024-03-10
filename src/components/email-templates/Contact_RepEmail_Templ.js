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
  Hr,
} from "@react-email/components";

export default function Contact_RepEmail_Templ({
  f_name,
  l_name,
  email,
  telephone = "No phone number provided",
  message,
}) {
  const created = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    timeZone: "America/New_York",
    timeZoneName: "short",
  });
  return (
    <Html lang="en">
      <Head />
      <Preview>We received your message!</Preview>
      <Tailwind>
        <Body className="m-auto bg-stone-300 p-4">
          <Container className="max-w-2xl rounded-lg border border-solid border-gray-300 bg-stone-100 p-4">
            <Section className="mt-2">
              <Link href="https://www.letrasinc.org/">
                <Img
                  src="https://ik.imagekit.io/o0j3ghd5q/letras.png?updatedAt=1706894404434"
                  alt="Letras Icon Logo"
                  width={160}
                  height="auto"
                  className="my-0"
                />
              </Link>
            </Section>
            <Hr className="border border-solid border-gray-300" />
            <Heading className="mx-8 my-6 text-center text-2xl font-bold text-cyan-700">
              Contact Request
            </Heading>
            <Text className="mb-7 mt-14 text-lg leading-6 text-stone-700">
              Hello {f_name},
            </Text>
            <Text className="mb-2 text-lg leading-7 text-stone-700">
              Thank you for contacting the Letras Inc team. We will get back to
              you as soon as possible.
            </Text>
            <Text className="my-3 text-lg leading-6 text-stone-700">
              Here are the details of your inquiry:
            </Text>
            <hr />
            <Section className="rounded-lg bg-stone-200 p-4">
              <Section>
                <Row className="text-left">
                  <Column className="text-left">
                    <Text className="text-base text-gray-700">{`First Name: ${f_name}`}</Text>
                    <Text className="text-base text-gray-700">{`Last Name: ${l_name}`}</Text>
                    <Text className="text-base text-gray-700">{`Email: ${email}`}</Text>
                    <Text className="text-base text-gray-700">{`Telephone: ${telephone}`}</Text>
                    <Text className="text-base text-gray-700">{`Date and Time: ${created}`}</Text>
                  </Column>
                </Row>
              </Section>
              <Text className="mb-7 mt-10 text-lg leading-6 text-stone-700">
                Message:
              </Text>
              <Text className="mb-4 text-lg leading-7 text-stone-700">
                {message}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
