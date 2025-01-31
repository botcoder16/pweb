const Joi = require("joi");

module.exports.studentSchema = Joi.object({
  firstname: Joi.string().required(),
  surname: Joi.string().required(),
  fathername: Joi.string().required(),
  birthdate: Joi.date().required(),
  mobileno: Joi.number().required(),
  altmobileno: Joi.number().required(),
  email: Joi.string().required().email(),
  altemail: Joi.string().required().email(),
  category: Joi.string().required(),
  nationality: Joi.string().required(),
  presentcountry: Joi.string().required(),
  presentstate: Joi.string().required(),
  presentdistrict: Joi.string().required(),
  landmark: Joi.string().required(),
  presentaddress: Joi.string().required(),
  pincode: Joi.number().required(),
  tenth: Joi.number().required(),
  twelth: Joi.number().required(),
  lastsemcgpa: Joi.number().required(),
}).required();

//creating a schema -> requiring it -> passing it as a middleware in validatelisting function
