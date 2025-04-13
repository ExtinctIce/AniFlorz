import axios from "axios";
import { storeAuth } from "../../../store/store-auth/store-auth";

export const handleLoginGoogle = async () => {
  try {
    const response = await axios(
      "https://anilibria.top/api/v1/accounts/users/auth/social/google/login"
    );
    const data = await response.data;
    if (data.url) {
      window.location.href = data.url;
      storeAuth.setIsAuth(true);

      const userResponse = await axios.get(
        "https://anilibria.top/api/v1/accounts/users/me/profile"
      );
      storeAuth.setUserData(userResponse.data);
    }
  } catch (error) {
    console.error("Ошибка при авторизации:", error);
  }
};
