// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ValidationError } from 'yup';

interface Errors {
    [key: string]: string; // ele pode receber qualquer coisa (chave do objeto  sendo qualquer coisa ) só que do tipo string
}

export default function getValidationErrors(err: ValidationError): Errors {
    const validationErrors: Errors = {};

    err.inner.forEach(error => {
        error.path ? (validationErrors[error.path] = error.message) : 'error';
    });
    return validationErrors;
}
