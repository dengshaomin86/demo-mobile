'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const servers = require('./servers')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    servers: JSON.stringify(servers.dev)
})
