import { Request, Response } from 'express'
import fetch from 'node-fetch'
import { getManager } from 'typeorm'
import { SuccessResponse, RenderResponse } from '../util/response'
import { User } from '../entity/user'

export const list = async (req: Request, res: Response) => {
  const users = await getManager()
    .getRepository(User)
    .find()
  new SuccessResponse("It works!").send(res, { users });
}
