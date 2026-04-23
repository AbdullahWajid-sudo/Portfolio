"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface CertModalContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const CertModalContext = createContext<CertModalContextType | undefined>(undefined);

export function CertModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <CertModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </CertModalContext.Provider>
  );
}

export function useCertModal() {
  const context = useContext(CertModalContext);
  if (!context) {
    throw new Error("useCertModal must be used within CertModalProvider");
  }
  return context;
}