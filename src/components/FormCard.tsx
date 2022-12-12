import { useForm, FormProvider } from "react-hook-form";
import { CategoryDropdown } from "./CategoryDropdown";
import { ImageUpload } from "./ImageUpload";
import { useBlogPost } from "../hooks/useBlogPost";
import type { FormArticle } from "../types";

export function FormCard() {
  const updateBlogPost = useBlogPost();
  const methods = useForm<FormArticle>();

  const onSubmit = (data: FormArticle) => {
    const formData = new FormData();
    const { image } = data;
    const singleImage = image[0];
    if (singleImage) {
      formData.append("title", data.title);
      formData.append("content", data.content);
      formData.append("category_id", data.category_id);
      formData.append("image", singleImage, "my-image")
      updateBlogPost.mutate(formData);
    }
  };

  return (
    <div>
    <FormProvider {...methods}>
      <form className="bg-white p-6 h-fit" onSubmit={methods.handleSubmit(onSubmit)}>
          <h3 className="mb-6	text-title font-bold text-gray-900">Plaats een blog bericht</h3>
          <div className="grid gap-y-6 grid-cols-6">
            {/* Berichtnaam */}
            <div className="col-span-6">
              <label className="block text-xxs font-medium text-gray-700">
                Berichtnaam
              </label>
              <div className="mt-[7px]">
                <input
                  type="text"
                  id="title"
                  autoComplete="title"
                  className="block w-full h-10 pl-[18px] py-3 border-gray-300 shadow-sm bg-gray-50 text-xxs font-medium"
                  placeholder="Geen titel"
                  {...methods.register("title", { required: true })}
                />
              </div>
            </div>
            {/* Categorie */}
            <CategoryDropdown />
            {/* Afbeelding */}
            <ImageUpload />
            {/* Bericht */}
            <div className="col-span-6">
              <label className="block text-xxs font-medium text-gray-700">
                Bericht
              </label>
              <div className="mt-[7px]">
                <textarea
                  id="content"
                  className="block w-full h-[214px] border-gray-300 shadow-sm bg-gray-50 sm:text-sm"
                  defaultValue={''}
                  {...methods.register("content", { required: true})}
                />
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="h-8 w-48 mt-6 rounded-[18px] border border-transparent bg-orange text-xxs text-white shadow-sm"
            >
              Bericht aanmaken
            </button>
          </div>

      </form>
    </FormProvider>
    </div>
  );
}
