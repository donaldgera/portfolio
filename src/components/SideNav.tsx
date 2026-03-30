"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Reading", href: "#books" },
  { label: "Contact", href: "#contact" },
];

export function SideNav() {
  const [activeSection, setActiveSection] = useState("");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "-20% 0px -60% 0px", // triggers when section is in middle of viewport
    });

    navLinks.forEach(({ href }) => {
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Default to empty manually if at top
    const handleScroll = () => {
        if(window.scrollY < 100) setActiveSection("");
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <nav className="fixed left-0 top-0 bottom-0 w-[60px] md:w-[80px] flex flex-col justify-between items-center py-8 z-50 border-r"
         style={{ borderColor: "var(--color-border)", backgroundColor: "color-mix(in srgb, var(--color-bg) 80%, transparent)", backdropFilter: "blur(12px)" }}>
      <div className="flex flex-col items-center gap-6">
        <a href="#" className="text-xl font-bold tracking-tight" style={{ color: "var(--color-text-primary)" }}>
          DG
        </a>
      </div>

      <div className="flex-1 w-full min-h-0 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex flex-col items-center">
         <div className="flex flex-col gap-6 items-center my-auto min-h-min py-4">
             {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                 <a
                   key={link.href}
                   href={link.href}
                   className="text-[12px] tracking-wider uppercase font-semibold transition-all duration-300 flex items-center gap-2 shrink-0"
                   style={{ 
                     color: isActive ? "var(--color-text-primary)" : "var(--color-text-tertiary)",
                     writingMode: "vertical-rl",
                     transform: "rotate(180deg)",
                     marginTop: isActive ? "-4px" : "0px"
                   }}
                 >
                   {isActive && <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--color-accent)" }} />}
                   {link.label}
                 </a>
                )
             })}
         </div>
      </div>

      <div className="flex flex-col items-center gap-6">
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-3 rounded-lg transition-colors cursor-pointer"
            style={{ color: "var(--color-text-secondary)", backgroundColor: "var(--color-bg)" }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        )}
      </div>
    </nav>
  );
}
