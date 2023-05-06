'use strict';

const controllers = require("./controllers/auth");
const routes = require("./routes");

module.exports = (plugin) => {
  for (const key in controllers) {
    plugin.controllers.auth[key] = controllers[key];
  }
  plugin.routes["content-api"].routes.push(...routes);
  return plugin;
}