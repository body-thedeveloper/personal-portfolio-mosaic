
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        const target = e.target as HTMLElement;
        setIsPointer(window.getComputedStyle(target).cursor === "pointer");
      });
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${
          isPointer ? 1.5 : 1
        })`,
      }}
    />
  );
};

export default CustomCursor;
