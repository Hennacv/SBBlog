import { useFormContext } from "react-hook-form";
import { FiCamera } from "react-icons/fi"

export function ImageUpload() {
  const { register } = useFormContext();

  return (
    <div className="col-span-6">
      <label htmlFor="photo" className="block text-xxs font-medium text-gray-700">
        Header afbeelding
      </label>
      <div className="mt-[7px] w-fit h-12 flex items-center bg-gray-50">
        <FiCamera className="mx-4 my-[18px]" />
        <input
          id="afbeelding"
          type="file"
          accept="image/*"
          {...register("image", { required: true })}
          className="font-thin text-[9px] file:h-6 file:w-20 file:rounded-[18px] file:border file:border-transparent file:bg-gray-600 file:text-white"
        />
      </div>
    </div>
  )
}
