import type {Request, Response, NextFunction } from "express";

type AsyncControllerType =(
     req: Request,
     res: Response,
     next: NextFunction
) => Promise<any>;
export const asyncHandler = (fn: AsyncControllerType):AsyncControllerType => async(req, res, next) => {
     try {
          await fn(req, res, next);
     } catch (error) {
          next(error);
     }
}
