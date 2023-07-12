import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import InputMask from 'react-input-mask';

import { Form as FormI, schema } from './schema';

import styles from './HeroForm.module.scss';
import { Close } from '../../shared/Icon';
import { TabList, Tab, TabPanel, Tabs } from 'react-tabs';
import Link from 'next/link';

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

interface Props {
  form: form;
  opened: boolean;
  onClickItem: () => void;
}

export const HeroForm: FC<Props> = ({ form, opened, onClickItem }) => {
  const [formState, setFormState] = useState<FormState>('init');

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
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
    console.log(data)
  };

  const [activeTab, setActiveTab] = useState<'email' | 'phone'>("email");

  const setTab = (tabs: 'email' | 'phone') => {
    setActiveTab(tabs);
  }

  return (
    <div className={styles.root}>
      <div className={cn(styles.bgD, opened && styles.bg)} onClick={() => onClickItem()}></div>
      <div className={cn(styles.formRoot, opened && styles.opened)}>
        {formState === 'init' && (

          <div className={styles.formWrap}>
            <h2 className={styles.title}>{form.title}
            </h2>

            <form className={cn(styles.form, 'form')} onSubmit={handleSubmit(submit)}>
              <div className={styles.fields}>

                <div className={styles.inputWrap}>
                  <label className={styles.inputTitle}>
                    {form.nameTitle}
                  </label>

                  <input className={styles.input} {...register('name')} />
                  {Boolean(errors.name) && <span className={styles.span}>{errors?.name?.message}</span>}
                </div>

                <Tabs className={styles.inputWrap}>
                  <div className={styles.formNav}>
                    {form.connectWith}

                    <TabList className={styles.buttons}>
                      <Tab className={cn(styles.sEmail, activeTab === "email" && styles.active)} onClick={() => setTab('email')}>
                        {form.tabFirst}
                      </Tab>

                      <Tab className={cn(styles.sPhone, activeTab === "phone" && styles.active)} onClick={() => setTab('phone')}>
                        {form.tabSecond}
                      </Tab>
                    </TabList>
                  </div>

                  <TabPanel>
                    <label className={styles.inputTitle}>
                      {form.emailTitle}
                    </label>

                    <input type='email' className={styles.input} {...register('email')} />
                    {Boolean(errors.email) && <span className={styles.span}>{errors?.email?.message}</span>}
                  </TabPanel>

                  <TabPanel>
                    <label className={styles.inputTitle}>
                      {form.phoneTitle}
                    </label>

                    <InputMask className={styles.input} {...register('phone')} mask="+7(999)999-99-99" maskChar=" " />
                    {Boolean(errors.phone) && <span className={styles.span}>{errors?.phone?.message}</span>}
                  </TabPanel>
                </Tabs>
              </div>

              <button className={cn(styles.buttonDisabled, isValid && styles.button)} disabled={!isValid}>
                {form.textBtn}
              </button>
            </form>

            <div className={styles.policy}>
              {form.text}
              <Link href={form.link} className={styles.link}>
                {form.linkText}
              </Link>
            </div>
          </div>
        )
        }
        <div className={styles.formSend}>
          <div className={styles.formSendText}>
            Cпасибо, мы с вами свяжемся.
          </div>
        </div>
        <div className={styles.closeBtn} onClick={() => onClickItem()}>
          <Close className={styles.closeIcon} />
        </div>
      </div >
    </div >
  );
};
