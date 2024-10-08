"use client";

import BackBtn from "@/components/BackBtn";
import { Copy, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Contacts() {
  return (
    <>
      <div className="header">
        <BackBtn />
        <h1>Contacts</h1>
      </div>
      <div className="contact-box">
        <motion.div
          initial={{ x: "50%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "0%" }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
          className="contacts"
        >
          <Mail className="copy-icon" size={36} />
          <span>oraz62909@gmail.com</span>
          <Copy
            size={36}
            className="copy-icon"
            onClick={() => {
              navigator.clipboard.writeText("oraz62909@gmail.com");
            }}
          />
        </motion.div>
        <motion.div
          initial={{ x: "50%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "0%" }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
            delay: 0.1,
          }}
          className="contacts"
        >
          <Phone className="copy-icon" size={36} />
          <span>+993 71 360034</span>
          <Copy
            size={36}
            className="copy-icon"
            onClick={() => {
              navigator.clipboard.writeText("+99371360034");
            }}
          />
        </motion.div>
      </div>
    </>
  );
}
