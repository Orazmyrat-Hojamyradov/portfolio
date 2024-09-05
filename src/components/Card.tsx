// "use client";

// import { CircleUser, Github, Linkedin, Send } from "lucide-react";
// import {
//   cubicBezier,
//   motion,
//   useMotionValue,
//   useSpring,
//   useTransform,
// } from "framer-motion";

// export default function Card() {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const mouseXSpring = useSpring(x);
//   const mouseYSpring = useSpring(y);

//   const rotateX = useTransform(
//     mouseYSpring,
//     [0.5, -0.5, -0.5, -0.5],
//     [20, -20, 20, -20]
//   );
//   const rotateY = useTransform(
//     mouseXSpring,
//     [0.5, -0.5, -0.5, -0.5],
//     [20, -20, 20, -20],
//     {
//       ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
//     }
//   );

//   const handleMouseMove = (event: any) => {
//     const rect = event.target.getBoundingClientRect();

//     const width = rect.width;
//     const height = rect.height;

//     const mouseX = event.clientX - rect.left;
//     const mouseY = event.clientY - rect.top;

//     const xPct = mouseX / width - 0.5;
//     const yPct = mouseY / height - 0.5;

//     x.set(xPct);
//     y.set(yPct);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <motion.div
//       style={{
//         rotateX,
//         rotateY,
//         transformStyle: "preserve-3d",
//       }}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       className="card"
//       key="card"
//     >
//       <CircleUser size={80} />
//       <h1>Orazmyrat Hojamyradov</h1>
//       <h3>Novice front-end developer</h3>
//       <p>
//         Passionate, self-proclaimed developer who specializes in front-end
//         development (React.js). I am very enthusiastic about bringing the
//         technical and visual aspects of digital products to life.
//       </p>
//       <div className="links">
// <div className="icon-wrapper">
//   <Linkedin className="icon" size={30} />
// </div>
// <div className="icon-wrapper">
//   <Github className="icon" size={30} />
// </div>
// <div className="icon-wrapper">
//   <Send className="icon" size={30} />
// </div>
//       </div>
//     </motion.div>
//   );
// }

"use client";

import { CircleUser, Github, Linkedin, Send } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Card() {
  const ref = useRef<HTMLDivElement>(null);
  // Motion values for X and Y axis
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Apply springs for smoother animations
  const xSpring = useSpring(x, { stiffness: 50, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 50, damping: 10 });

  // Apply transformations based on mouse movement
  const rotateX = useTransform(ySpring, [-1, 1], [25, -25]); // Subtle tilt effect for Y axis
  const rotateY = useTransform(xSpring, [-1, 1], [-25, 25]); // Subtle tilt effect for X axis

  // Handle mouse movement to adjust the tilt effect
  const handleMouseMove = (event: any) => {
    if (!ref.current) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const xOffset = (mouseX / rect.width - 0.5) * 2; // Normalized between -1 and 1
    const yOffset = (mouseY / rect.height - 0.5) * 2;

    x.set(xOffset);
    y.set(yOffset);
  };

  const handleTouchMove = (event: any) => {
    if (!ref.current) return; // Ensure ref is not null

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

  // Reset tilt on mouse leave
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  const handleTouchEnd = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        rotateX,
        rotateY,
        perspective: 1000, // Add perspective for 3D depth effect
        transformStyle: "preserve-3d",
        transition: "transform 0.3s ease", // Smooth transition when tilting
      }}
      className="card"
    >
      <motion.div
        style={{
          transform: "translateZ(50px)", // Add depth to the content
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
          <div className="icon-wrapper">
            <Linkedin className="icon" size={30} />
          </div>
          <div className="icon-wrapper">
            <Github className="icon" size={30} />
          </div>
          <div className="icon-wrapper">
            <Send className="icon" size={30} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
