"use client";

import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="border-t py-8"
      style={{ borderColor: "var(--color-border)" }}
    >
      <div className="max-w-[1100px] mx-auto px-8 flex items-center justify-between">
        <p
          className="text-[clamp(0.9rem,1vw,1rem)] font-medium"
          style={{ color: "var(--color-text-tertiary)" }}
        >
          © {new Date().getFullYear()} Donald Gera. Built with Next.js
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-2 rounded-lg transition-all duration-200 cursor-pointer"
          style={{ color: "var(--color-text-tertiary)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--color-text-primary)";
            e.currentTarget.style.backgroundColor = "var(--color-surface-hover)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--color-text-tertiary)";
            e.currentTarget.style.backgroundColor = "transparent";
          }}
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}
