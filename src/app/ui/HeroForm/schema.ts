import * as yup from 'yup';

export interface Form {
  name: string;
  email: string;
  tel: string;
}

export const schema: yup.Schema<Form> = yup.object().shape({
  name: yup.string().required('Заполните поле'),
  email: yup.string().required('Заполните поле'),
  tel: yup.string().required('Заполните поле'),
});
