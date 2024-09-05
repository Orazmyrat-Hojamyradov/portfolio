"use client";

import { Copy, Mail, Phone } from "lucide-react";
import { Suspense } from "react";
export default function Contacts() {
  return (
    <div className="contact-box">
      <h2>Contacts</h2>
      <Suspense>
        <div className="contacts">
          <Mail className="copy-icon" size={36} />
          <span>oraz62909@gmail.com</span>
          <Copy
            size={36}
            className="copy-icon"
            onClick={() => {
              navigator.clipboard.writeText("oraz62909@gmail.com");
            }}
          />
        </div>
        <div className="contacts">
          <Phone className="copy-icon" size={36} />
          <span>+993 71360034</span>
          <Copy
            size={36}
            className="copy-icon"
            onClick={() => {
              navigator.clipboard.writeText("+993 71360034");
            }}
          />
        </div>
      </Suspense>
    </div>
  );
}
