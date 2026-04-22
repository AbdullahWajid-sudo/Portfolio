"use client";

import { useEffect, useState, useRef } from "react";

interface AnimatedProgressProps {
  targetWidth: number;
  color: string;
  duration?: number;
}

export function AnimatedProgress({
  targetWidth,
  color,
  duration = 1500,
}: AnimatedProgressProps) {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setIsVisible(true);
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = targetWidth / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetWidth) {
        setWidth(targetWidth);
        clearInterval(timer);
      } else {
        setWidth(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, targetWidth, duration]);

  return (
    <div ref={containerRef} className="w-full bg-surface-container-low rounded-full h-2">
      <div
        className="h-2 rounded-full transition-all duration-300"
        style={{ width: `${width}%`, backgroundColor: color }}
      />
    </div>
  );
}