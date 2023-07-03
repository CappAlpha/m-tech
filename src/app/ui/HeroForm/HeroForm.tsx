import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';

import { Form as FormI, schema } from './schema';

import styles from './HeroForm.module.scss';
import { Close } from '../shared/Icon';

export type FormState = 'loading' | 'error' | 'success' | 'init';

export interface Props {
  title: string;
  onClickItem: () => void;
  opened: boolean;
  text: string;
  link: string;
  linkText: string;
}

export const HeroForm: FC<Props> = ({ title, opened, text, link, linkText, onClickItem }) => {
  const [formState, setFormState] = useState<FormState>('init');

  const {
    register,
    handleSubmit,
    watch,
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
    <div className={styles.root}>
      <div className={cn(styles.bgD, opened && styles.bg)} onClick={() => onClickItem()}></div>
      <div className={cn(styles.formRoot, opened && styles.opened)}>
        {formState === 'init' && (
          <div className={styles.formWrap}>
            <h2 className={styles.title}>{title}</h2>

            <form className={cn(styles.form, 'form')} onSubmit={handleSubmit(submit)}>
              <div className={styles.fields}>

                <div className={styles.inputWrap}>
                  <div className={styles.inputTitle}>Ф.И.О*</div>
                  <input className={styles.input} {...register('name')} />
                  {Boolean(errors.name) && <span className={styles.span}>{errors?.name?.message}</span>}
                </div>

                <div className={styles.inputWrap}>
                  <div className={styles.formNav}>Связаться по
                    <div className={styles.buttons}>
                      <div className={styles.sEmail} >
                        почте
                      </div>
                      <div className={styles.sTel} >
                        телефону
                      </div>
                    </div>
                  </div>

                  <div className={styles.inputTitle}>E-mail*</div>
                  <input className={styles.input} {...register('email')} />
                  {Boolean(errors.email) && <span className={styles.span}>{errors?.email?.message}</span>}

                  {/* <div className={styles.inputTitle}>Телефон*</div>
                  <input className={styles.input} {...register('tel')} />
                  {Boolean(errors.tel) && <span className={styles.span}>{errors?.tel?.message}</span>} */}
                </div>
              </div>

              <button className={cn(styles.buttonDisabled, isValid && styles.button)} disabled={!isValid}>Отправить</button>
            </form>

            <div className={styles.policy}>
              {text}
              <a href={link} className={styles.link}>{linkText}</a>
            </div>

            <div className={styles.closeBtn} onClick={() => onClickItem()}>
              <Close className={styles.closeIcon} />
            </div>
          </div>
        )
        }
      </div >
    </div >
  );
};