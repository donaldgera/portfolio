"use client";

import publications from "@/data/publications.json";
import { FadeIn, FadeInStagger, FadeInChild } from "./Animations";
import { SectionHeading } from "./SectionHeading";
import { FileText } from "lucide-react";
import { GithubIcon } from "./Icons";

export function Publications() {
  return (
    <section id="publications">
      <div className="max-w-[1100px] mx-auto px-8">
        <FadeIn>
          <SectionHeading title="Publications" />
        </FadeIn>

        <FadeInStagger className="space-y-6">
          {publications.map((pub, i) => (
            <FadeInChild key={i}>
              <div
                className="group rounded-2xl p-8 border-[1.5px] transition-all duration-300"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-accent)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 30px -8px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3
                    className="text-[clamp(1.2rem,1.8vw,1.4rem)] font-semibold leading-snug"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {pub.title}
                  </h3>
                  <span
                    className="text-[clamp(0.85rem,1vw,0.95rem)] font-bold px-3 py-1.5 rounded-md shrink-0 transition-transform duration-300 group-hover:scale-105"
                    style={{
                      color: "var(--color-accent)",
                      backgroundColor: "var(--color-accent-light)",
                    }}
                  >
                    {pub.venue.split("(")[1]?.replace(")", "") || pub.year}
                  </span>
                </div>

                <p
                  className="text-[clamp(1.05rem,1.4vw,1.2rem)] mb-2"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {pub.authors.map((author, j) => (
                    <span key={j}>
                      {author === "Donald Gera" ? (
                        <strong style={{ color: "var(--color-text-primary)" }}>{author}</strong>
                      ) : (
                        author
                      )}
                      {j < pub.authors.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>

                <p
                  className="text-[clamp(0.95rem,1vw,1.05rem)] italic mb-4"
                  style={{ color: "var(--color-text-tertiary)" }}
                >
                  {pub.venue} — {pub.location}
                </p>

                <p
                  className="text-[clamp(1rem,1.2vw,1.15rem)] leading-[1.8] mb-6 max-w-[850px]"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {pub.description}
                </p>

                <div className="flex gap-2">
                  {pub.links.pdf && (
                    <a
                      href={pub.links.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[clamp(0.9rem,1vw,1rem)] font-medium px-4 py-2 rounded-md border transition-all duration-200 hover:bg-[var(--color-accent-light)]"
                      style={{
                        color: "var(--color-text-secondary)",
                        borderColor: "var(--color-border)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-accent)";
                        e.currentTarget.style.color = "var(--color-accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-border)";
                        e.currentTarget.style.color = "var(--color-text-secondary)";
                      }}
                    >
                      <FileText size={16} />
                      PDF
                    </a>
                  )}
                  {pub.links.code && (
                    <a
                      href={pub.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[clamp(0.9rem,1vw,1rem)] font-medium px-4 py-2 rounded-md border transition-all duration-200 hover:bg-[var(--color-accent-light)]"
                      style={{
                        color: "var(--color-text-secondary)",
                        borderColor: "var(--color-border)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-accent)";
                        e.currentTarget.style.color = "var(--color-accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-border)";
                        e.currentTarget.style.color = "var(--color-text-secondary)";
                      }}
                    >
                      <GithubIcon size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </FadeInChild>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
