"use client";

import profile from "@/data/profile.json";
import { FadeIn } from "./Animations";
import { SectionHeading } from "./SectionHeading";
import { FileText, Download } from "lucide-react";

export function CV() {
  return (
    <section id="cv">
      <div className="max-w-[1100px] mx-auto px-8">
        <FadeIn>
          <SectionHeading title="Curriculum Vitae" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div
            className="rounded-2xl p-12 border-[1.5px] text-center max-w-[800px] mx-auto"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <div
              className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
              style={{ backgroundColor: "var(--color-accent-light)" }}
            >
              <FileText size={32} style={{ color: "var(--color-accent)" }} />
            </div>

            <p
              className="text-[clamp(1.05rem,1.4vw,1.25rem)] mb-8 max-w-[500px] mx-auto leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Download my full resume for a detailed overview of my experience, education, and skills.
            </p>

            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-[clamp(1rem,1.2vw,1.15rem)] font-bold text-white transition-all duration-300 shadow-xl shadow-blue-900/10 hover:-translate-y-1"
              style={{ backgroundColor: "var(--color-accent)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--color-accent-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--color-accent)")}
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
