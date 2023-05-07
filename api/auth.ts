import axios from "../api/axios_instance";

interface LoginResponse {
  access_token: string;
  expires: number;
  refresh_token: string;
}

const loginWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const res = await axios.post<LoginResponse>("/auth/login", {
      email: email,
      password: password,
    });

    if (res.status !== 200) {
      console.log("error occured when login");
      return;
    }

    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export { loginWithEmailAndPassword };
