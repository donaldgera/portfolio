"use client";

export function Footer() {
  return (
    <footer
      className="border-t py-8"
      style={{ borderColor: "var(--color-border)" }}
    >
      <div className="max-w-[1100px] mx-auto px-8 flex items-center justify-end">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display inline-flex items-center gap-2 px-3 py-2 rounded-lg text-[0.95rem] font-semibold transition-all duration-200 cursor-pointer"
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
          <span>Top</span>
          <span aria-hidden="true">↑</span>
        </button>
      </div>
    </footer>
  );
}
