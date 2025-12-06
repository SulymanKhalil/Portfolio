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

      const color =
        getComputedStyle(document.documentElement)
          .getPropertyValue("--highlight-color")
          .trim() || "#f59e0b";

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

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = color;

        for (let i = 0; i < trail.current.length; i++) {
          const p = trail.current[i];
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }

        ctx.stroke();
        ctx.restore();
      }

      if (showBubble.current) {
        ctx.beginPath();
        ctx.arc(
          mouse.current.x,
          mouse.current.y,
          BUBBLE_RADIUS,
          0,
          Math.PI * 2
        );
        ctx.lineWidth = 2;
        ctx.strokeStyle = color;
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
