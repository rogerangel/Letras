"use server";

import { Resend } from "resend";
import Contact_Email_Templ from "@/components/email-templates/Contact_Email_Templ";
import Contact_RepEmail_Templ from "@/components/email-templates/Contact_RepEmail_Templ";
import { revalidatePath } from "next/cache";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function contactConf(prevState, formData) {
  const data = Object.fromEntries(formData);
  const fields = ["f_name", "l_name", "email", "message"];
  for (const field of fields) {
    if (!data[field]) {
      return { message: `Missing required field: ${field}` };
    }
  }
  try {
    const email = await resend.emails.send({
      from: "Letras Inc <Inquiries@letrasinc.org>",
      to: "letras.nyc@gmail.com",
      subject: `${data.f_name} ${data.l_name} has has made an inquiry.`,
      react: <Contact_Email_Templ {...data} />,
    });
    if (email.error) throw new Error(email.error);
    contactReplyConf(data);
    revalidatePath(data.pathname);
    return { message: "Email sent successfully", status: "success" };
  } catch (error) {
    console.error(error);
    return {
      message: `Error sending email please try again later`,
      status: error,
    };
  }
}

async function contactReplyConf(user) {
  try {
    const email = await resend.emails.send({
      from: "Letras Inc <Inquiries@letrasinc.org>",
      to: user.email,
      reply_to: "Letras Inc <Letras.nyc@gmail.com>",
      subject: `Hi ${user.f_name}, we have received your inquiry.`,
      react: <Contact_RepEmail_Templ {...user} />,
    });
    if (email.error) throw new Error(email.error);
    return { message: "Email sent successfully", status: "success" };
  } catch (error) {
    console.error(error);
    return {
      message: `Error sending email please try again later`,
      status: error,
    };
  }
}
