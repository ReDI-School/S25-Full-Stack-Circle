import { UNAUTHORIZED } from "../constants/http.js";

export default class RequestError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.name = "RequestError";
    Error.captureStackTrace(this, this.constructor);
  }
}

export class UnauthorizedError extends RequestError {
  constructor(message) {
    super(UNAUTHORIZED, message);
  }
}
