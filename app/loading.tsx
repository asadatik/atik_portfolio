"use client";

import { useEffect, useState } from "react";

export default function Loader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0); 
  const [dots, setDots] = useState("");

  // Animate dots
  useEffect(() => {
    const id = setInterval(() => {
      setDots((d) => (d.length >= 3 ? "" : d + "."));
    }, 380);
    return () => clearInterval(id);
  }, []);

  // Progress bar
  useEffect(() => {
    let current = 0;
    const steps = [
      { target: 30, speed: 18 },
      { target: 65, speed: 28 },
      { target: 85, speed: 45 },
      { target: 100, speed: 20 },
    ];
    let stepIdx = 0;

    const tick = () => {
      const { target, speed } = steps[stepIdx];
      if (current < target) {
        current += 1;
        setProgress(current);
        setTimeout(tick, speed);
      } else {
        stepIdx++;
        if (stepIdx < steps.length) setTimeout(tick, speed);
        else {
          // Done
          setTimeout(() => setPhase(1), 200);
          setTimeout(() => setPhase(2), 900);
          setTimeout(() => onComplete?.(), 1300);
        }
      }
    };
    tick();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Syne:wght@800&display=swap');

        @keyframes pulseRing {
          0%   { transform: scale(0.85); opacity: 0.6; }
          50%  { transform: scale(1.05); opacity: 0.2; }
          100% { transform: scale(0.85); opacity: 0.6; }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes spinReverse {
          to { transform: rotate(-360deg); }
        }

        @keyframes fadeSlideUp {
          0%   { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-32px); }
        }

        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .loader-exit {
          animation: fadeSlideUp 0.5s cubic-bezier(0.4,0,0.2,1) forwards;
        }
      `}</style>

      <div
        className={phase === 2 ? "loader-exit" : ""}
        style={{
          position: "fixed",
          inset: 0,
          background: "#080a0c",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
          gap: "40px",
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        {/* Subtle grid bg */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0,255,230,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,230,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }} />

        {/* Radial glow */}
        <div style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,210,200,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Spinner rings */}
        <div style={{ position: "relative", width: 90, height: 90 }}>

          {/* Pulse ring */}
          <div style={{
            position: "absolute",
            inset: -12,
            borderRadius: "50%",
            border: "1px solid rgba(0,210,200,0.15)",
            animation: "pulseRing 2s ease-in-out infinite",
          }} />

          {/* Outer ring */}
          <div style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "1.5px solid rgba(0,210,200,0.1)",
            borderTopColor: "#00d2c8",
            borderRightColor: "rgba(0,210,200,0.4)",
            animation: "spin 1.2s linear infinite",
          }} />

          {/* Inner ring (reverse) */}
          <div style={{
            position: "absolute",
            inset: 14,
            borderRadius: "50%",
            border: "1.5px solid rgba(0,210,200,0.08)",
            borderBottomColor: "#00d2c8",
            borderLeftColor: "rgba(0,210,200,0.3)",
            animation: "spinReverse 1.8s linear infinite",
          }} />

          {/* Center dot */}
          <div style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <div style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#00d2c8",
              boxShadow: "0 0 12px 3px rgba(0,210,200,0.6)",
            }} />
          </div>
        </div>

        {/* Text block */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
          <span style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "20px",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            background: "linear-gradient(90deg, #e2e8f0, #00d2c8, #e2e8f0)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "shimmer 2.5s linear infinite",
          }}>
            {phase === 1 ? "Ready." : `Loading${dots}`}
          </span>

          <span style={{
            fontSize: "10px",
            color: "#1e4a4a",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}>
            portfolio · asad atik
          </span>
        </div>

        {/* Progress bar */}
        <div style={{
          width: "220px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
        }}>
          {/* Track */}
          <div style={{
            width: "100%",
            height: "2px",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "2px",
            overflow: "hidden",
            position: "relative",
          }}>
            {/* Fill */}
            <div style={{
              height: "100%",
              width: `${progress}%`,
              background: "linear-gradient(90deg, rgba(0,210,200,0.5), #00d2c8)",
              borderRadius: "2px",
              transition: "width 0.1s ease",
              boxShadow: "0 0 8px rgba(0,210,200,0.6)",
              position: "relative",
            }}>
              {/* Glowing tip */}
              <div style={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "#00d2c8",
                boxShadow: "0 0 6px 2px rgba(0,210,200,0.8)",
              }} />
            </div>
          </div>

          {/* Percent */}
          <span style={{
            fontSize: "10px",
            color: "#00d2c8",
            letterSpacing: "0.12em",
            opacity: 0.7,
          }}>
            {progress.toString().padStart(3, "0")}%
          </span>
        </div>
      </div>
    </>
  );
}