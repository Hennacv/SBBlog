import { useFormContext } from "react-hook-form";

export function Content() {
  const { register } = useFormContext();
  return (
    <div className="col-span-6">
      <label className="block text-xxs font-medium text-gray-700">
        Bericht
      </label>
      <div className="mt-[7px]">
        <textarea
          id="content"
          className="block h-[214px] w-full border-gray-300 bg-gray-50 shadow-sm sm:text-sm"
          defaultValue={""}
          {...register("content", { required: true })}
        />
      </div>
    </div>
  );
}
