"use client";

import education from "@/data/education.json";
import { FadeIn, FadeInStagger, FadeInChild } from "./Animations";
import { SectionHeading } from "./SectionHeading";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education">
      <div className="max-w-[1100px] mx-auto px-8">
        <FadeIn>
          <SectionHeading title="Education" />
        </FadeIn>

        <FadeInStagger className="space-y-8">
          {education.map((edu, i) => (
            <FadeInChild key={i}>
              <div
                className="relative pl-8 border-l-[3px] transition-colors group"
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
                    className="text-[clamp(1.2rem,1.8vw,1.5rem)] font-semibold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {edu.degree}
                  </h3>
                  <span
                    className="text-[clamp(0.95rem,1vw,1.1rem)] font-medium shrink-0"
                    style={{ color: "var(--color-text-tertiary)" }}
                  >
                    {edu.dates}
                  </span>
                </div>

                <p
                  className="text-[clamp(1.05rem,1.4vw,1.25rem)] font-medium mb-3 flex items-center gap-2"
                  style={{ color: "var(--color-accent)" }}
                >
                  <GraduationCap size={18} />
                  {edu.university}
                </p>

                {edu.description && (
                  <p
                    className="text-[clamp(1rem,1.2vw,1.15rem)] leading-[1.8] mb-5 max-w-[850px]"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {edu.description}
                  </p>
                )}

                {edu.coursework.length > 0 && (
                  <div>
                    <p
                      className="text-[clamp(0.9rem,1vw,1rem)] font-bold uppercase tracking-widest mb-3"
                      style={{ color: "var(--color-text-tertiary)" }}
                    >
                      Relevant Coursework
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="text-[clamp(0.85rem,1vw,0.95rem)] font-medium px-3 py-1.5 rounded-md transition-colors"
                          style={{
                            color: "var(--color-text-secondary)",
                            backgroundColor: "var(--color-surface)",
                            border: "1px solid var(--color-border)",
                          }}
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </FadeInChild>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
