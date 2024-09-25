import Joi from 'joi';

export const search = Joi.object({
    keyword : Joi.string().optional().label('keyword'),
    page : Joi.number().optional().default(1).label('page'),
    limit : Joi.number().optional().default(10).label('limit'),
    sortBy : Joi.string().optional().default('createdAt').label('sortBy'),
    order : Joi.string().optional().default('desc').label('order'),
})

export const createSchema = Joi.object({
    fbOrGoogleId : Joi.string().label('fbOrGoogleId'),
    email : Joi.string().email().label('email').required(),
    password : Joi.string().min(8).required().label('password').required(),
    name : Joi.string().required().label('name'),
})

export const updateSchema = Joi.object({
    name : Joi.string().optional().label('name').required(),
})

export const loginSchema = Joi.object({
    email : Joi.string().email().required().label('email'),
    password : Joi.string().min(8).required().label('password')
})
