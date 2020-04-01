import express from 'express'
import { createConnection } from 'typeorm'
import config from './config'
import {Routes} from './routes'
import { Route } from './util/route'
// create typeorm connection
createConnection('default').then(connection => {
  config
  const app = express()
  app.set('view engine', 'ejs')
  app.set('views', __dirname + '/../public/views')
  app.use('/assets', express.static(__dirname + '/../public/assets'))
  app.use(express.json())

  // Loop through all the routes
  Routes.forEach((route: Route) => {
    // Set route to controller
    app[route.method](route.path, (request, response, next: Function) => {
      route
        .action(request, response)
        .then(() => next)
        .catch(err => next(err))
    })
  })

  app.listen(3000, () => console.log('express app listening'))
})
