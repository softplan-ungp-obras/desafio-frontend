const mock = require('./mock')

const basePath = '/processo'

const all = {
  method: 'GET',
  path: `${basePath}`,
  handler: (req, reply) => reply(mock.processes),
}

const process = {
  method: 'GET',
  path: `${basePath}/{id}`,
  handler: (req, reply) => reply(mock.process),
}

const create = {
  method: 'POST',
  path: `${basePath}`,
  handler: (req, reply) => reply(mock.processes),
}

const deleteProcess = {
  method: 'DELETE',
  path: `${basePath}/{id}`,
  handler: (req, reply) => reply(mock.processes),
}

module.exports = {
  all,
  create,
  process,
  deleteProcess,
}
