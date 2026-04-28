import useCommonStore from "@/stores/store";
import axios from "axios";

export const uploadShopLogo = async (file: File) => {
  const body = new FormData();
  body.set("image", file);

  const baseURL = "https://app.hishabee.business/api/customer/online-shop";
  try {
    const response = await axios.post(baseURL + "/upload/apkImage", body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status === 200) {
      return response.data.url as string;
    } else {
      return null;
    }
  } catch (error) {
    // need to send sentry error
    console.log("error", error);
    return null;
  }
};

export const uploadSingleImage = uploadShopLogo;
