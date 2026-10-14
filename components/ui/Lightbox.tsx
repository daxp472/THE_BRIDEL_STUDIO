"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { GalleryItem } from "@/lib/gallery-data";
import { useLanguage } from "@/context/LanguageContext";

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const { language } = useLanguage();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        onNavigate((currentIndex + 1) % items.length);
      } else if (e.key === "ArrowLeft") {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
    },
    [currentIndex, items.length, onClose, onNavigate]
  );

  useEffect(() => {
    if (currentIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, handleKeyDown]);

  if (currentIndex === null || !items[currentIndex]) {
    return null;
  }

  const currentItem = items[currentIndex];
  const title = language === "gu" ? currentItem.titleGu : currentItem.titleEn;
  const caption =
    language === "gu" ? currentItem.captionGu : currentItem.captionEn;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-6 backdrop-blur-xs"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image lightbox"
        className="absolute top-4 right-4 z-50 p-2 text-stone-300 hover:text-white transition-colors"
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Prev button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex - 1 + items.length) % items.length);
        }}
        aria-label="Previous image"
        className="absolute left-3 sm:left-6 z-50 p-3 text-stone-300 hover:text-white transition-colors"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex + 1) % items.length);
        }}
        aria-label="Next image"
        className="absolute right-3 sm:right-6 z-50 p-3 text-stone-300 hover:text-white transition-colors"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Image container */}
      <div
        className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[60vh] sm:h-[70vh] flex items-center justify-center bg-stone-950/40">
          <Image
            src={currentItem.src}
            alt={currentItem.alt}
            fill
            sizes="(max-width: 768px) 100vw, 90vw"
            className="object-contain"
            priority
          />
        </div>

        {/* Text information */}
        <div className="w-full text-center mt-3 px-4">
          <p className="text-white font-serif text-lg sm:text-xl tracking-wide">
            {title}
          </p>
          <p className="text-stone-300 text-xs sm:text-sm mt-1 max-w-xl mx-auto">
            {caption}
          </p>
          <p className="text-stone-500 text-xs mt-1.5 font-mono">
            {currentIndex + 1} / {items.length}
          </p>
        </div>
      </div>
    </div>
  );
}
