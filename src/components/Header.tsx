import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import rvsLogo from "@/assets/rvs-logo.png";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Roles", href: "#roles" },
    { label: "What Next", href: "#whats-next" },
    { label: "Clients", href: "#clients" },
    { label: "Summary", href: "#summary" },
    { label: "Team", href: "#team" },
    { label: "Contact Us", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      }

      if (currentScrollY < 10) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b w-full max-w-full"
    >
      <div className="container mx-auto px-3 /12 max-w-full">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src={rvsLogo}
              alt="RVS Logo"
              className="h-8 w-8 sm:h-12 sm:w-12"
            />
            <div className="flex flex-col md:justify-center">
              <span className="text-base sm:text-xl font-bold text-primary">
                RVS
              </span>
              <span className="text-[10px] sm:text-xs text-muted-foreground hidden sm:block">
                Royal Value Solutions
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium hover:text-white transition-colors"
              >
                {item.label}
              </Button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden pb-4"
            >
              <div className="flex flex-col gap-2 w-full">
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    variant="ghost"
                    onClick={() => scrollToSection(item.href)}
                    className="justify-start text-sm font-medium hover:text-primary w-full"
                  >
                    {item.label}
                  </Button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>

      </div>
    </motion.header>
  );
};

export default Header;
