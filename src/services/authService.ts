import { IUserDTO } from "../interfaces/IUser";
import http from "../http-common";

export const registerUser = async (user: IUserDTO) => {
  return http.post("auth/register", user).then((response) => {
    return response.data;
  });
};
