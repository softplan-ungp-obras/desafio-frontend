import * as Yup from 'yup';

export const Schema = Yup.object().shape({
  subject: Yup.string()
    .min(2, 'Mínimo 2 caracteres!')
    .max(50, 'Máximo 50 caracteres')
    .required('Campo Obrigatório'),
  description: Yup.string()
    .min(2, 'Mínimo 2 caracteres!')
    .max(200, 'Máximo 200 caracteres')
    .required('Campo Obrigatório'),
});
