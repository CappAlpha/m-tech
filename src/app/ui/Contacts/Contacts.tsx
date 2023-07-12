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
  description: string;
  phone: string;
  contactsTitle: string;
  firstTitle: string;
  secondTitle: string;
  thirdTitle: string;
  fourthTitle: string;
  textTitle: string;
  descriptionTitle: string;
  uploadText: string;
  uploadButton: string;
  uploadSuccess: string;
  textBtn: string;
  text: string;
  link: string;
  linkText: string;
  sendText: string;
}

export interface Props {
  form: form;
  title: string;
}

const limit = 1500;

export const Contacts: FC<Props> = ({ title, form }) => {
  const [formState, setFormState] = useState<FormState>('init');
  const [files, setFiles] = useState(null);
  const [num, setNum] = useState('');
  const [opened, setOpened] = useState(true);

  const closeForm = () => setOpened(false);

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

  const handleDragOver = (e: any) => {
    e.preventDefault();
  }

  const handleDrop = (e: any) => {
    e.preventDefault();
    setFiles(e.dataTransfer.files);
  }

  const handleNumChange = (e: any) => {
    setNum(e.target.value.slice(0, limit));
  };

  return (
    <div className={styles.root} id="contacts">
      <div className={styles.title}>{title}</div>

      <div className={styles.description}>
        {form.description}
      </div>

      <div className={styles.phone}>
        {form.phone}
      </div>

      <div className={styles.formRoot}>
        {formState === 'init' && (
          <div className={cn(styles.formWrap, !opened && styles.formWrapClose)}>
            <form className={cn(styles.form, 'form')} onSubmit={handleSubmit(submit)}>
              <div className={styles.fields}>
                <div className={styles.contacts}>
                  {form.contactsTitle}
                </div>

                <div className={styles.inputWraps}>
                  <div className={styles.inputWrap}>
                    <label className={styles.inputTitle}>
                      {form.firstTitle}
                    </label>

                    <input className={styles.input} {...register('name')} />
                    {Boolean(errors.name) && <span className={styles.span}>{errors?.name?.message}</span>}
                  </div>

                  <div className={styles.inputWrap}>
                    <label className={styles.inputTitle}>
                      {form.secondTitle}
                    </label>

                    <input type='email' className={styles.input} {...register('email')} />
                    {Boolean(errors.email) &&
                      <span className={styles.span}>
                        {errors?.email?.message}
                      </span>}
                  </div>
                </div>


                <div className={styles.inputWraps}>
                  <div className={styles.inputWrap}>
                    <label className={styles.inputTitle}>
                      {form.thirdTitle}
                    </label>

                    <input type='text' className={styles.input} {...register('company')} />
                    {Boolean(errors.company) && <span className={styles.span}>{errors?.company?.message}</span>}
                  </div>

                  <div className={styles.inputWrap}>
                    <label className={styles.inputTitle}>
                      {form.fourthTitle}
                    </label>

                    <InputMask className={styles.input} {...register('phone')} mask="+7(999)999-99-99" maskChar=" " />
                    {Boolean(errors.phone) && <span className={styles.span}>{errors?.phone?.message}</span>}
                  </div>
                </div>

                <div className={styles.textTitle}>
                  {form.textTitle}
                </div>

                <div className={styles.inputWraps}>
                  <div className={styles.inputWrapText}>
                    <div className={styles.wrapForm}>
                      <label className={styles.inputTitle}>
                        {form.descriptionTitle}
                      </label>
                      <div className={cn(styles.counter, num.length === limit && styles.counterLimit)}>{num.length}/{limit}</div>
                    </div>

                    <input type='text' className={styles.input} {...register('text')}
                      value={num}
                      onChange={handleNumChange} />
                    {Boolean(errors.text) && <span className={styles.span}>{errors?.text?.message}</span>}
                  </div>
                </div>

                <div className={cn(!files && styles.fileWrap, files && styles.fileWrapUpload)} onDragOver={handleDragOver} onDrop={handleDrop}>
                  <div className={styles.fileText}>
                    {form.uploadText}
                  </div>
                  <div className={styles.fileTextUpload}>
                    {form.uploadSuccess}
                  </div>

                  <input id='filesPick' className={styles.file} type='file' multiple {...register('files')} />
                  <label htmlFor='filesPick' className={styles.fileOpen} >
                    {form.uploadButton}
                  </label>
                </div>


                <button className={cn(styles.buttonDisabled, isValid && styles.button)} disabled={!isValid} onClick={() => setOpened(false)}>
                  {form.textBtn}
                </button>
              </div>
            </form>

            <div className={styles.policy}>
              {form.text}
              <a href={form.link} className={styles.link}>{form.linkText}</a>
            </div>
          </div>
        )
        }
        <div className={cn(styles.formSendBefore, !opened && styles.formSend)}>
          <div className={styles.formSendText}>
            {form.sendText}
          </div>
        </div>
      </div>
    </div >
  )
}
