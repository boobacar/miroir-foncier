import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X, Phone, Mail, Globe, Code2 } from "lucide-react";

export default function DevSignatureModal({ open = true, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const onEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onEsc);
    // lock background scroll
    const prev = {
      overflowB: document.body.style.overflow,
      overflowR: document.documentElement.style.overflow,
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      right: document.body.style.right,
      width: document.body.style.width,
      overscroll: document.body.style.overscrollBehaviorY,
    };
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overscrollBehaviorY = "contain";
    return () => {
      window.removeEventListener("keydown", onEsc);
      document.body.style.overflow = prev.overflowB;
      document.documentElement.style.overflow = prev.overflowR;
      const y = Math.abs(parseInt(document.body.style.top || "0"));
      document.body.style.position = prev.position;
      document.body.style.top = prev.top;
      document.body.style.left = prev.left;
      document.body.style.right = prev.right;
      document.body.style.width = prev.width;
      document.body.style.overscrollBehaviorY = prev.overscroll;
      if (y) window.scrollTo(0, y);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div className="min-h-dvh grid place-items-center px-4 py-6 pb-[env(safe-area-inset-bottom)]">
        <div
          ref={ref}
          role="dialog"
          aria-modal="true"
          className="relative bg-white rounded-2xl shadow-2xl ring-1 ring-black/5 w-full max-w-md p-6 max-h-[85svh] overflow-auto overscroll-contain mx-auto"
        >
          <button
            onClick={onClose}
            aria-label="Fermer"
            className="absolute right-2 top-2 p-2 rounded-lg hover:bg-gray-100"
          >
            <X size={18} className="text-slate-500" />
          </button>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-amber-100/50 grid place-items-center">
              <Code2 size={28} className="text-[#c2b5a9]" />
            </div>
            <h3 className="mt-3 text-lg font-bold text-[#c2b5a9]">
              Fallcon Tech
            </h3>
            <div className="mt-5 space-y-3 text-slate-700">
              <a
                href="tel:+221776260020"
                className="inline-flex items-center gap-3 hover:text-[#c2b5a9]"
              >
                <Phone size={18} className="text-[#c2b5a9]" />
                <span>+221 77 626 00 20</span>
              </a>
              <div>
                <a
                  href="mailto:info@fallcontech.com"
                  className="inline-flex items-center gap-3 hover:text-[#c2b5a9]"
                >
                  <Mail size={18} className="text-[#c2b5a9]" />
                  <span>info@fallcontech.com</span>
                </a>
              </div>
              <div>
                <a
                  href="https://www.fallcontech.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 hover:text-[#c2b5a9]"
                >
                  <Globe size={18} className="text-[#c2b5a9]" />
                  <span>www.fallcontech.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
