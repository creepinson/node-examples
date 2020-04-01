import { Request, Response, NextFunction } from 'express'

export abstract class Route {
  method: string
  path: string
  abstract action(
    req: Request,
    res: Response,
    next?: NextFunction
  ): Promise<any>
}