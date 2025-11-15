import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import rvsLogo from "@/assets/rvs-logo.png";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with Animated Gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <motion.div 
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
          animate={{
            background: [
              "linear-gradient(135deg, hsl(220 20% 25% / 0.95), hsl(214 95% 45% / 0.85))",
              "linear-gradient(135deg, hsl(214 95% 45% / 0.85), hsl(220 20% 25% / 0.95))",
              "linear-gradient(135deg, hsl(220 20% 25% / 0.95), hsl(214 95% 45% / 0.85))"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Animated Shine Wave Effect */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          style={{
            background: "linear-gradient(110deg, transparent 40%, rgba(255, 255, 255, 0.1) 50%, transparent 60%)",
          }}
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Floating Gradient Orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-30"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              background: `radial-gradient(circle, hsl(${214 + i * 20} 95% 60% / 0.4), transparent)`,
              left: `${20 + i * 30}%`,
              top: `${10 + i * 25}%`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
        
        {/* Animated Wave SVG */}
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <svg
            className="relative block w-full h-32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0,60 C300,20 600,100 900,50 C1050,30 1150,70 1200,50 L1200,120 L0,120 Z"
              fill="rgba(255, 255, 255, 0.05)"
              animate={{
                d: [
                  "M0,60 C300,20 600,100 900,50 C1050,30 1150,70 1200,50 L1200,120 L0,120 Z",
                  "M0,50 C300,80 600,30 900,70 C1050,60 1150,40 1200,60 L1200,120 L0,120 Z",
                  "M0,60 C300,20 600,100 900,50 C1050,30 1150,70 1200,50 L1200,120 L0,120 Z",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.path
              d="M0,80 C300,40 600,120 900,70 C1050,50 1150,90 1200,70 L1200,120 L0,120 Z"
              fill="rgba(255, 255, 255, 0.03)"
              animate={{
                d: [
                  "M0,80 C300,40 600,120 900,70 C1050,50 1150,90 1200,70 L1200,120 L0,120 Z",
                  "M0,70 C300,100 600,50 900,90 C1050,80 1150,60 1200,80 L1200,120 L0,120 Z",
                  "M0,80 C300,40 600,120 900,70 C1050,50 1150,90 1200,70 L1200,120 L0,120 Z",
                ],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </svg>
        </div>
      </div>

      {/* Content Container - 50/50 Split */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
          
          {/* Left Side - Content (50%) */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-left space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-primary-foreground">
                RVS
              </h1>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-6 text-primary-foreground">
                IT CONSULTING & SERVICES
              </h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-primary-foreground/90 font-light"
            >
              Empowering Businesses through Technology • Training • Talent
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-base md:text-lg text-primary-foreground/80 leading-relaxed max-w-xl"
            >
              We transform businesses through cutting-edge technology solutions, 
              comprehensive training programs, and strategic talent placement. 
              Your success is our mission.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("#services")}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:scale-105 transition-all font-semibold px-8 py-6 text-lg shadow-2xl"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="border-2 border-primary-foreground text-primary hover:bg-primary-foreground/20 hover:scale-105 transition-all font-semibold px-8 py-6 text-lg backdrop-blur-sm"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Logo (50%) */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 180 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <motion.div
              animate={{
                y: [0, -30, 0],
                rotateZ: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <motion.div
                className="absolute inset-0 bg-primary-foreground/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <img 
                src={rvsLogo} 
                alt="RVS Logo" 
                className="relative h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 drop-shadow-2xl" 
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center hover:border-primary-foreground transition-colors cursor-pointer">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary-foreground/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
