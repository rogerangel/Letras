import "./globals.css";
// import { Inter } from "next/font/google";
import { Baloo_Tammudu_2 } from "next/font/google";
import NavigationBar from "@/components/NavigationBar";

// const inter = Inter({ subsets: ["latin"] });
const balooT = Baloo_Tammudu_2({ subsets: ["latin"] });

export const metadata = {
  title: "Letras Inc.",
  description: "Generated by create next app",
};

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export default function RootLayout({ children }) {
  const year = new Date().getFullYear();
  return (
    <html lang="en">
      <body
        className={classNames(
          balooT.className,
          "antialiased text-gray-900 bg-gray-100 h-full"
        )}
      >
        <NavigationBar />
        {children}
        <footer className="bg-stone-300/90 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center h-28">
            <p className="text-sm text-gray-600">{`© ${year} Letras Inc.`}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
