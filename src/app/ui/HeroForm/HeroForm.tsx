import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';

import { Form as FormI, schema } from './schema';

import styles from './HeroForm.module.scss';

export type FormState = 'loading' | 'error' | 'success' | 'init';

export interface FormProps {
  prop?: string;
}

export const HeroForm = () => {
  const [formState, setFormState] = useState<FormState>('init');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormI>({
    // @ts-ignore
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const submit: SubmitHandler<FormI> = (data) => {
    if (formState === 'loading') {
      return;
    }

    setFormState('loading');

    // console.log(data)
  };

  return (
    <div className={styles.root}>
      {formState === 'init' && (
        <>
          <h2 className={styles.title}>Оценка вашей квартиры</h2>
          <form className={cn(styles.form, 'form')} onSubmit={handleSubmit(submit)}>
            <div className={styles.fields}>
              <input {...register('name')} />
              {Boolean(errors.name) && <span>{errors?.name?.message}</span>}
            </div>
            <button>Отправить</button>
          </form>
        </>
      )}
    </div>
  );
};
