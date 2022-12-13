import { useForm, FormProvider } from "react-hook-form";
import { CategoryDropdown } from "./CategoryDropdown";
import { ImageUpload } from "./ImageUpload";
import { useBlogPost } from "../../hooks/useBlogPost";
import type { FormArticle } from "../../types";
import { Content } from "./Content";
import { PostTitle } from "./PostTitle";

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
    methods.reset();
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
            <PostTitle />
            {/* Categorie */}
            <CategoryDropdown />
            {/* Afbeelding */}
            <ImageUpload />
            {/* Bericht */}
            <Content />
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
