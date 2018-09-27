const mock = require('./mock')

const basePath = '/processo'

const all = {
  method: 'GET',
  path: `${basePath}`,
  handler: (req, reply) => reply(mock.processes),
}

module.exports = {
  all,
}
