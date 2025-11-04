"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FootnoteProps {
  term: string;
  description: string;
}

export default function Footnote({ term, description }: FootnoteProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <span className="relative inline-block">
      <span
        className="footnote-term"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
      >
        {term}
      </span>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-primary-highlight text-sm text-[#0b0b0b] rounded-lg shadow-lg border-2 border-primary whitespace-nowrap max-w-xs"
          >
            {description}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-primary-highlight" />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
