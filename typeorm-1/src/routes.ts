import * as userController from './controllers/userController'
import { Request, Response, NextFunction } from 'express'
import { Route } from './util/route'
import homeController from './controllers/homeController'

export const Routes: Route[] = [
  {
    method: 'get',
    path: '/users',
    action: userController.list,
  },
  {
    method: 'get',
    path: '/',
    action: homeController,
  },
]