import * as yup from 'yup';

export interface Form {
  name: string;
}

export const schema: yup.Schema<Form> = yup.object().shape({
  name: yup.string().required('Заполните поле'),
});
