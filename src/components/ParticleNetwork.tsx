"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";

export function ParticleNetwork() {
  const [init, setInit] = useState(false);
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";
  const particleColor = isDark ? "#ffffff" : "#60a5fa"; // Slate or light blue for light mode
  const opacity = isDark ? 0.3 : 0.6;

  return (
    <div className="absolute inset-0 pointer-events-auto" style={{ zIndex: 0 }}>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
            },
            modes: {
              grab: {
                distance: 250,
                links: {
                  opacity: opacity * 1.5,
                },
              },
            },
          },
          particles: {
            color: {
              value: particleColor,
            },
            links: {
              color: particleColor,
              distance: 180,
              enable: true,
              opacity: opacity,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "bounce", // Changed to bounce so they don't leave screen
              },
            },
            number: {
              density: {
                enable: true,
                width: 1000,
                height: 1000
              },
              value: 80,
            },
            opacity: {
              value: opacity,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
