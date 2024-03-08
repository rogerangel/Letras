// import WordStagger from "@/components/WordStagger";
import LetterStagger from "@/components/LetterStagger";
import letras_icon from "../../public/letras_icon.png";
import Image from "next/image";

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
}

const animationVariants = {
    initial: { y: 0 },
    animate: {
        y: -20,
        transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.5,
        },
    },
};

export default async function Loading({ className = 'absolute inset-0' }) {
    return (
        <div className={classNames(className, "flex items-center justify-center min-h-screen w-full h-full bg-stone-400 bg-opacity-90")}>
            <div className="inline-flex items-baseline">
                <Image src={letras_icon} alt="Letras Icon" width={50} height={50} className="animate-bounce" priority />
                <LetterStagger as="p" variant={animationVariants} className="text-4xl font-bold flex text-green-700 drop-shadow-sm">
                    Letras
                </LetterStagger>
                <div className="ms-4">
                    <p className="font-bold text-gray-700">
                        loading...
                    </p>
                </div>
            </div>
        </div>
    );
}