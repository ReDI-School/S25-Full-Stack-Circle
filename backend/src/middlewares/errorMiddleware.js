import { INTERNAL_SERVER_ERROR } from "../constants/http.js";
import RequestError from "../utils/RequestError.js";

export const errorHandler = (err, req, res, _next) => {
  console.error("Handled Error:", err.stack || err.message);

  if (err instanceof RequestError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  res.status(INTERNAL_SERVER_ERROR).json({ message: "Something went wrong" });
};
