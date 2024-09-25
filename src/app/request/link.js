import Joi from 'joi';

export const createSchema = Joi.object({
    originalUrl: Joi.string().required().label('originalUrl'),
    title: Joi.string().trim().max(100).label('title'),
    shortUrl: Joi.string().trim().max(100).custom((value, helpers) => {
      if (value.includes('/')) {
        return helpers.error('shortUrl.invalid');
      }
      return value
    }).label('shortUrl')
      .messages({
        'shortUrl.invalid': 'shortUrl dont include char / ',
      }),
    thumnalUrl: Joi.string().label('thumnalUrl')
  });


export const deleteSchema = Joi.object({
    id : Joi.string().required().label('id')
})