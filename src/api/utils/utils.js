import axios from "axios";

// 1, image upload function
export const imageUpload = async (imageFile) => {
  const imageForm = new FormData();
  imageForm.append("image", imageFile);

  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API}`,
    imageForm
  );
  return data.data.display_url;
};
