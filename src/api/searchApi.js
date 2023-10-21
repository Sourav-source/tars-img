import axios from "axios";
const accessKey = "hVYRz-TuHNY5WVuH5HbmL09aDtUBPlaSX_FFAuMPJAc";

export const searchImg = async (query) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?query=${query}&per_page=10&client_id=${accessKey}`
  );
  if (response.status === 200) {
    return { status: response.status, data: response.data };
  } else throw new Error(`HTTP error: ${response.status}`);
};
