"use client";

import profile from "@/data/profile.json";
import skills from "@/data/skills.json";
import { FadeIn, FadeInStagger, FadeInChild } from "./Animations";
import { SectionHeading } from "./SectionHeading";
import { Terminal, Wrench, Cloud, Brain } from "lucide-react";

export function About() {
  const paragraphs = profile.about.split("\n\n");

  return (
    <section id="about">
      <div className="max-w-[1000px] mx-auto px-8">
        <FadeIn>
          <SectionHeading title="About Me" />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-start">
          <div className="space-y-5">
            {paragraphs.map((p, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <p
                  className="text-[clamp(0.95rem,1.2vw,1.1rem)] leading-[1.7]"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {p}
                </p>
              </FadeIn>
            ))}
          </div>

          <div>
            <FadeInStagger className="space-y-10">
              {skills.map((skillGroup, i) => {
                const getIcon = (group: string) => {
                  switch (group) {
                    case "Languages":
                      return <Terminal size={24} style={{ color: "var(--color-accent)" }} />;
                    case "Frameworks & Tools":
                      return <Wrench size={24} style={{ color: "var(--color-accent)" }} />;
                    case "ML / AI":
                      return <Brain size={24} style={{ color: "var(--color-accent)" }} />;
                    default:
                      return <Cloud size={24} style={{ color: "var(--color-accent)" }} />;
                  }
                };

                const title = skillGroup.group === "Languages" ? "Programming Languages" : skillGroup.group;

                return (
                  <FadeInChild key={i}>
                    <div className="flex items-center gap-3 mb-4">
                      {getIcon(skillGroup.group)}
                      <h3
                        className="text-[clamp(1.05rem,1.3vw,1.15rem)] font-bold"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {skillGroup.items.map((item) => (
                        <span
                          key={item}
                          className="px-3.5 py-1.5 rounded-md text-[14px] font-medium transition-colors"
                          style={{
                            backgroundColor: "var(--color-surface-hover)",
                            color: "var(--color-text-primary)",
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </FadeInChild>
                );
              })}
            </FadeInStagger>
          </div>
        </div>
      </div>
    </section>
  );
}
