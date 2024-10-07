"use client";

import { CircleUser, Github, Linkedin, Send } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function Card() {
  const ref = useRef<HTMLDivElement>(null);
  const [shinePos, setShinePos] = useState({ x: 50, y: 50 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 50, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 50, damping: 10 });

  const rotateX = useTransform(ySpring, [-1, 1], [25, -25]);
  const rotateY = useTransform(xSpring, [-1, 1], [-25, 25]);

  const handleMouseMove = (event: any) => {
    if (!ref.current) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const xOffset = (mouseX / rect.width - 0.5) * 2;
    const yOffset = (mouseY / rect.height - 0.5) * 2;

    x.set(xOffset);
    y.set(yOffset);

    setShinePos({
      x: (mouseX / rect.width) * 100,
      y: (mouseY / rect.height) * 100,
    });
  };

  const handleTouchMove = (event: any) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const touch = event.touches[0];

    const width = rect.width;
    const height = rect.height;

    const touchX = touch.clientX - rect.left;
    const touchY = touch.clientY - rect.top;

    const xPct = (touchX / width - 0.5) * 2;
    const yPct = (touchY / height - 0.5) * 2;

    x.set(xPct);
    y.set(yPct);

    setShinePos({ x: (touchX / width) * 100, y: (touchY / height) * 100 });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setShinePos({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchMove}
      onMouseUp={handleMouseLeave}
      onMouseLeave={handleMouseLeave}
      onTouchEnd={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        perspective: 1000,
        transformStyle: "preserve-3d",
        transition: "transform 0.15s ease",
      }}
      className="card"
    >
      <motion.div className="card-content">
        <div
          className="shine"
          style={{
            background: `radial-gradient(circle at ${shinePos.x}% ${shinePos.y}%, rgba(255, 255, 255, 0.2), transparent 65%)`,
          }}
        />

        <CircleUser size={80} />
        <h1>Orazmyrat Hojamyradov</h1>
        <h3>Novice front-end developer</h3>
        <p>
          Passionate, self-proclaimed developer who specializes in front-end
          development (React.js). I am very enthusiastic about bringing the
          technical and visual aspects of digital products to life.
        </p>
        <div className="links">
          <a
            target="_blank"
            href="https://github.com/Orazmyrat-Hojamyradov"
            className="icon-wrapper"
          >
            <Github className="icon" size={30} />
          </a>
          <a
            target="_blank"
            href="https://t.me/Orazgone"
            className="icon-wrapper"
          >
            <Send className="icon" size={30} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
