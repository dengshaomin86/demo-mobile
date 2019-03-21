'use strict'
const servers = require('./servers')

module.exports = {
    NODE_ENV: '"production"',
    servers: JSON.stringify(servers.prod)
}
