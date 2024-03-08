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
    telephone = "Not Provided",
    message,
}) {
    return (
        <Html lang="en">
            <Head />
            <Preview>{`${f_name} has made an inquiry`}</Preview>
            <Tailwind>
                <Body className="bg-stone-300 m-auto p-4">
                    <Container className="border border-solid border-gray-300 max-w-2xl bg-stone-100 p-4 rounded-lg">
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
                        <Hr className="border-solid border-gray-300 border" />
                        <Heading className="text-2xl font-bold text-center my-6 mx-8 text-green-700">
                            Contact Request Notification
                        </Heading>
                        <Section className="bg-stone-200 p-4 rounded-lg">
                            <Section>
                                <Row className="text-left">
                                    <Column className="text-left">
                                        <Text className="text-gray-700 text-base">{`First Name: ${f_name}`}</Text>
                                        <Text className="text-gray-700 text-base">{`Last Name: ${l_name}`}</Text>
                                        <Text className="text-gray-700 text-base">{`Email: ${email}`}</Text>
                                        <Text className="text-gray-700 text-base">{`Telephone: ${telephone}`}</Text>
                                        <Text className="text-gray-700 text-base">{`Date and Time: ${new Date().toLocaleString()}`}</Text>
                                    </Column>
                                </Row>
                            </Section>
                        </Section>
                        <Hr className="border-solid border-gray-300 border" />
                        <Heading className="text-xl font-semibold text-left text-green-700">
                            Message
                        </Heading>
                        <Text className="mb-4 text-lg text-stone-700 leading-7">
                            {message}
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
