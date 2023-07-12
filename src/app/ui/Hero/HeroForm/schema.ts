import * as yup from 'yup';

export interface Form {
  name: string;
  email?: string;
  phone?: string;
}

export const schema: yup.Schema<Form> = yup.object().shape({
  name: yup.string().required('Заполните поле'),
  email: yup.string().email('Введите корректный адрес почты'),
  phone: yup.string(),
});
