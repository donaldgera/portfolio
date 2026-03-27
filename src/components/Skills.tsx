"use client";

import skills from "@/data/skills.json";
import { FadeIn, FadeInStagger, FadeInChild } from "./Animations";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills">
      <div className="max-w-[1100px] mx-auto px-8">
        <FadeIn>
          <SectionHeading title="Skills" />
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map((group, i) => (
            <FadeInChild key={i}>
              <div>
                <h3
                  className="text-[clamp(1rem,1.2vw,1.15rem)] font-bold uppercase tracking-widest mb-4"
                  style={{ color: "var(--color-text-tertiary)" }}
                >
                  {group.group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-[clamp(0.95rem,1.1vw,1.05rem)] font-medium px-4 py-2 rounded-lg transition-all duration-200"
                      style={{
                        color: "var(--color-text-secondary)",
                        backgroundColor: "var(--color-surface)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      {skill}
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
