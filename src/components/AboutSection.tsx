import founderImg from "@/assets/founder.png";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
 
const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-center mb-6 text-gradient"
          >
            Your Partner in Digital Transformation
          </motion.h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-start mt-16">
            <motion.div
              initial={{ opacity: 0, x: -60, rotateY: -15 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="flex-1"
            >
              <motion.p 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xl font-bold text-foreground/80 leading-relaxed mb-6 text-center translate-y-9"
              >
                At RVS, we bridge the gap between ambitious businesses and exceptional technology talent. 
                Our comprehensive approach combines strategic consulting, hands-on training, and innovative 
                solutions to drive sustainable growth and competitive advantage.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="p-10 glass-card rounded-lg hover:shadow-2xl transition-all mt-[80px]"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-[#ffb400] text-center top-[-10px]">Why Choose RVS?</h3>
                <p className="text-base text-foreground/70 leading-relaxed text-center font-semibold">
                  With <span 
                    className="text-[#ffb508] font-semibold" 
                    style={{ textShadow: "2px 2px 4px rgba(188, 215, 30, 0.4)" }}
                  >15+ years of experience</span> in the IT industry, 
                  we understand the challenges businesses face in today's rapidly evolving digital landscape. 
                  Our unique combination of technical expertise, industry insights, and personalized service 
                  ensures that every client receives solutions tailored to their specific needs and goals.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60, rotateY: 15 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="relative flex-shrink-0 w-full md:w-80 lg:w-96"
            >
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05, rotateZ: 2 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 z-10"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <img
                  src={founderImg}
                  alt="Founder"
                  className="w-full h-auto object-cover relative z-0"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
