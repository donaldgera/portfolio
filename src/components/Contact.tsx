"use client";

import profile from "@/data/profile.json";
import { FadeIn } from "./Animations";
import { SectionHeading } from "./SectionHeading";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, CodeforcesIcon } from "./Icons";

const contactLinks = [
  {
    icon: "mail" as const,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: "github" as const,
    label: "GitHub",
    value: "donaldgera",
    href: profile.github,
  },
  {
    icon: "linkedin" as const,
    label: "LinkedIn",
    value: "donald-gera",
    href: profile.linkedin,
  },
  {
    icon: "codeforces" as const,
    label: "Codeforces",
    value: "donaldgera",
    href: profile.codeforces,
  },
];

function ContactIcon({ type, size = 18 }: { type: string; size?: number }) {
  switch (type) {
    case "mail":
      return <Mail size={size} />;
    case "github":
      return <GithubIcon size={size} />;
    case "linkedin":
      return <LinkedinIcon size={size} />;
    case "codeforces":
      return <CodeforcesIcon size={size} />;
    default:
      return <Mail size={size} />;
  }
}

export function Contact() {
  return (
    <section id="contact">
      <div className="max-w-[1100px] mx-auto px-8">
        <FadeIn>
          <SectionHeading title="Get in Touch" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <p
            className="text-[clamp(1.1rem,1.4vw,1.3rem)] leading-[1.8] mb-10 max-w-[650px]"
            style={{ color: "var(--color-text-secondary)" }}
          >
            I&apos;m always open to interesting conversations, research collaborations, and new opportunities.
            Feel free to reach out through any of the channels below.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 max-w-[900px]">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-6 rounded-2xl border-[1.5px] transition-all duration-300"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-accent)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "var(--color-accent-light)", color: "var(--color-accent)" }}
                >
                  <ContactIcon type={link.icon} size={20} />
                </div>
                <div>
                  <p
                    className="text-[clamp(0.85rem,1vw,0.95rem)] font-bold uppercase tracking-widest mt-0.5"
                    style={{ color: "var(--color-text-tertiary)" }}
                  >
                    {link.label}
                  </p>
                  <p
                    className="text-[clamp(1.05rem,1.3vw,1.2rem)] font-bold mt-0.5"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {link.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex items-center gap-3 mt-8">
            <MapPin size={18} style={{ color: "var(--color-text-tertiary)" }} />
            <span
              className="text-[clamp(0.95rem,1.2vw,1.1rem)]"
              style={{ color: "var(--color-text-tertiary)" }}
            >
              {profile.location}
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
