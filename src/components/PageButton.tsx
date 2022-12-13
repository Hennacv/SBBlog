import type { PageButton } from "../types";

export function PageButton({ addPage }: PageButton) {
  return (
    <div className="flex flex-col items-center">
      <button
        onClick={addPage}
        className="border-transparent mt-6 h-8 w-48 rounded-[18px] border bg-orange text-xxs text-white shadow-sm"
      >
        Meer laden
      </button>
    </div>
  );
}
