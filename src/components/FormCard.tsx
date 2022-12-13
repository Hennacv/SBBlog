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
      formData.append("image", singleImage, "my-image");
      updateBlogPost.mutate(formData);
    }
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form
          className="h-fit bg-white p-6"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <h3 className="mb-6	text-title font-bold text-gray-900">
            Plaats een blog bericht
          </h3>
          <div className="grid grid-cols-6 gap-y-6">
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
                  className="block h-10 w-full border-gray-300 bg-gray-50 py-3 pl-[18px] text-xxs font-medium shadow-sm"
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
                  className="block h-[214px] w-full border-gray-300 bg-gray-50 shadow-sm sm:text-sm"
                  defaultValue={""}
                  {...methods.register("content", { required: true })}
                />
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="border-transparent mt-6 h-8 w-48 rounded-[18px] border bg-orange text-xxs text-white shadow-sm"
            >
              Bericht aanmaken
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
