import * as yup from 'yup';

export const authSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
});

export type AuthFormData = yup.InferType<typeof authSchema>;