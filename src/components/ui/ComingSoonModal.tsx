"use client";

import { X } from "lucide-react";

type ComingSoonModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ComingSoonModal({
  isOpen,
  onClose,
}: ComingSoonModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Coming Soon"
        onClick={(event) => event.stopPropagation()}
        className="relative w-full max-w-xs rounded-2xl bg-white px-6 py-8 shadow-xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
        <p className="text-center text-lg font-bold text-neutral-900">
          Coming Soon
        </p>
      </div>
    </div>
  );
}
