import ky from "ky";
import { useQuery } from "@tanstack/react-query";
import { useFormContext } from "react-hook-form";
import type { Categories } from "../../types";

const TOKEN = process.env.NEXT_PUBLIC_BLOG_TOKEN;

const getCategories = async () =>
  await ky
    .get(`https://frontend-case-api.sbdev.nl/api/categories`, {
      headers: {
        "Content-Type": "application/json",
        token: TOKEN,
      },
    })
    .json();

export function CategoryDropdown() {
  const { register } = useFormContext();
  const { isLoading, isError, data, error } = useQuery(
    ["categories"],
    getCategories,
    {
      refetchOnWindowFocus: false,
    },
  );

  const categories = data as Categories[];

  if (isLoading) {
    return <span>Be patient please...</span>;
  }

  if (isError) {
    return <span>Error: {(error as Error).message}</span>;
  }

  return (
    <div className="col-span-6">
      <label
        htmlFor="categorie"
        className="block text-xxs font-medium text-gray-700"
      >
        Categorie
      </label>
      <div className="mt-[7px]">
        <select
          id="categorie"
          autoComplete="categorie"
          {...register("category_id", { required: true })}
          className="block h-10 w-full border-gray-300 bg-gray-50 px-[18px] py-3 text-xxs font-medium shadow-sm"
        >
          <option>Geen categorie</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
