 type PageButton = {
  addPage: () => void;
}

export function PageButton( {addPage}: PageButton) {

return(
  <div className="flex flex-col items-center">
    <button
      onClick={addPage}
      className="h-8 w-48 mt-6 rounded-[18px] border border-transparent bg-orange text-xxs text-white shadow-sm"
      >
      Meer laden
    </button>
  </div>
)}
