import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';


import { Form as FormI, schema } from './schema';

import styles from './HeroForm.module.scss';
import { Close } from '../../shared/Icon';
import { TabList, Tab, TabPanel, Tabs } from 'react-tabs';

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

  const [activeTab, setActiveTab] = useState<'email' | 'phone'>("email");

  // const [activeBtn, setActiveBtn] = useState<isValidEmail, isValidPhone>(true);

  const setTab = (tabs: 'email' | 'phone') => {
    setActiveTab(tabs);

    // if (tabs === 'email') {
    //   isValidEmail = false;
    // }
    // else {
    //   isValidPhone = true;
    // }
  }

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

                <Tabs className={styles.inputWrap}>
                  <div className={styles.formNav}>Связаться по
                    <TabList className={styles.buttons}>
                      <Tab className={cn(styles.sEmail, activeTab === "email" && styles.active)} onClick={() => setTab('email')}>
                        почте
                      </Tab>
                      <Tab className={cn(styles.sTel, activeTab === "phone" && styles.active)} onClick={() => setTab('phone')}>
                        телефону
                      </Tab>
                    </TabList>
                  </div>

                  <TabPanel>
                    <div className={styles.inputTitle}>E-mail*</div>
                    <input className={styles.input} {...register('email')} />
                    {Boolean(errors.email) && <span className={styles.span}>{errors?.email?.message}</span>}
                  </TabPanel>

                  <TabPanel>
                    <div className={styles.inputTitle}>Телефон*</div>
                    <input className={styles.input} {...register('tel')} />
                    {Boolean(errors.tel) && <span className={styles.span}>{errors?.tel?.message}</span>}
                  </TabPanel>
                </Tabs>
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
