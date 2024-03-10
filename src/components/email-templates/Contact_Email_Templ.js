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

export default function Contact_Email_Templ({
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
      <Preview>{`${f_name} has made an inquiry`}</Preview>
      <Tailwind>
        <Body className="m-auto bg-stone-300 p-4">
          <Container className="max-w-2xl rounded-lg border border-solid border-gray-300 bg-stone-100 p-4">
            <Section className="mt-2">
              <Link href="https://www.letrasinc.org/">
                <Img
                  src="https://ik.imagekit.io/o0j3ghd5q/letras.png?updatedAt=1706894404434"
                  alt="Letras Inco Logo"
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
            </Section>
            <Text className="mb-4 text-lg leading-7 text-stone-700">
              {message}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
