"use client";

import { useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface StatSliderProps {
  value: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  color?: string;
  disabled?: boolean;
}

export function StatSlider({ value, max, step = 2, onChange, color = "#10b981", disabled }: StatSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const pct = max > 0 ? (value / max) * 100 : 0;

  const computeValueFromClientX = useCallback((clientX: number) => {
    const track = trackRef.current;
    if (!track) return value;
    const rect = track.getBoundingClientRect();
    const raw = (clientX - rect.left) / rect.width;
    const clamped = Math.max(0, Math.min(1, raw));
    const newValue = Math.round((clamped * max) / step) * step;
    return Math.max(0, Math.min(max, newValue));
  }, [max, step, value]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (disabled) return;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    isDragging.current = true;
    const newValue = computeValueFromClientX(e.clientX);
    if (newValue !== value) onChange(newValue);
  }, [disabled, computeValueFromClientX, value, onChange]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current || disabled) return;
    const newValue = computeValueFromClientX(e.clientX);
    if (newValue !== value) onChange(newValue);
  }, [disabled, computeValueFromClientX, value, onChange]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <div
      ref={trackRef}
      className={cn(
        "flex-1 h-2 rounded-full relative cursor-pointer select-none",
        disabled && "opacity-50 cursor-not-allowed"
      )}
      style={{ backgroundColor: "#f3f4f6" }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {/* Fill */}
      <div
        className="absolute top-0 left-0 h-full rounded-full pointer-events-none"
        style={{ width: `${pct}%`, backgroundColor: value === 0 ? "transparent" : color }}
      />
      {/* Thumb */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 shadow-md pointer-events-none"
        style={{
          left: `${pct}%`,
          borderColor: value === 0 ? "#d1d5db" : color,
        }}
      />
    </div>
  );
}
