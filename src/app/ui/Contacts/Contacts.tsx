import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import InputMask from 'react-input-mask';

import { Form as FormI, schema } from './schema';

import styles from './Contacts.module.scss';
import Link from 'next/link';

export type FormState = 'loading' | 'error' | 'success' | 'init';

export interface Props {
  title: string;
}

const limit = 1500;

export const Contacts: FC<Props> = ({ title }) => {
  const [formState, setFormState] = useState<FormState>('init');
  const [files, setFiles] = useState(null);
  const [num, setNum] = useState('');
  const [opened, setOpened] = useState(true);

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
        Расскажите подробнее о вашем проекте или проконсультируйтесь с нами по телефону
      </div>

      <Link href={`tel:+7 924 XXX XX XX`} className={styles.phone}>
        +7 924 XXX XX XX
      </Link>

      <div className={styles.formRoot}>
        {formState === 'init' && (
          <div className={cn(styles.formWrap, !opened && styles.formWrapClose)}>
            <form className={cn(styles.form, 'form')} onSubmit={handleSubmit(submit)}>
              <div className={styles.fields}>
                <div className={styles.contacts}>
                  Контактные данные
                </div>

                <div className={styles.inputWraps}>
                  <div className={styles.inputWrap}>
                    <label className={styles.inputTitle}>
                      Ф.И.О*
                    </label>

                    <input className={styles.input} {...register('name')} />
                    {Boolean(errors.name) && <span className={styles.span}>{errors?.name?.message}</span>}
                  </div>

                  <div className={styles.inputWrap}>
                    <label className={styles.inputTitle}>
                      E-mail*
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
                      Компания*
                    </label>

                    <input type='text' className={styles.input} {...register('company')} />
                    {Boolean(errors.company) && <span className={styles.span}>{errors?.company?.message}</span>}
                  </div>

                  <div className={styles.inputWrap}>
                    <label className={styles.inputTitle}>
                      Телефон*
                    </label>

                    <InputMask className={styles.input} {...register('phone')} mask="+7(999)999-99-99" maskChar=" " />
                    {Boolean(errors.phone) && <span className={styles.span}>{errors?.phone?.message}</span>}
                  </div>
                </div>

                <div className={styles.textTitle}>
                  Несколько слов о проекте
                </div>

                <div className={styles.inputWraps}>
                  <div className={styles.inputWrapText}>
                    <div className={styles.wrapForm}>
                      <label className={styles.inputTitle}>
                        Описание
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
                    Перетащите или
                  </div>
                  <div className={styles.fileTextUpload}>
                    Файл успешно загружен
                  </div>

                  <input id='filesPick' className={styles.file} type='file' multiple {...register('files')} />
                  <label htmlFor='filesPick' className={styles.fileOpen} >
                    выберите файл
                  </label>
                </div>


                <button className={cn(styles.buttonDisabled, isValid && styles.button)} disabled={!isValid} onClick={() => setOpened(false)}>
                  Отправить
                </button>
              </div>
            </form>

            <div className={styles.policy}>
              Нажимая кнопку “Отправить”, я соглашаюсь на обработку персональных данных в соответствии
              <a href='' className={styles.link}>
                &nbsp; c политикой об обработке персональных данных
              </a>
            </div>
          </div>
        )
        }
        <div className={cn(styles.formSendBefore, !opened && styles.formSend)}>
          <div className={styles.formSendText}>
            Cпасибо, мы с вами свяжемся.
          </div>
        </div>
      </div>
    </div >
  )
}
