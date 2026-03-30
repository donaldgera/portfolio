"use client";

import { useState } from "react";
import projectsData from "@/data/projects.json";
import { FadeIn, FadeInStagger, FadeInChild } from "./Animations";
import { SectionHeading } from "./SectionHeading";
import { ExternalLink, FileText } from "lucide-react";
import { GithubIcon } from "./Icons";

interface Project {
  title: string;
  summary: string;
  category: string;
  techStack: string[];
  links: {
    github?: string;
    demo?: string;
    paper?: string;
  };
}

const projects = projectsData as Project[];
const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects">
      <div className="max-w-[1000px] mx-auto px-8">
        <FadeIn>
          <SectionHeading title="Projects" subtitle="Selected work from research, university, and side projects." />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="text-[clamp(0.9rem,1vw,1rem)] font-semibold px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer"
                style={{
                  color: active === cat ? "white" : "var(--color-text-secondary)",
                  backgroundColor: active === cat ? "var(--color-accent)" : "var(--color-surface)",
                  border: active === cat ? "none" : "1px solid var(--color-border)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8" key={active}>
          {filtered.map((project) => (
            <FadeInChild key={project.title}>
              <div
                className="group rounded-2xl p-8 border transition-all duration-300 h-full flex flex-col"
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
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="text-[clamp(0.85rem,1vw,0.9rem)] font-bold uppercase tracking-widest"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors"
                        style={{ color: "var(--color-text-tertiary)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text-primary)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-tertiary)")}
                        aria-label="View source code"
                      >
                        <GithubIcon size={20} />
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors"
                        style={{ color: "var(--color-text-tertiary)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text-primary)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-tertiary)")}
                        aria-label="View live demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.links.paper && (
                      <a
                        href={project.links.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors"
                        style={{ color: "var(--color-text-tertiary)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text-primary)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-tertiary)")}
                        aria-label="View paper"
                      >
                        <FileText size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3
                  className="text-[clamp(1.05rem,1.3vw,1.2rem)] font-semibold mb-3 flex items-center gap-2"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-[clamp(0.95rem,1.1vw,1.05rem)] leading-[1.8] mb-6 flex-1"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[clamp(0.8rem,0.9vw,0.9rem)] font-medium px-2.5 py-1 rounded-md"
                      style={{
                        color: "var(--color-text-tertiary)",
                        backgroundColor: "var(--color-surface-hover)",
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
