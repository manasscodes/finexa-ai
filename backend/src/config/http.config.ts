const httpConfig = () => ({
     OK: 200,
     CREATED: 201,
     ACCEPTED: 202,
     NO_CONTENT: 204,

     //client error messages
     BAD_REQUEST: 400,
     UNAUTHORIZED: 401,
     FORBIDDEN: 403,
     NOT_FOUND: 404,
     METHOD_NOT_ALLOWED: 405,
     CONFLICT: 409,
     UNPROCESSABLE_ENTITY: 422,
     TOO_MANY_REQUESTS: 429,

     //server error messages
     INTERNAL_SERVER_ERROR: 500,
     BAD_GATEWAY: 502,
     SERVICE_UNAVAILABLE: 503,
     GATEWAY_TIMEOUT: 504,
     NOT_IMPLEMENTED: 501,
})

export const HTTPSTATUS = httpConfig();

export type HttpStatusCodeType = (typeof HTTPSTATUS)[keyof typeof HTTPSTATUS];