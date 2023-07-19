import * as yup from 'yup';

export interface Form {
  name: string;
  email: string;
  company?: string;
  phone: string;
  text?: string;
  file?: File;
}

export const schema: yup.Schema<Form> = yup.object().shape({
  name: yup.string().required('Заполните поле'),
  email: yup.string().email('Введите корректный адрес почты').required('Заполните поле'),
  company: yup.string(),
  phone: yup.string().required('Заполните поле'),
  text: yup.string().max(1500),
  file: yup.mixed(),
});
