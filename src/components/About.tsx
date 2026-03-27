"use client";

import profile from "@/data/profile.json";
import { FadeIn } from "./Animations";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const paragraphs = profile.about.split("\n\n");

  return (
    <section id="about">
      <div className="max-w-[1100px] mx-auto px-8">
        <FadeIn>
          <SectionHeading title="About Me" />
        </FadeIn>

        <div className="space-y-5">
          {paragraphs.map((p, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <p
                className="text-[clamp(1.1rem,1.5vw,1.35rem)] leading-[1.8] max-w-[850px]"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {p}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
