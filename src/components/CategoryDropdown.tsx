import ky from 'ky';
import { useQuery } from "@tanstack/react-query";
// import { Listbox, Transition } from "@headlessui/react"
// import { HiCheck, HiChevronDown } from "react-icons/hi"
// import { Fragment, useState } from 'react'

const TOKEN = process.env.NEXT_PUBLIC_BLOG_TOKEN;

type Categories = {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

const getCategories = async () => await ky.get(`https://frontend-case-api.sbdev.nl/api/categories`, {
    headers: {
        'content-type': 'application/json',
        "token": TOKEN
    }
}).json();

// type ClassNames = string[];

// function classNames(...classes: ClassNames) {
//     return classes.filter(Boolean).join(' ')
//   }

export function CategoryDropdown() {

    const { isLoading, isError, data, error } = useQuery(['categories'], getCategories,
        {
        refetchOnWindowFocus: false,
    })

    const categories = data as Categories[];
    // const [selected, setSelected] = useState(categories)

    if (isLoading) {
    return <span>Be patient please...</span>
    }

    if (isError) {
    return <span>Error: {(error as Error).message}</span>
    }


    console.log({categories})

    return(
    //     <Listbox value={selected} onChange={setSelected}>
    //         <Listbox.Label className="block text-sm font-medium text-gray-700">Assigned to</Listbox.Label>
    //         <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
    //           <span className="block truncate">{selected.name}</span>
    //           <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
    //             <HiChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
    //           </span>
    //         </Listbox.Button>

    //         <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
    //             {categories.map((category) => (
    //               <Listbox.Option
    //                 key={category.id}
    //                 value={category}
    //                 as={Fragment}
    //               >
    //                 {({ selected, active }) => (
    //                   <li>
    //                     <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
    //                       {category.name}
    //                     </span>

    //                     {selected ? (
    //                       <span
    //                         className={classNames(
    //                           active ? 'text-white' : 'text-indigo-600',
    //                           'absolute inset-y-0 right-0 flex items-center pr-4'
    //                         )}
    //                       >
    //                         <HiCheck className="h-5 w-5" aria-hidden="true" />
    //                       </span>
    //                     ) : null}
    //                   </li>
    //                 )}
    //               </Listbox.Option>
    //             ))}
    //           </Listbox.Options>
    // </Listbox>
        <div className="col-span-6">
            <label htmlFor="categorie" className="block text-xxs font-medium text-gray-700">
            Categorie
            </label>
            <div className="mt-[7px]">
                <select
                    id="categorie"
                    name="categorie"
                    autoComplete="categorie"
                    className="block w-full h-10 px-[18px] py-3 border-gray-300 shadow-sm bg-gray-50 text-xxs font-medium"
                >
                    <option>Geen categorie</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.name}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
        )
}
