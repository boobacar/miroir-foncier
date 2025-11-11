import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export default function PdfViewerModal({ open, onClose, src, title }) {
  useEffect(() => {
    if (!open) return;
    const onEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);

    // lock background scroll while modal open
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onEsc);
      document.documentElement.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[10000]">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="min-h-dvh grid place-items-center p-4">
        <div className="relative bg-white w-full max-w-5xl h-[85svh] rounded-xl shadow-2xl overflow-hidden">
          <header className="flex items-center justify-between px-4 py-3 border-b">
            <h3 className="font-semibold text-[#6b5f55] truncate pr-4">{title}</h3>
            <button
              aria-label="Fermer"
              onClick={onClose}
              className="rounded-lg p-2 hover:bg-gray-100"
            >
              <X size={18} className="text-slate-600" />
            </button>
          </header>
          <div className="w-full h-[calc(100%-52px)] bg-gray-50">
            {/* Browser PDF viewer */}
            <iframe
              title={title}
              src={`${src}#toolbar=1&navpanes=0&scrollbar=1&view=fitH`}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

