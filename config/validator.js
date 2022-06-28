const joi = require('joi')

const validator = (req, res, next) => {

	const schema = joi.object({
	username: joi.string()
						.max(20)
            .min(2)
            .trim()
            .pattern(new RegExp('[a-zA-Z0-9]'))
            .required()
            .messages({
                'string.min': 'username: min 2 characters',
                'string.max': 'username: max 20 characters'}),

	first_name: joi.string()
						.max(20)
						.min(2)
						.trim()
						.pattern(new RegExp('^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$'))
						.required()
						.messages({
								'string.pattern.base' :'first name: only recive letters',
								'string.min': 'first name: min 2 characters',
								'string.max': 'first name: max 20 characters'}),

	last_name: joi.string()
						.max(20)
						.min(2)
						.trim()
						.pattern(new RegExp('^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$'))
						.required()
						.messages({
								'string.pattern.base' :'first name: only recive letters',
								'string.min': 'last name: min 2 characters',
								'string.max': 'last name: max 20 characters'}),

	email: joi.string()
						.email({minDomainSegments:2})
						.required()
						.messages({
								'string.email': 'mail: incorrect format'}),

	password: joi.string()
						.min(8)
						.max(30)
						.pattern(new RegExp('[a-zA-Z0-9]'))
						.required()
						.messages({
								'string.min': 'password: min 8 characters',
								'string.max': 'password: max 30 characters'}),

	country: joi.string()
						.trim()
						.required(),

  photo: joi.string()
            .trim()
            .required(),
						
	from: joi.string()
    })
    const validation = schema.validate(req.body.userData, {abortEarly:false})
    if (validation.error) {
        return res.json({success: false, from: 'validator', message: validation.error.details, test: validation})
    }
    next()
}

module.exports = validator