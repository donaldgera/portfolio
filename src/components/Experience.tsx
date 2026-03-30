"use client";

import experience from "@/data/experience.json";
import { FadeIn, FadeInStagger, FadeInChild } from "./Animations";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience">
      <div className="max-w-[1000px] mx-auto px-8">
        <FadeIn>
          <SectionHeading title="Experience" />
        </FadeIn>

        <FadeInStagger className="space-y-8">
          {experience.map((exp, i) => (
            <FadeInChild key={i}>
              <div
                className="relative pl-6 sm:pl-10 -ml-6 sm:-ml-10 border-l-[3px] transition-colors group"
                style={{ borderColor: "var(--color-border)" }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute -left-[10px] sm:-left-[10px] top-[10px] sm:top-[8px] w-4 h-4 sm:w-5 sm:h-5 rounded-full border-[3px] transition-all duration-300 group-hover:scale-125"
                  style={{
                    borderColor: "var(--color-accent)",
                    backgroundColor: "var(--color-bg)",
                  }}
                />

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                  <h3
                    className="text-[clamp(1.1rem,1.4vw,1.25rem)] font-semibold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {exp.role}
                  </h3>
                  <span
                    className="text-[clamp(0.85rem,1vw,0.95rem)] font-medium shrink-0"
                    style={{ color: "var(--color-text-tertiary)" }}
                  >
                    {exp.dates}
                  </span>
                </div>

                <p
                  className="text-[clamp(0.95rem,1.2vw,1.1rem)] font-medium mb-4"
                  style={{ color: "var(--color-accent)" }}
                >
                  {exp.company}
                </p>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, j) => (
                    <li
                      key={j}
                      className="text-[clamp(0.95rem,1.1vw,1.05rem)] leading-[1.8] pl-5 relative max-w-[850px]"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      <span
                        className="absolute left-0 top-[11px] sm:top-[12px] w-2 h-2 rounded-full transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: "var(--color-border)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[clamp(0.8rem,0.9vw,0.9rem)] font-medium px-3 py-1.5 rounded-md"
                      style={{
                        color: "var(--color-accent)",
                        backgroundColor: "var(--color-accent-light)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInChild>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
