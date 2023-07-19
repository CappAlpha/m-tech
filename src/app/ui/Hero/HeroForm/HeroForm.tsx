import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import Link from 'next/link';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import InputMask from 'react-input-mask';
import { TabList, Tab, TabPanel, Tabs } from 'react-tabs';

//import * as postContact from '@/api/forms/postContact';

import { Close } from '../../shared/Icon';
import { Form as FormI, schema } from './schema';

import styles from './HeroForm.module.scss';

export type FormState = 'loading' | 'error' | 'success' | 'init';

interface Props {
  opened: boolean;
  onClickItem: () => void;
}

export const HeroForm: FC<Props> = ({ opened, onClickItem }) => {
  const [formState, setFormState] = useState<FormState>('error');

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormI>({
    // @ts-ignore
    resolver: yupResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const submit: SubmitHandler<FormI> = (data) => {
    if (formState === 'loading') {
      return;
    }

    setFormState('loading');

    if ((data.email === '' && data.phone === '') || (data.phone && data.phone.length !== 16)) {
      return;
    }

    // postContact
    //   .call(data)
    //   .then((res) => {
    //     if (res.error === null && res.data.success === true) {
    //       setFormState('succes');
    //     }
    //     if (res.error) {
    //       setFormState('error');
    //     }
    //   })
    //   .catch(() => {
    //     setFormState('error');
    //   });
  };

  const [activeTab, setActiveTab] = useState<'email' | 'phone'>('email');

  const setTab = (tabs: 'email' | 'phone') => {
    setActiveTab(tabs);
  };

  return (
    <div className={styles.root}>
      <div className={cn(styles.bgD, opened && styles.bg)} onClick={() => onClickItem()}></div>
      <div className={cn(styles.formRoot, opened && styles.opened)}>
        {formState === 'init' || formState === 'loading' && (
          <div className={styles.formWrap}>
            <h2 className={styles.title}>Обсудить задачу</h2>

            <form className={cn(styles.form, 'form')} onSubmit={handleSubmit(submit)}>
              <div className={styles.fields}>
                <div className={styles.inputWrap}>
                  <label className={styles.inputTitle}>Ф.И.О*</label>

                  <input className={styles.input} {...register('name')} />
                  {Boolean(errors.name) && (
                    <span className={styles.span}>{errors?.name?.message}</span>
                  )}
                </div>

                <Tabs className={styles.inputWrap}>
                  <div className={styles.formNav}>
                    Связаться по
                    <TabList className={styles.buttons}>
                      <Tab
                        className={cn(styles.sEmail, activeTab === "email" && styles.active)} onClick={() => setTab('email')}
                      >
                        почте
                      </Tab>

                      <Tab
                        className={cn(styles.sPhone, activeTab === "phone" && styles.active)} onClick={() => setTab('phone')}
                      >
                        телефону
                      </Tab>
                    </TabList>
                  </div>

                  <TabPanel>
                    <label className={styles.inputTitle}>E-mail*</label>

                    <input type='email' className={styles.input} {...register('email')} />
                    {Boolean(errors.email) && (
                      <span className={styles.span}>{errors?.email?.message}</span>
                    )}
                  </TabPanel>

                  <TabPanel>
                    <label className={styles.inputTitle}>Телефон*</label>

                    <InputMask
                      className={styles.input}
                      {...register('phone')}
                      mask="+7(999)999-99-99"
                      maskChar=" "
                    />
                    {Boolean(errors.phone) && (
                      <span className={styles.span}>{errors?.phone?.message}</span>
                    )}
                  </TabPanel>
                </Tabs>
              </div>

              <button
                className={cn(styles.buttonDisabled, isValid && styles.button)}
                disabled={!isValid}
              >
                Отправить
              </button>
            </form>

            <div className={styles.policy}>
              Нажимая кнопку “Отправить”, я соглашаюсь на обработку персональных данных в соответствии
              <Link href='' target='_blank' className={styles.link}>
                &nbsp; c политикой об обработке персональных данных'
              </Link>
            </div>
          </div>
        )}
        {formState === 'success' && (
          <div className={styles.formSend}>
            <div className={styles.formSendText}>Cпасибо, мы с вами свяжемся.</div>
          </div>
        )}
        {formState === 'error' && (
          <div className={styles.formSend}>
            <div className={styles.formSendText}>Произошла ошибка при отправке формы
              <button
                className={cn(styles.buttonDisabled, styles.button, styles.buttonReset)}
                onClick={() => {
                  setFormState('init');
                  reset();
                }}
              >
                Попробовать ещё раз
              </button>
            </div>
          </div>
        )}
        <div className={styles.closeBtn} onClick={() => onClickItem()}>
          <Close className={styles.closeIcon} />
        </div>
      </div >
    </div >
  );
};
