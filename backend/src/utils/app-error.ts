import type { HttpStatusCodeType } from "../config/http.config.js";
import { HTTPSTATUS } from "../config/http.config.js";
import type { ErrorCodeEnumType } from "../enums/error-code.enum.js";
import { ErrorCodeEnum } from "../enums/error-code.enum.js";

export class AppError extends Error {
     public statusCode: HttpStatusCodeType;
     public errorCode?: ErrorCodeEnumType;

     constructor(
          message: string,
          statusCode: HttpStatusCodeType = HTTPSTATUS.INTERNAL_SERVER_ERROR,
          errorCode?: ErrorCodeEnumType
     ){
          super(message);
          this.statusCode = statusCode;
          if (errorCode !== undefined) {
               this.errorCode = errorCode;
          }

          Error.captureStackTrace(this, this.constructor);

     }
}

export class HttpException extends AppError{
     constructor(
          message: string,
          statusCode: HttpStatusCodeType,
          errorCode?: ErrorCodeEnumType
     ){
          super(message, statusCode, errorCode);
     }
}

export class NotFoundException extends AppError {
     constructor(message: string = "Resource Not Found", errorCode?: ErrorCodeEnumType) {
          super(message, HTTPSTATUS.NOT_FOUND, errorCode || ErrorCodeEnum.RESOURCE_NOT_FOUND);
     }
}

export class BadRequestException extends AppError {
     constructor(message: string = "Bad Request", errorCode?: ErrorCodeEnumType) {
          super(message, HTTPSTATUS.BAD_REQUEST, errorCode || ErrorCodeEnum.VALIDATION_ERROR);
     }
}
export class UnauthorizedException extends AppError {
     constructor(message: string = "Unauthorized", errorCode?: ErrorCodeEnumType) {
          super(message, HTTPSTATUS.UNAUTHORIZED, errorCode || ErrorCodeEnum.ACCESS_UNAUTHORIZED);
     }
}

export class InternalServerErrorException extends AppError {
     constructor(message: string = "Internal Server Error", errorCode?: ErrorCodeEnumType) {
          super(message, HTTPSTATUS.INTERNAL_SERVER_ERROR, errorCode || ErrorCodeEnum.INTERNAL_SERVER_ERROR);
     }
}