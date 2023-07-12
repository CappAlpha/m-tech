import * as yup from 'yup';

export interface Form {
  name: string;
  email: string;
  company: string;
  phone: string;
  text: string;
  files: any;
}

export const schema: yup.Schema<Form> = yup.object().shape({
  name: yup.string().required('Заполните поле'),
  email: yup.string().required('Заполните поле'),
  company: yup.string().required('Заполните поле'),
  phone: yup.string().required('Заполните поле'),
  text: yup.string().length(1500),
  files: yup.mixed(),
});
