import { FadeIn } from "./Animations";

interface Props {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="mb-12">
      <h2
        className="text-[clamp(2.5rem,5vw,4rem)] font-black tracking-tighter mb-4"
        style={{ color: "var(--color-text-primary)" }}
      >
        {title}<span style={{ color: "var(--color-accent)" }}>.</span>
      </h2>
      {subtitle && (
        <p
          className="text-[clamp(1.125rem,2vw,1.35rem)] font-medium max-w-[800px]"
          style={{ color: "var(--color-text-tertiary)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
