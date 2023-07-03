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
  onClickItem: () => void;
  opened: boolean;
}

export const HeroForm: FC<Props> = ({ opened, onClickItem }) => {
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
      <div className={cn(styles.bgD, opened && styles.bg)} onClick={() => onClickItem()}></div>
      <div className={cn(styles.formRoot, opened && styles.opened)}>
        {formState === 'init' && (
          <div className={styles.formWrap}>
            <h2 className={styles.title}>Обсудить задачу</h2>

            <form className={cn(styles.form, 'form')} onSubmit={handleSubmit(submit)}>
              <div className={styles.fields}>
                <input {...register('name')} />
                {Boolean(errors.name) && <span>{errors?.name?.message}</span>}

              </div>

              <button className={styles.button}>Отправить</button>
            </form>

            <div className={styles.closeBtn} onClick={() => onClickItem()}>
              <Close className={styles.closeIcon} />
            </div>
          </div>
        )}
      </div>
    </div >
  );
};