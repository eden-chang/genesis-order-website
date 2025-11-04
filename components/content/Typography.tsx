import { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export function H1({ children, className = "" }: TypographyProps) {
  return (
    <h1 className={`section-title mb-6 ${className}`}>
      {children}
    </h1>
  );
}

export function H2({ children, className = "" }: TypographyProps) {
  return (
    <h2 className={`font-heading text-2xl md:text-3xl font-bold text-yellow-400 mb-4 ${className}`}>
      {children}
    </h2>
  );
}

export function H3({ children, className = "" }: TypographyProps) {
  return (
    <h3 className={`font-heading text-xl md:text-2xl font-bold text-yellow-300 mb-3 ${className}`}>
      {children}
    </h3>
  );
}

export function Paragraph({ children, className = "" }: TypographyProps) {
  return (
    <p className={`document-content mb-4 ${className}`}>
      {children}
    </p>
  );
}
