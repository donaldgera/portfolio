"use client";

import { motion } from "framer-motion";
import { Mail, FileText, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon, CodeforcesIcon } from "./Icons";
import profile from "@/data/profile.json";
import { FadeIn } from "./Animations";
import { ParticleNetwork } from "./ParticleNetwork";

export function Hero() {

  return (
    <section
      className="min-h-[100dvh] flex flex-col justify-center relative overflow-hidden"
      style={{ paddingTop: "5rem", paddingBottom: "4rem" }}
    >
      <ParticleNetwork />

      <div className="max-w-[1000px] mx-auto px-8 w-full relative z-10">
        {/* Greeting line */}
        <FadeIn>
          <p
            className="text-[clamp(1.25rem,2vw,1.75rem)] font-bold mb-4 tracking-wide uppercase"
            style={{ color: "var(--color-text-primary)" }}
          >
            Hi! I&apos;m
          </p>
        </FadeIn>

        {/* Animated 3D Role highlight */}
        <FadeIn delay={0.1}>
          <div className="mb-10 relative cube-box max-w-[500px] md:max-w-[650px]" style={{ perspective: "1500px" }}>
            <div className="w-full h-full relative preserve-3d animate-cube">
              <div className="cube-face face-front bg-blue-600 text-white shadow-xl">DONALD</div>
              <div className="cube-face face-top bg-blue-600 text-white shadow-xl">A RESEARCHER</div>
              <div className="cube-face face-back bg-blue-600 text-white shadow-xl">AN AI STUDENT</div>
              <div className="cube-face face-bottom bg-blue-600 text-white shadow-xl">AN INNOVATOR</div>
            </div>
          </div>
        </FadeIn>

        {/* Bio paragraph */}
        <FadeIn delay={0.35}>
          <p
            className="text-[clamp(1rem,1.2vw,1.15rem)] leading-[1.8] max-w-[600px] mb-10"
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
