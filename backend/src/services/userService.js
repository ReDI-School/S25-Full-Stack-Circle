import { NOT_FOUND } from "../constants/http.js";
import { findAllUsers } from "../store/userStore.js";
import RequestError from "../utils/RequestError.js";

export const getAllUsers = async () => {
  const users = await findAllUsers();

  if (users.length === 0) throw new RequestError(NOT_FOUND, "No users found");
  return users;
};
