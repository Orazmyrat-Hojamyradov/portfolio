"use client";

import { CircleUser, Github, Linkedin, Send } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Card() {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Apply springs for smoother animations
  const xSpring = useSpring(x, { stiffness: 50, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 50, damping: 10 });

  // Apply transformations based on mouse movement
  const rotateX = useTransform(ySpring, [-1, 1], [25, -25]);
  const rotateY = useTransform(xSpring, [-1, 1], [-25, 25]);

  // Handle mouse movement to adjust the tilt effect
  const handleMouseMove = (event: any) => {
    if (!ref.current) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const xOffset = (mouseX / rect.width - 0.5) * 2;
    const yOffset = (mouseY / rect.height - 0.5) * 2;

    x.set(xOffset);
    y.set(yOffset);
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
  };

  // Reset motion values to initial position
  const handleMouseUp = () => {
    x.set(0);
    y.set(0);
  };

  const handleTouchEnd = () => {
    x.set(0);
    y.set(0);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseDown={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        rotateX,
        rotateY,
        perspective: 1000,
        transformStyle: "preserve-3d",
        transition: "transform 0.15s ease",
      }}
      className="card"
    >
      <motion.div
        style={{
          transform: "translateZ(50px)",
        }}
        className="card-content"
      >
        <CircleUser size={80} />
        <h1>Orazmyrat Hojamyradov</h1>
        <h3>Novice front-end developer</h3>
        <p>
          Passionate, self-proclaimed developer who specializes in front-end
          development (React.js). I am very enthusiastic about bringing the
          technical and visual aspects of digital products to life.
        </p>
        <div className="links">
          {/* <a
            target="_blank"
            href="https://www.linkedin.com/in/oraz-hojamyradov-59827a327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="icon-wrapper"
          >
            <Linkedin className="icon" size={30} />
          </a> */}
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
