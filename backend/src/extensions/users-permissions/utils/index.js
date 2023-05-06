'use strict';

const { yup, validateYupSchema } = require("@strapi/utils");

const callbackBodySchema = yup.object().shape({
  firstName: yup.string(),
  lastName: yup.string(),
  countryCode: yup.string(),
  phoneNumber: yup.string(),
  email: yup.string().email(),
  password: yup.string(),
});

module.exports = {
  getService: (name) => {
    return strapi.plugins["users-permissions"].service(name)
  },
  validateCallbackBody: validateYupSchema(callbackBodySchema),
};