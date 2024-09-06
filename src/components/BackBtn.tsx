"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackBtn() {
  const router = useRouter();

  function handleClick() {
    router.push("/");
  }
  return (
    <button onClick={handleClick} className="back-btn">
      <ArrowLeft className="icon-back" />
    </button>
  );
}
