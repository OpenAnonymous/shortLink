import { validationMessages } from '../../config/contants';
import { responseError } from '../../utils/helpers/response';

export const validateSchema = (schema) => {
    return (req, res, next) => {
        let dataToValidate;
        switch (req.method) {
            case 'GET':
            case 'DELETE':
                dataToValidate = req.query;
                break;
            case 'POST':
                dataToValidate = req.body;
                break;
            default:
                dataToValidate = req.body;
                break;
        }

        const { error } = schema.validate(dataToValidate, {
            abortEarly: false,
            messages: validationMessages,
        });

        if (error) {
            const errors = error.details.map(detail => detail.message);
            return responseError(res, 400, errors);
        }

        next();
    };
};
