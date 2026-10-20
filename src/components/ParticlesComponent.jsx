import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

let enginePromise;

function ensureEngine() {
  if (!enginePromise) {
    enginePromise = initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }
  return enginePromise;
}

const ParticlesComponent = ({ id }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    // Start immediately after the first browser paint instead of waiting for
    // requestIdleCallback. This keeps the UI responsive while avoiding a
    // noticeable particle delay.
    const frame = window.requestAnimationFrame(() => {
      ensureEngine().then(() => {
        if (!cancelled) setReady(true);
      });
    });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
    };
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 45,
      detectRetina: false,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "repulse" },
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          grab: { distance: 120, links: { opacity: 0.35 } },
          repulse: { distance: 100, duration: 0.35 },
        },
      },
      particles: {
        color: { value: "#FFFFFF" },
        links: {
          color: "#FFFFFF",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: false,
          speed: 0.55,
          straight: false,
        },
        number: {
          density: { enable: true, area: 1200 },
          value: 55,
        },
        opacity: { value: 0.75 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 2.2 } },
      },
    }),
    [],
  );

  return ready ? <Particles id={id} options={options} /> : null;
};

export default ParticlesComponent;
