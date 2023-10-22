import axios from "axios";
const accessKey = "hVYRz-TuHNY5WVuH5HbmL09aDtUBPlaSX_FFAuMPJAc";

export const searchImg = async (query) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${query}&per_page=10&client_id=${accessKey}`
        );
        if (response.status === 200) {
          resolve({ status: response.status, data: response.data });
        } else {
          reject(new Error(`HTTP error: ${response.status}`));
        }
      } catch (error) {
        reject(error);
      }
    }, 1500);
  });
};
