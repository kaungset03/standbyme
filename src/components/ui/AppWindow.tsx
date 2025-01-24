import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

type AppWindowProps = {
  children: React.ReactNode;
  title: string;
  bringToFront: () => number;
  closeWindow: (title: string) => void;
};

const AppWindow = ({
  title,
  children,
  bringToFront,
  closeWindow,
}: AppWindowProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [zIndex, setZIndex] = useState(1);

  const ref = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const newZIndex = bringToFront();
    setZIndex(newZIndex);
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
    setIsDragging(false);
  };

  const handleClose = () => {
    closeWindow(title);
  };

  useEffect(() => {
    if (ref.current) {
      const elementWidth = ref.current.offsetWidth;

      const windowWidth = window.innerWidth;

      setPosition({
        x: (windowWidth - elementWidth) / 2,
        y: 100,
      });
    }
  }, []);

  return (
    <section
      style={{ left: position.x, top: position.y, zIndex }}
      className="absolute bg-background border-2 border-textPrimary shadow-window rounded-lg flex flex-col z-10"
      ref={ref}
    >
      <div
        className="cursor-move flex justify-between items-center py-2 px-3 bg-card rounded-t-md border-b-2 border-b-textPrimary"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
      >
        <h2 className="font-semibold w-fit">{title}</h2>
        <button className="p-1 border-2 border-textPrimary" aria-label="Close" onClick={handleClose}>
          <X size={18} />
        </button>
      </div>
      {children}
    </section>
  );
};

export default AppWindow;
