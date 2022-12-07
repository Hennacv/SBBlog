export function FormCard() {
    return(
        <form>
          <div className="w-1/2 bg-white p-6">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">Plaats een blog bericht</h3>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label htmlFor="berichtnaam" className="block text-sm font-medium text-gray-700">
                  Berichtnaam
                </label>
                <div className="mt-1">
                  {/* <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm"/> */}
                  <input
                    type="text"
                    name="berichtnaam"
                    id="berichtnaam"
                    autoComplete="berichtnaam"
                    className="block w-full h-10 border-gray-300 shadow-sm bg-gray-50 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
              <label htmlFor="categorie" className="block text-sm font-medium text-gray-700">
                Categorie
              </label>
              <div className="mt-1">
                <select
                  id="categorie"
                  name="categorie"
                  autoComplete="categorie"
                  className="block w-full h-10 border-gray-300 shadow-sm bg-gray-50 sm:text-sm"
                >
                  <option>Fun</option>
                </select>
              </div>
            </div>

              <div className="sm:col-span-6">
                <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                  Header afbeelding
                </label>
                <div className="mt-1 flex items-center">
                  <p> cam</p>
                  <button
                    type="button"
                    className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50"
                  >
                    Kies bestand
                  </button>
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                  Bericht
                </label>
                <div className="mt-1">
                  <textarea
                    id="bericht"
                    name="bericht"
                    className="block w-full h-52 border-gray-300 shadow-sm bg-gray-50 sm:text-sm"
                    defaultValue={''}
                  />
                </div>
              </div>

              <div className="sm:col-span-4 sm:col-start-2">
                  <button
                    // type="submit"
                    className="inline-flex w-48 justify-center rounded-md border border-transparent bg-orange py-2 px-4 text-sm font-medium text-white shadow-sm"
                  >
                    Bericht aanmaken
                  </button>
                </div>

            </div>
          </div>
        </form>
        );

}