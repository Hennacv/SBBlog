import { CategoryDropdown } from "./CategoryDropdown";
import { FiCamera } from "react-icons/fi"

export function FormCard() {
    return(
        <form>
          <div className="bg-white m-2.5 p-6 h-[659px]">
            <div>
              <h3 className="mb-6	text-title font-bold text-gray-900">Plaats een blog bericht</h3>
            </div>
            <div className="grid gap-y-6 grid-cols-6">
              {/* Berichtnaam */}
              <div className="col-span-6">
                <label htmlFor="berichtnaam" className="block text-xxs font-medium text-gray-700">
                  Berichtnaam
                </label>
                <div className="mt-[7px]">
                  {/* <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm"/> */}
                  <input
                    type="text"
                    name="berichtnaam"
                    id="berichtnaam"
                    autoComplete="berichtnaam"
                    className="block w-full h-10 pl-[18px] py-3 border-gray-300 shadow-sm bg-gray-50 text-xxs font-medium"
                    placeholder="Geen titel"
                  />
                </div>
              </div>
              {/* Categorie */}
              <CategoryDropdown/>
              {/* Afbeelding */}
              <div className="col-span-6">
                <label htmlFor="photo" className="block text-xxs font-medium text-gray-700">
                  Header afbeelding
                </label>
                <div className="mt-[7px] w-fit h-12 flex items-center bg-gray-50">
                  <FiCamera className="mx-4 my-[18px]" />
                  <button
                    type="button"
                    className="h-6 w-20 my-3 mr-[18px] rounded-[18px] border border-transparent bg-gray-600 font-thin text-[9px] text-white shadow-sm"
                  >
                    Kies bestand
                  </button>
                </div>
              </div>
              {/* Bericht */}
              <div className="col-span-6">
                <label htmlFor="about" className="block text-xxs font-medium text-gray-700">
                  Bericht
                </label>
                <div className="mt-[7px]">
                  <textarea
                    id="bericht"
                    name="bericht"
                    className="block w-full h-[214px] border-gray-300 shadow-sm bg-gray-50 sm:text-sm"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="flex flex-col items-center">
              <button
                // type="submit"
                className="h-8 w-48 mt-6 rounded-[18px] border border-transparent bg-orange text-xxs text-white shadow-sm"
              >
                Bericht aanmaken
              </button>
            </div>

          </div>
        </form>
        );

}