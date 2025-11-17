import { useEffect, useState } from "react";
import rvsLogo from "@/assets/rvs-logo.png";

const WelcomeScreen = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

if (!show) return null;
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-secondary via-primary to-accent ">
      <div className="inner-box text-center animate-flipIn">

        <img
          src={rvsLogo}
          alt="RVS Logo"
          className="logo h-40 w-40 mx-auto mb-8 drop-shadow-2xl animate-bounceGlow"
        />

        <h1 className="title text-6xl md:text-8xl font-bold text-white mb-4 animate-titleIn">
          Royal Value Solutions
        </h1>

        <p className="subtitle text-xl md:text-2xl text-white/90 font-light animate-subIn">
          IT Consulting & Services
        </p>

        <div className="underline h-1 w-64 mx-auto mt-8 bg-gradient-to-r from-transparent via-white to-transparent animate-lineGrow" />
      </div>
    </div>
  );
};

export default WelcomeScreen;
