"use client";

import Image from "next/image";
import books from "@/data/books.json";
import { FadeIn } from "./Animations";
import { SectionHeading } from "./SectionHeading";
import { BookOpen } from "lucide-react";

export function Books() {
  return (
    <section id="books">
      <div className="max-w-[1100px] mx-auto px-8">
        <FadeIn>
          <SectionHeading title="Reading" subtitle="Books that shaped my thinking." />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
            {books.map((book, i) => (
              <a
                key={i}
                href={book.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-shrink-0 w-[220px] sm:w-[260px] snap-start rounded-2xl p-6 border-[1.5px] transition-all duration-300"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-accent)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 40px -12px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="w-full aspect-[3/4] rounded-lg mb-3 overflow-hidden flex items-center justify-center relative"
                  style={{ backgroundColor: "var(--color-surface-hover)" }}
                >
                  {book.cover ? (
                    <Image
                      src={book.cover}
                      alt={`${book.title} cover`}
                      fill
                      sizes="200px"
                      className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <BookOpen size={32} style={{ color: "var(--color-text-tertiary)" }} />
                  )}
                </div>

                <h4
                  className="text-[clamp(1.05rem,1.4vw,1.2rem)] font-bold leading-snug mb-2 mt-4"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {book.title}
                </h4>

                <p
                  className="text-[clamp(0.9rem,1vw,1rem)] font-medium"
                  style={{ color: "var(--color-text-tertiary)" }}
                >
                  {book.author}
                </p>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
