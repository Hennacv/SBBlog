import { useFormContext } from "react-hook-form";

export function PostTitle() {
  const { register } = useFormContext();
  return (
    <div className="col-span-6">
      <label className="block text-xxs font-medium text-gray-700">
        Berichtnaam
      </label>
      <div className="mt-[7px]">
        <input
          type="text"
          id="title"
          autoComplete="title"
          className="block h-10 w-full border-gray-300 bg-gray-50 py-3 pl-[18px] text-xxs font-medium shadow-sm"
          placeholder="Geen titel"
          {...register("title", { required: true })}
        />
      </div>
    </div>
  );
}
