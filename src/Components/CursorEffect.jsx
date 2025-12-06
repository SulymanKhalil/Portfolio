import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 20;
const BUBBLE_RADIUS = 14;
const GAP = 6;

export default function CursorEffect() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const trail = useRef([]);
  const rafRef = useRef(null);
  const hasMoved = useRef(false);
  const isTouching = useRef(false);
  const showBubble = useRef(false);
  const ignoreMouseUntil = useRef(0);
  const tRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = "100vw";
      canvas.style.height = "100vh";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMove = (e) => {
      if (Date.now() < ignoreMouseUntil.current) return;

      showBubble.current = true;
      hasMoved.current = true;

      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      trail.current.push({ x: e.clientX, y: e.clientY });
      if (trail.current.length > TRAIL_LENGTH) trail.current.shift();
    };

    const handleTouchStart = (e) => {
      ignoreMouseUntil.current = Date.now() + 1000;
      const t = e.touches[0];
      isTouching.current = true;
      showBubble.current = true;
      hasMoved.current = false;
      trail.current = [];
      mouse.current.x = t.clientX;
      mouse.current.y = t.clientY;
    };

    const handleTouchMove = (e) => {
      if (!isTouching.current) return;
      const t = e.touches[0];
      hasMoved.current = true;
      mouse.current.x = t.clientX;
      mouse.current.y = t.clientY;
      trail.current.push({ x: t.clientX, y: t.clientY });
      if (trail.current.length > TRAIL_LENGTH) trail.current.shift();
    };

    const handleTouchEnd = () => {
      ignoreMouseUntil.current = Date.now() + 1000;
      isTouching.current = false;
      showBubble.current = false;
      hasMoved.current = false;
      trail.current = [];
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("touchcancel", handleTouchEnd, { passive: true });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      tRef.current += 0.04;

      const color =
        getComputedStyle(document.documentElement)
          .getPropertyValue("--highlight-color")
          .trim() || "#f59e0b";

      const neonPulse = 8 + Math.sin(tRef.current) * 6;

      if (hasMoved.current && trail.current.length > 1) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.arc(
          mouse.current.x,
          mouse.current.y,
          BUBBLE_RADIUS + GAP,
          0,
          Math.PI * 2,
          true
        );
        ctx.clip("evenodd");

        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.shadowBlur = neonPulse;
        ctx.shadowColor = color;

        const grad = ctx.createLinearGradient(
          trail.current[0].x,
          trail.current[0].y,
          mouse.current.x,
          mouse.current.y
        );
        grad.addColorStop(0, color + "00");
        grad.addColorStop(0.5, color + "aa");
        grad.addColorStop(1, color);
        ctx.strokeStyle = grad;

        ctx.beginPath();
        for (let i = 0; i < trail.current.length; i++) {
          const p = trail.current[i];
          const k = i / trail.current.length;
          ctx.lineWidth = 1 + k * (3 + Math.sin(tRef.current + i) * 1.2);
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
        ctx.restore();
      }

      if (showBubble.current) {
        const wobble = Math.sin(tRef.current * 1.5) * 1.5;
        const r = BUBBLE_RADIUS + wobble;

        const bubbleGrad = ctx.createRadialGradient(
          mouse.current.x,
          mouse.current.y,
          r * 0.2,
          mouse.current.x,
          mouse.current.y,
          r * 1.4
        );
        bubbleGrad.addColorStop(0, color + "33");
        bubbleGrad.addColorStop(0.6, color + "99");
        bubbleGrad.addColorStop(1, color);

        ctx.beginPath();
        ctx.arc(mouse.current.x, mouse.current.y, r, 0, Math.PI * 2);
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = bubbleGrad;
        ctx.shadowBlur = neonPulse + 4;
        ctx.shadowColor = color;
        ctx.stroke();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", resize);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    />
  );
}