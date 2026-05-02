"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "@/lib/motion";
import { Search, ChevronDown, X, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SearchSelectOption {
  value: string;
  label: string;
  sub?: string;
  badgeColor?: string;
  badge?: string;
  suggested?: boolean;
  group?: string;
  description?: string;
}

interface SearchSelectProps {
  value: string;
  options: SearchSelectOption[];
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  triggerBadge?: { text: string; color: string } | null;
  preferUp?: boolean;
}

export function SearchSelect({
  value,
  options,
  onChange,
  placeholder = "Select…",
  disabled = false,
  className,
  triggerBadge,
  preferUp = false,
}: SearchSelectProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const triggerRef = useRef<HTMLButtonElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [highlightIdx, setHighlightIdx] = useState(0);

  // ── Positioning: direct DOM mutation, zero React lag ──
  useEffect(() => {
    if (!open) return;

    const position = () => {
      const trigger = triggerRef.current;
      const wrapper = wrapperRef.current;
      if (!trigger || !wrapper) return;

      const rect = trigger.getBoundingClientRect();
      const width = Math.max(rect.width, 280);
      const leftOffset = (width - rect.width) / 2;
      let left = rect.left - leftOffset;
      if (left < 8) left = 8;
      if (left + width > window.innerWidth - 8)
        left = window.innerWidth - 8 - width;

      const spaceBelow = window.innerHeight - rect.bottom - 8;
      const spaceAbove = rect.top - 8;
      const openAbove = preferUp
        ? spaceAbove > 100
        : spaceBelow < 200 && spaceAbove > spaceBelow;
      const maxH = Math.min(280, openAbove ? spaceAbove : spaceBelow);

      wrapper.style.position = "fixed";
      wrapper.style.zIndex = "9999";
      wrapper.style.left = `${left}px`;
      wrapper.style.width = `${width}px`;
      wrapper.style.height = `${maxH}px`;
      wrapper.style.overflow = "hidden";

      if (openAbove) {
        wrapper.style.top = "auto";
        wrapper.style.bottom = `${window.innerHeight - rect.top + 4}px`;
      } else {
        wrapper.style.bottom = "auto";
        wrapper.style.top = `${rect.bottom + 4}px`;
      }
    };

    // Position immediately, then keep synced via rAF on scroll/resize
    position();

    let rafId = 0;
    const onScrollResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(position);
    };

    window.addEventListener("scroll", onScrollResize, true);
    window.addEventListener("resize", onScrollResize);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScrollResize, true);
      window.removeEventListener("resize", onScrollResize);
    };
  }, [open, preferUp]);

  // Filter options
  const filtered = search
    ? options.filter(
        (o) =>
          o.label.toLowerCase().includes(search.toLowerCase()) ||
          (o.sub && o.sub.toLowerCase().includes(search.toLowerCase())) ||
          (o.badge && o.badge.toLowerCase().includes(search.toLowerCase()))
      )
    : options;

  // Close on click outside
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (
        triggerRef.current &&
        !triggerRef.current.contains(target) &&
        wrapperRef.current &&
        !wrapperRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  // Focus input on open
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 0);
      setSearch("");
      setHighlightIdx(0);
    }
  }, [open]);

  // Scroll highlighted into view
  useEffect(() => {
    if (!open || !listRef.current) return;
    const el = listRef.current.children[highlightIdx] as HTMLElement;
    if (el) el.scrollIntoView({ block: "nearest" });
  }, [highlightIdx, open]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlightIdx((i) => Math.min(i + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlightIdx((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filtered[highlightIdx]) {
          onChange(filtered[highlightIdx].value);
          setOpen(false);
        }
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    },
    [filtered, highlightIdx, onChange]
  );

  const selected = options.find((o) => o.value === value);

  return (
    <div className={cn("relative", className)}>
      {/* Trigger button */}
      <button
        ref={triggerRef}
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setOpen(!open)}
        className={cn(
          "w-full flex items-center gap-2 px-3 py-2 rounded-lg text-[12px] font-medium border transition-all text-left",
          disabled
            ? "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300 cursor-pointer",
          open && "ring-1 ring-violet-400 border-violet-300",
          !value && !disabled && "border-dashed border-gray-300"
        )}
      >
        <span
          className={cn(
            "flex-1 truncate",
            !selected && "text-muted-foreground"
          )}
        >
          {selected ? selected.label : placeholder}
        </span>
        {triggerBadge && (
          <span
            className="px-1.5 py-0.5 text-[8px] font-bold uppercase rounded text-white/90"
            style={{ backgroundColor: triggerBadge.color }}
          >
            {triggerBadge.text}
          </span>
        )}
        <ChevronDown
          className={cn(
            "w-3.5 h-3.5 text-muted-foreground shrink-0 transition-transform",
            open && "rotate-180"
          )}
        />
      </button>

      {/* Portal dropdown — renders at document root to escape modal overflow */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {open && (
              <div ref={wrapperRef}>
                <motion.div
                  initial={{ opacity: 0, y: -4, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -4, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="bg-white rounded-xl border border-gray-200 shadow-2xl shadow-black/20 overflow-hidden flex flex-col w-full h-full"
                  onKeyDown={handleKeyDown}
                >
                  {/* Search input */}
                  <div className="sticky top-0 bg-white border-b border-gray-100 p-2.5">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        ref={inputRef}
                        type="text"
                        value={search}
                        onChange={(e) => {
                          setSearch(e.target.value);
                          setHighlightIdx(0);
                        }}
                        onKeyDown={handleKeyDown}
                        placeholder="Search…"
                        className="w-full pl-9 pr-8 py-2 text-sm rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-violet-300 focus:border-violet-300"
                      />
                      {search && (
                        <button
                          onClick={() => {
                            setSearch("");
                            inputRef.current?.focus();
                          }}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2"
                        >
                          <X className="w-3.5 h-3.5 text-muted-foreground hover:text-gray-600" />
                        </button>
                      )}
                    </div>
                    {search && (
                      <p className="text-[10px] text-muted-foreground mt-1.5 px-1">
                        {filtered.length} result
                        {filtered.length !== 1 ? "s" : ""}
                      </p>
                    )}
                  </div>

                  {/* Options list */}
                  <div ref={listRef} className="overflow-y-auto flex-1 min-h-0">
                    {filtered.length === 0 ? (
                      <p className="text-center text-xs text-muted-foreground py-8">
                        No matches
                      </p>
                    ) : (
                      filtered.map((opt, i) => {
                        const isSelected = opt.value === value;
                        const isHighlighted = i === highlightIdx;
                        return (
                          <div key={opt.value}>
                            <button
                              type="button"
                              onMouseEnter={() => setHighlightIdx(i)}
                              onClick={() => {
                                onChange(opt.value);
                                setOpen(false);
                              }}
                              className={cn(
                                "w-full flex items-center gap-2.5 px-3 py-2.5 text-left text-sm transition-colors",
                                isHighlighted && "bg-violet-50",
                                isSelected && "bg-violet-100/70 font-semibold"
                              )}
                            >
                              <div className="w-4 shrink-0">
                                {isSelected && (
                                  <Check className="w-4 h-4 text-violet-600" />
                                )}
                              </div>
                              {opt.badge && (
                                <span
                                  className="px-1.5 py-0.5 text-[9px] font-bold uppercase rounded text-white/90 shrink-0"
                                  style={{
                                    backgroundColor: opt.badgeColor || "#888",
                                  }}
                                >
                                  {opt.badge}
                                </span>
                              )}
                              <div className="flex-1 min-w-0">
                                <span className="truncate block">
                                  {opt.label}
                                </span>
                                {opt.sub && (
                                  <span className="flex flex-wrap items-center gap-1 mt-0.5">
                                    {opt.sub.split(" · ").map((token, ti) => {
                                      const lower = token.toLowerCase();
                                      if (lower === "physical")
                                        return (
                                          <span
                                            key={ti}
                                            className="text-[9px] font-extrabold text-orange-500"
                                          >
                                            ⚔ Phys
                                          </span>
                                        );
                                      if (lower === "special")
                                        return (
                                          <span
                                            key={ti}
                                            className="text-[9px] font-extrabold text-indigo-500"
                                          >
                                            ✦ Spec
                                          </span>
                                        );
                                      if (lower === "status")
                                        return (
                                          <span
                                            key={ti}
                                            className="text-[9px] font-extrabold text-gray-400"
                                          >
                                            ◇ Status
                                          </span>
                                        );
                                      return (
                                        <span
                                          key={ti}
                                          className="text-[9px] text-muted-foreground"
                                        >
                                          {token}
                                        </span>
                                      );
                                    })}
                                  </span>
                                )}
                                {opt.description && (
                                  <p className="text-[10px] leading-snug font-medium italic text-muted-foreground mt-1 pb-0.5 border-b border-dashed border-gray-200 dark:border-white/10">
                                    {opt.description}
                                  </p>
                                )}
                              </div>
                              {opt.suggested && (
                                <span className="text-[10px] text-amber-500 font-bold shrink-0">
                                  ★
                                </span>
                              )}
                            </button>
                          </div>
                        );
                      })
                    )}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}
