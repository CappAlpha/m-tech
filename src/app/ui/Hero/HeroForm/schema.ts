import * as yup from 'yup';

export interface Form {
  name: string;
  email: string;
  tel: string;
}

export const schema: yup.Schema<Form> = yup.object().shape({
  name: yup.string().required('Заполните поле'),
  email: yup.string().email('Введите корректный адрес почты').required('Заполните поле'),
  tel: yup.string().max(12, 'Некорректный номер телефона').min(12, 'Некорректный номер телефона').required('Заполните поле'),
});
