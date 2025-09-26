"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const ScreenOverlay = ({ offsetTop = 0, onClick, zIndex }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed left-0 transition-all duration-500 w-full backdrop-blur-[9px] bg-black/80 bg-no-repeat bg-origin-padding bg-clip-padding"
      style={{
        top: `${offsetTop}px`,
        height: `calc(100vh - ${offsetTop}px)`,
        zIndex: zIndex,
      }}
      onClick={onClick}
    />,
    document.body
  );
};

export default ScreenOverlay;
