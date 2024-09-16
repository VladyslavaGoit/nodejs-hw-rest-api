import Joi from "joi";

export const schemaContactAdd = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "name is required!",
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required()
    .pattern(new RegExp(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Z|a-z]{2,}\b/))
    .messages({
      "any.required": "email is required!",
    }),
  phone: Joi.string()
    .pattern(new RegExp(/\d{3}-\d{3}-\d{4}/))
    .required()
    .messages({
      "any.required": "phone is required!",
    }),
});

export const schemaContactUpdate = Joi.object({
  name: Joi.string(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .pattern(new RegExp(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Z|a-z]{2,}\b/)),
  phone: Joi.string().pattern(new RegExp(/\d{3}-\d{3}-\d{4}/)),
});
