import axios from "../api/axios_instance";

interface PhotoRespone {
  id: number;
  Title: string;
  Description: string;
  Photo: string;
}

const getImage = (file_id: string) => {
  try {
    const res = axios.get(`/assets/${file_id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const getPhotos = async () => {
  try {
    const res = await axios.get<{data: PhotoRespone[]}>("/items/Photos");
    if (res.status !== 200) {
      console.log("error occured when login");
      return;
    }

    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};

export { getPhotos, getImage };
