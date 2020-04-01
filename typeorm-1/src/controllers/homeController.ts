import { Request, Response } from 'express'
import fetch from 'node-fetch'
import { getManager } from 'typeorm'
import { SuccessResponse, RenderResponse } from '../util/response'

export default async (req: Request, res: Response) => {
  new RenderResponse("index").send(res);
}
