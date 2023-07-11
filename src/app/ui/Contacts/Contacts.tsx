import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import InputMask from 'react-input-mask';

import { Form as FormI, schema } from './schema';

import styles from './Contacts.module.scss';

export type FormState = 'loading' | 'error' | 'success' | 'init';

interface form {
  title: string;
  nameTitle: string;
  connectWith: string;
  tabFirst: string;
  tabSecond: string;
  emailTitle: string;
  phoneTitle: string;
  textBtn: string;
  text: string;
  link: string;
  linkText: string;
}

export interface Props {
  form: form;
  title: string;
}

export const Contacts: FC<Props> = ({ title, form }) => {
  const [formState, setFormState] = useState<FormState>('init');

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
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
    <div className={styles.root} id="contacts">
      <div className={styles.title}>{title}</div>

      <div className={styles.description}>
        Расскажите подробнее о вашем проекте или проконсультируйтесь с нами по телефону
      </div>

      <div className={styles.phone}>
        +7 924 XXX XX XX
      </div>

      <div className={styles.formRoot}>
        {formState === 'init' && (
          <div className={styles.formWrap}>
            <form className={cn(styles.form, 'form')} onSubmit={handleSubmit(submit)}>
              <div className={styles.fields}>
                <div className={styles.contacts}>
                  Контактные данные
                </div>

                <div className={styles.inputWraps}>
                  <div className={styles.inputWrap}>
                    <label className={styles.inputTitle}>
                      {form.nameTitle}
                    </label>

                    <input className={styles.input} {...register('name')} />
                    {Boolean(errors.name) && <span className={styles.span}>{errors?.name?.message}</span>}
                  </div>

                  <div className={styles.inputWrap}>
                    <label className={styles.inputTitle}>
                      {form.emailTitle}
                    </label>

                    <input type='email' className={styles.input} {...register('email')} />
                    {Boolean(errors.email) && <span className={styles.span}>{errors?.email?.message}</span>}
                  </div>

                  <div className={styles.inputWrap}>
                    <label className={styles.inputTitle}>
                      Компания*
                    </label>

                    <input type='text' className={styles.input} {...register('company')} />
                    {Boolean(errors.company) && <span className={styles.span}>{errors?.company?.message}</span>}
                  </div>

                  <div className={styles.inputWrap}>
                    <label className={styles.inputTitle}>
                      {form.phoneTitle}
                    </label>

                    <InputMask className={styles.input} {...register('phone')} mask="+7(999)999-99-99" maskChar=" " />
                    {Boolean(errors.phone) && <span className={styles.span}>{errors?.phone?.message}</span>}
                  </div>
                </div>

                <button className={cn(styles.buttonDisabled, isValid && styles.button)} disabled={!isValid}>{form.textBtn}</button>
              </div>
            </form>

            <div className={styles.policy}>
              {form.text}
              <a href={form.link} className={styles.link}>{form.linkText}</a>
            </div>
          </div>
        )
        }
      </div >
    </div >
  )
}
