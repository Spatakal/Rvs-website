import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import founderImg from "@/assets/founder-wide.png.png";

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experienced professionals dedicated to delivering exceptional technology solutions and training.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl mx-auto"
        >
          <motion.div 
            className="glass-card rounded-2xl overflow-hidden group"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 30px 60px rgba(0,0,0,0.2)"
            }}
            transition={{ duration: 0.4 }}
          >
            <motion.div 
              className="h-80 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent z-10"
                animate={{
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <img
                src={founderImg}
                alt="Raja Venkatesan"
                className="w-full h-full  object-top relative z-0"
              />
            </motion.div>
            <div className="p-8">
              <h3 className="text-3xl font-bold mb-2 text-foreground">Raja Venkatesan</h3>
              <p className="text-primary font-semibold mb-4">Managing Director & Founder</p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Visionary leader with 15+ years in IT consulting, specializing in digital transformation 
                and enterprise solutions.
              </p>
              <div className="mb-6 text-center">
  <p className="text-sm font-semibold text-foreground mb-2">Key Skills:</p>

  <div className="flex flex-wrap gap-2 justify-center">
    {[
      "Digital Transformation",
      "Enterprise Architecture",
      "Business Strategy",
      "Team Leadership",
    ].map((skill) => (
      <span
        key={skill}
        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
      >
        {skill}
      </span>
    ))}
  </div>
</div>

<div className="flex flex-wrap gap-3 justify-center">
  <Button
    size="sm"
       variant="outline"
    onClick={() =>
      (window.location.href = "mailto:RVS.DigitalGen@gmail.com")
    }
    className="gap-2"
  >
    <Mail className="h-4 w-4" />
    Email
  </Button>

  <Button
    size="sm"
 
    onClick={() => (window.location.href = "tel:+918248948143")}
    className="gap-2"
  >
    <Phone className="h-4 w-4" />
    Call
  </Button>

  <Button
    size="sm"
    variant="outline"
    onClick={() => window.open("https://linkedin.com", "_blank")}
    className="gap-2"
  >
    <Linkedin className="h-4 w-4" />
    LinkedIn
  </Button>
</div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
