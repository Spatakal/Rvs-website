import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Cloud, Users, GraduationCap, ClipboardCheck } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Solution as a Service (SAAS)",
    points: [
      "Custom Development",
      "Cloud Migration",
      "System Integration",
      "Ongoing Support"
    ],
    color: "hsl(214 95% 45%)"
  },
  {
    icon: Users,
    title: "Corporate-Ready Fresher Programs",
    points: [
      "Industry Orientation",
      "Soft Skills Training",
      "Project Management",
      "Real-world Experience"
    ],
    color: "hsl(220 20% 25%)"
  },  
  {
    icon: GraduationCap,
    title: "Training as a Service (TAAS)",
    points: [
      "Custom Curriculum",
      "Expert Instructors",
      "Hands-on Projects",
      "Certification Support"
    ],
    color: "hsl(220 20% 25%)"
  },
  {
    icon: ClipboardCheck,
    title: "Interview as a Service (IAAS)",
    points: [
      "Technical Assessments",
      "Behavioral Interviews",
      "Skills Evaluation",
      "Candidate Reports"
    ],
    color: "hsl(210 90% 55%)"
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
        ease: "easeOut",
      }}
      className="
        relative bg-background border rounded-xl p-8 
        overflow-hidden shadow-md hover:shadow-xl 
        transition-all duration-500 hover:-translate-y-2
      "
    >
      {/* STEP CUT CORNER */}
      <div
        className="absolute top-0 right-0 w-16 h-16"
        style={{
          clipPath: "polygon(100% 0, 0 0, 100% 100%)",
          backgroundColor: service.color,
        }}
      ></div>

      {/* ICON STRIP */}
      <div
        style={{ backgroundColor: service.color }}
        className="w-14 h-14 rounded-lg flex items-center justify-center mb-5 shadow-md"
      >
        <Icon className="h-7 w-7 text-white" />
      </div>

      {/* TITLE */}
      <h3 className="text-2xl font-semibold mb-4">
        {service.title}
      </h3>

      {/* POINTS */}
      <ul className="space-y-2">
        {service.points.map((point, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 text-muted-foreground"
          >
            <span className="text-primary">▹</span>
            <span className="text-base">{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive IT consulting services designed to empower your business with cutting-edge technology solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
