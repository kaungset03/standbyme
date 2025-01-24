import React, { useRef, useState } from "react";
import { X } from "lucide-react";

type AppWindowProps = {
  children: React.ReactNode;
  title: string;
};

const AppWindow = ({ title, children }: AppWindowProps) => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (!isDragging) return;

    const newX = e.clientX - offset.x;
    const newY = e.clientY - offset.y;

    const maxX = window.innerWidth - ref.current!.offsetWidth;
    const maxY = window.innerHeight - ref.current!.offsetHeight;

    setPosition({
      x: Math.min(Math.max(newX, 0), maxX),
      y: Math.min(Math.max(newY, 0), maxY),
    });
  };

  const handleMouseUp = () => {
    console.log("mouseup");
    setIsDragging(false);
  };

  return (
    <section
      style={{ left: position.x, top: position.y }}
      className="absolute bg-background border-2 border-textPrimary shadow-window rounded-lg flex flex-col z-10"
      ref={ref}
    >
      <div
        className="cursor-move flex justify-between items-center py-2 px-3 bg-card rounded-t-md border-b-2 border-b-textPrimary"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseLeave={handleMouseUp}
      >
        <h2 className="font-semibold w-fit">{title}</h2>
        <button className="p-1 border-2 border-textPrimary" aria-label="Close">
          <X size={18} />
        </button>
      </div>
      {children}
    </section>
  );
};

export default AppWindow;
