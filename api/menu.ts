import axios from "../api/axios_instance";

interface MenuCategoryResponse {
  id: number;
  Name: string;
  Description: string;
}

const getMenuCategory = async () => {
  try {
    const res = await axios.get<{data: MenuCategoryResponse[]}>("/items/Menu_Category");

    if (res.status !== 200) {
      console.log("error occured when login");
      return;
    }

    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};

interface MenuItemResponse {
  id: number;
  Name: string;
  Price: number;
  Category: number;
  description: string;
}

const getMenuItem = async () => {
  try {
    const res = await axios.get<{data: MenuItemResponse[]}>("/items/Menu_Item");

    if (res.status !== 200) {
      console.log("error occured when login");
      return;
    }
    // console.log(res)
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};

interface MenuFileResponse {
  id: number;
  Menu: string;
}

const getFileMenu = async () => {
  try {
    const res = await axios.get<{data: MenuFileResponse[]}>("/items/EMB01_Menu_File");

    if (res.status !== 200) {
      console.log("error occured when login");
      return;
    }
    // console.log(res)
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
}

export { getMenuCategory, getMenuItem, getFileMenu };
