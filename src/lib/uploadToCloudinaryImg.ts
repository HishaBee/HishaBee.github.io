import axios from "axios";

const CLOUD_NAME = "dbjhyikin";
const UPLOAD_PRESET = "hishabee_upload_preset";

export const uploadImageToCloudinary = async (file: File) => {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  try {
    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      formData,
    );

    return res.data; // contains secure_url, public_id, etc.
  } catch (err) {
    console.error("Upload failed:", err);
    throw err;
  }
};
