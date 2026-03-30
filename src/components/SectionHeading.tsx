import { FadeIn } from "./Animations";

interface Props {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="mb-12">
      <h2
        className="text-[clamp(1.5rem,3vw,2.5rem)] font-black tracking-tighter mb-4 uppercase leading-[1.1]"
        style={{ color: "var(--color-text-primary)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-[clamp(0.95rem,1.1vw,1.1rem)] font-medium max-w-[600px]"
          style={{ color: "var(--color-text-tertiary)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
