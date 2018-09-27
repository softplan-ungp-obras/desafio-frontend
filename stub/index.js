const map = require('lodash/map')
const routes = require('./routes')
const Hapi = require('hapi')
const Joi = require('joi')

const latency = 250
const server = new Hapi.Server()

function reduceDetails(acc, detail) {
  return Object.assign(acc, { [detail.path]: [detail.type] })
}

function failAction(request, reply, source, error) {
  reply({
    fields: error.data.details.reduce(reduceDetails, {})
  })
    .code(400)
}

server.connection({
  host: '0.0.0.0',
  port: 3002,
  routes: {
    validate: {
      failAction,
      headers: Joi.object({
        'x-application-id': Joi.string().required(),
        'x-organization-slug': Joi.string().required(),
        'x-channel-id': Joi.string().required(),
        'accept-language': Joi.string().required(),
        authorization: Joi.string()
      })
        .options({ allowUnknown: true })
    },
    cors: {
      origin: ['*'],
      headers: [
        'content-type',
        'accept-language',
        'x-application-id',
        'x-session-data',
        'x-organization-slug',
        'x-channel-id'
      ],
      additionalHeaders: ['accept', 'authorization', 'content-type']
    }
  }
})

server.ext('onPreResponse', (response, reply) => {
  return new Promise(resolve => setTimeout(() => resolve(reply.continue()), latency))
})

map(routes, routeModule => map(routeModule, route => server.route(route)))

server.start((err) => {
  if (err) {
    throw err
  }
})
