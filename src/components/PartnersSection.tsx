import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import siebrains from "@/assets/sie-brains.png";
import joyit from "@/assets/JOY-IT.jpg";
import shell from "@/assets/shell-info.png";
import ubique from "@/assets/ubique.png";
import abacus from "@/assets/abacus.png";
import seyyone from "@/assets/seyyone.png";
import altez from "@/assets/altezza.webp";
import whiztek from "@/assets/whiztekcorp.png";
import artek from "@/assets/artech.png";
import talod from "@/assets/talodyn.jpg";
import sumeru from "@/assets/sumeru-global.png";
import techno from "@/assets/techno.png";
import resorce from "@/assets/resourse-tree.png";

const partners = [
  { name: "Abacus Services", url: "https://abacusservice.com", img: abacus },
  { name: "ALTEZZASYS", url: "https://altezzasys.com", img: altez },
  { name: "ARTECH", url: "https://artech.com", img: artek },
  { name: "Joy IT Consulting", url: "https://joyitconsulting.com", img: joyit },
  { name: "Resource Tree", url: "https://resourcetree.co.in", img: resorce },
  { name: "Shell Infotech", url: "https://shellinfotech.com", img: shell },
  { name: "Seyyone", url: "https://seyyone.com", img: seyyone },
  { name: "Sie Brains", url: "https://siebrains.com", img: siebrains },
  { name: "SUMERU GLOBAL", url: "https://sumeruglobal.com", img: sumeru },
  { name: "TALODYN", url: "https://in.linkedin.com/company/talodyn", img: talod },
  { name: "Techno-facts", url: "https://www.techno-facts.com", img: techno },
  { name: "Ubique Systems", url: "https://ubiquesystems.com", img: ubique },
  { name: "WHIZTEK", url: "https://whiztekcorp.com", img: whiztek },
];

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="clients" className="py-20 bg-[#feb800] overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#333b4d]">
            Our Trusted Partners
          </h2>
          <p className="text-lg text-[#333b4d] max-w-3xl mx-auto">
            Building lasting relationships with forward-thinking organizations across various industries.
          </p>
        </motion.div>

        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#feb800]  to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#feb800]  to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
  <motion.div
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      duration: 90,   // slower
      repeat: Infinity,
      ease: "linear"
    }}
    className="flex gap-12 w-max"
  >
    {[...partners, ...partners].map((partner, index) => (
      <motion.a
        key={`${partner.name}-${index}`}
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          scale: 1.12,
          rotateY: 12,
          y: -8
        }}
        transition={{ duration: 0.4 }}
        className="flex-shrink-0 p-4 min-w-[200px] flex flex-col items-center justify-center"
      >
        <img
          src={partner.img}
          alt={partner.name}
          className="h-16 w-auto object-contain group-hover:scale-110 transition-all duration-300"
        />

        <h3 className="text-lg font-semibold text-blue-900 text-center mt-3 transition-all">
          {partner.name}
        </h3>
      </motion.a>
    ))}
  </motion.div>
</div>

        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
