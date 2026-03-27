"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, FileText, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon, CodeforcesIcon } from "./Icons";
import profile from "@/data/profile.json";
import { FadeIn } from "./Animations";

const roles = [
  "An AI Engineer",
  "A Researcher",
  "An ML Builder",
  "A CV Enthusiast",
  "A Problem Solver",     
];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  const nextRole = useCallback(() => {
    setCurrentRole((prev) => (prev + 1) % roles.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextRole, 2600);
    return () => clearInterval(interval);
  }, [nextRole]);

  return (
    <section
      className="min-h-[100dvh] flex flex-col justify-center relative overflow-hidden"
      style={{ paddingTop: "5rem", paddingBottom: "4rem" }}
    >
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-text-primary) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Subtle gradient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06] blur-[120px] pointer-events-none"
        style={{ backgroundColor: "var(--color-accent)" }}
      />

      <div className="max-w-[1100px] mx-auto px-8 w-full relative z-10">
        {/* Greeting line */}
        <FadeIn>
          <p
            className="text-[clamp(1.125rem,2.5vw,1.5rem)] font-medium mb-6 tracking-wide"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Hey, I&apos;m
          </p>
        </FadeIn>

        {/* Big name */}
        <FadeIn delay={0.1}>
          <h1
            className="text-[clamp(4rem,12vw,8rem)] font-black leading-[0.95] tracking-tighter mb-8"
            style={{ color: "var(--color-text-primary)" }}
          >
            Donald
            <br />
            Gera<span style={{ color: "var(--color-accent)" }}>.</span>
          </h1>
        </FadeIn>

        {/* Animated role highlight */}
        <FadeIn delay={0.2}>
          <div className="mb-8 flex items-center gap-3 flex-wrap">
            <span
              className="text-[clamp(1.125rem,2.5vw,1.5rem)] font-medium"
              style={{ color: "var(--color-text-secondary)" }}
            >
              I&apos;m
            </span>
            <div className="relative h-[3.4rem] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                  className="inline-flex items-center px-6 py-1.5 rounded-md text-[clamp(1.125rem,2.5vw,1.5rem)] font-bold tracking-wide whitespace-nowrap"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    color: "white",
                  }}
                >
                  {roles[currentRole]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>

        {/* Bio paragraph */}
        <FadeIn delay={0.35}>
          <p
            className="text-[clamp(1.05rem,1.8vw,1.35rem)] leading-[1.8] max-w-[750px] mb-14"
            style={{ color: "var(--color-text-secondary)" }}
          >
            MSc student at the{" "}
            <span style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
              University of Trento
            </span>
            , specializing in Artificial Intelligent Systems. Currently researching{" "}
            <span style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
              VQA & Scene Graphs
            </span>{" "}
            at Polytechnic University of Milan&apos;s{" "}
            <span style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
              AIRLab
            </span>
            . Published at{" "}
            <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>
              EDBT 2025
            </span>
            .
          </p>
        </FadeIn>

        {/* CTA buttons */}
        <FadeIn delay={0.45}>
          <div className="flex flex-wrap gap-4 mb-14">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-[15px] font-semibold text-white transition-all duration-200"
              style={{ backgroundColor: "var(--color-accent)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-accent-hover)";
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 8px 25px -5px rgba(37, 99, 235, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-accent)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              View Projects
              <ArrowDown size={15} />
            </a>
            <a
              href={profile.cv}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-[15px] font-semibold border transition-all duration-200"
              style={{
                color: "var(--color-text-primary)",
                borderColor: "var(--color-border)",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-surface-hover)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <FileText size={15} />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-[15px] font-semibold border transition-all duration-200"
              style={{
                color: "var(--color-text-primary)",
                borderColor: "var(--color-border)",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-surface-hover)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Mail size={15} />
              Contact Me
            </a>
          </div>
        </FadeIn>

        {/* Social links */}
        <FadeIn delay={0.55}>
          <div
            className="flex items-center gap-1 pt-4 border-t"
            style={{ borderColor: "var(--color-border)" }}
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg transition-all duration-200"
              style={{ color: "var(--color-text-tertiary)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-text-primary)";
                e.currentTarget.style.backgroundColor = "var(--color-surface-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--color-text-tertiary)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              aria-label="GitHub"
            >
              <GithubIcon size={24} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg transition-all duration-200"
              style={{ color: "var(--color-text-tertiary)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-text-primary)";
                e.currentTarget.style.backgroundColor = "var(--color-surface-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--color-text-tertiary)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={24} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-3 rounded-lg transition-all duration-200"
              style={{ color: "var(--color-text-tertiary)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-text-primary)";
                e.currentTarget.style.backgroundColor = "var(--color-surface-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--color-text-tertiary)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href={profile.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg transition-all duration-200"
              style={{ color: "var(--color-text-tertiary)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-text-primary)";
                e.currentTarget.style.backgroundColor = "var(--color-surface-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--color-text-tertiary)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              aria-label="Codeforces"
            >
              <CodeforcesIcon size={24} />
            </a>

            <span
              className="ml-4 text-[13px] font-medium"
              style={{ color: "var(--color-text-tertiary)" }}
            >
              Find me online
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
