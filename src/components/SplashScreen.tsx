import { useState, useEffect } from "react";
import logo from "@/assets/logo.webp";

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [phase, setPhase] = useState<"fade-in" | "visible" | "fade-out">("fade-in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("visible"), 50);
    const t2 = setTimeout(() => setPhase("fade-out"), 2200);
    const t3 = setTimeout(() => onFinish(), 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onFinish]);

  const opacity =
    phase === "fade-in" ? "opacity-0" :
    phase === "visible" ? "opacity-100" :
    "opacity-0";

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary transition-opacity duration-800 ${opacity}`}
    >
      <img
        src={logo}
        alt="إرث | Heritage"
        className="w-36 h-36 md:w-48 md:h-48 rounded-full object-contain"
      />
      <h1 className="font-amiri text-3xl md:text-4xl font-bold text-primary-foreground mt-4">
        إرث | Heritage
      </h1>
      <p className="text-primary-foreground/80 text-sm mt-2 font-tajawal">Taste Our Tradition</p>
    </div>
  );
};

export default SplashScreen;
