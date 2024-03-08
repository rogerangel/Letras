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

export default function EmailTemplate({
    name,
    amount,
    ccn,
    cc,
    time
}) {
    const amountPaid = Number(amount / 100).toFixed(2);
    const created = new Date(time * 1000).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour12: true,
        hour: "numeric",
        minute: "numeric",
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
                <Body className="bg-stone-300 my-auto mx-auto p-4">
                    <Container className="border border-solid border-gray-300 max-w-2xl bg-stone-100 p-4 rounded-lg">
                        <Section className="mt-8">
                            <Link href="https://www.letrasinc.org/">
                                <Img
                                    src="https://ik.imagekit.io/o0j3ghd5q/letras.png?updatedAt=1706894404434"
                                    alt="Letras Inco Logo"
                                    width={280}
                                    height="auto"
                                    className="my-0 mx-auto"
                                />
                            </Link>
                        </Section>
                        <Heading className="text-2xl font-bold text-center my-6 mx-8 text-cyan-700">
                            Your contribution support literacy!
                        </Heading>
                        <Section className="bg-stone-200 p-4 rounded-lg">
                            <Text className="text-gray-500 text-center">Amount Paid</Text>
                            <Text className="text-4xl font-bold text-center text-indigo-800">{`$${amountPaid}`}</Text>
                            <Text className="text-gray-500 text-center">Payment Method</Text>
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
                            <Text className="text-gray-500 text-center mt-4">Date Paid</Text>
                            <Text className="text-center text-black">{created}</Text>
                        </Section>
                        <Text className="mb-7 mt-10 text-lg text-stone-700 leading-6">
                            Hello {name},
                        </Text>
                        <Text className="mb-4 text-lg text-stone-700 leading-7">
                            Thank you for your generous contribution! Your support will allow
                            us to provide books, school materials, and other resources to
                            strengthen the cultures of literacy sites with great need. With
                            your help, we are one step closer to creating vibrant spaces that
                            serve as hubs for learning. We are truly grateful for your
                            partnership.
                        </Text>
                    </Container>
                    <Container className="mx-auto max-w-2xl mt-8">
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
