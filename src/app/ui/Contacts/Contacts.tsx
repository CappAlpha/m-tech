import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import Link from 'next/link';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import InputMask from 'react-input-mask';

import { getTransformedPhone } from '../shared/constants/getTransformedPhone';

import { Form as FormI, schema } from './schema';

import styles from './Contacts.module.scss';

export type FormState = 'loading' | 'error' | 'success' | 'init';

export interface Props {
  phone: string;
}

const limit = 1500;

export const Contacts: FC<Props> = ({ phone }) => {
  const [formState, setFormState] = useState<FormState>('init');
  const [files, setFiles] = useState<File>();
  const [num, setNum] = useState('');
  const [opened, setOpened] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

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
    //console.log(data)
  };


  //@ts-ignore
  const onChangeFile = ({ target }) => {
    if (target.files) {
      const file = target.files[0];
      const MAX_FILE_SIZE = 20000;
      setErrorMsg("");

      if (file !== undefined) {
        const fileSizeKiloBytes = file.size / 1024

        if (fileSizeKiloBytes > MAX_FILE_SIZE) {
          setErrorMsg("Файл должен быть меньше 20 МБ");
          return;
        }

      }
      else return;

      setFiles(file);
    }
  }

  //@ts-ignore
  // const handleDragOver = (e) => {
  //   e.preventDefault();
  // }

  //@ts-ignore
  // const handleDrop = (e) => {
  //   e.preventDefault();
  //   if (e.dataTransfer.files) {
  //     const file = e.dataTransfer.files[0];
  //     setErrorMsg("");
  //     const MAX_FILE_SIZE = 20000;

  //     const fileSizeKiloBytes = file.size / 1024

  //     if (fileSizeKiloBytes > MAX_FILE_SIZE) {
  //       setErrorMsg("Файл должен быть меньше 20 МБ");
  //       return;
  //     }
  //     if (e.dataTransfer.files.length > 1) {
  //       setErrorMsg("Можно загрузить не более одного файла");
  //       return;
  //     }
  //   }

  //   setFiles(e.dataTransfer.files);
  // }

  //@ts-ignore
  const handleNumChange = (e) => {
    setNum(e.target.value.slice(0, limit));
  };

  return (
    <div className={styles.root} id="contacts">
      <div className={styles.title}>Обсудите задачу</div>

      <div className={styles.description}>
        Расскажите подробнее о вашем проекте или проконсультируйтесь с нами по телефону
      </div>

      <Link href={`tel: ${getTransformedPhone(phone)}`} className={styles.phone}>
        {phone}
      </Link>

      <div className={styles.formRoot}>
        {formState === 'init' && (
          <div className={cn(styles.formWrap, !opened && styles.formWrapClose)}>
            <form className={cn(styles.form, 'form')} onSubmit={handleSubmit(submit)}>
              <div className={styles.fields}>
                <div className={styles.contacts}>Контактные данные</div>

                <div className={styles.inputWraps}>
                  <div className={styles.inputWrap}>
                    <label className={styles.inputTitle}>Ф.И.О*</label>

                    <input className={styles.input} {...register('name')} />
                    {Boolean(errors.name) && (
                      <span className={styles.span}>{errors?.name?.message}</span>
                    )}
                  </div>

                  <div className={styles.inputWrap}>
                    <label className={styles.inputTitle}>E-mail*</label>

                    <input type='email' className={styles.input} {...register('email')} />
                    {Boolean(errors.email) && (
                      <span className={styles.span}>{errors?.email?.message}</span>
                    )}
                  </div>
                </div>


                <div className={styles.inputWraps}>
                  <div className={styles.inputWrap}>
                    <label className={styles.inputTitle}>Компания*</label>

                    <input type='text' className={styles.input} {...register('company')} />
                    {Boolean(errors.company) && (
                      <span className={styles.span}>{errors?.company?.message}</span>
                    )}
                  </div>

                  <div className={styles.inputWrap}>
                    <label className={styles.inputTitle}>Телефон*</label>

                    <InputMask className={styles.input} {...register('phone')}
                      mask="+7(999)999-99-99"
                      maskChar=" "
                    />
                    {Boolean(errors.phone) && (
                      <span className={styles.span}>{errors?.phone?.message}</span>
                    )}
                  </div>
                </div>

                <div className={styles.textTitle}>Несколько слов о проекте</div>

                <div className={styles.inputWraps}>
                  <div className={styles.inputWrapText}>
                    <div className={styles.wrapForm}>
                      <label className={styles.inputTitle}>Описание</label>
                      <div className={cn(styles.counter, num.length === limit && styles.counterLimit)}
                      >
                        {num.length}/{limit}
                      </div>
                    </div>

                    <input
                      type='text'
                      className={styles.input}
                      {...register('text')}
                      value={num}
                      onChange={handleNumChange} />
                    {Boolean(errors.text) && (
                      <span className={styles.span}>{errors?.text?.message}</span>
                    )}
                  </div>
                </div>

                <div className={cn(!files && styles.fileWrap, files && styles.fileWrapUpload)}
                //onDragOver={handleDragOver} 
                //onDrop={handleDrop}
                >
                  <div className={styles.wrapForm}>
                    <div className={styles.fileText}>Перетащите или</div>

                    <input
                      id='filesPick'
                      className={styles.file}
                      type='file'
                      {...register('file')}
                      onChange={onChangeFile}
                    />
                    <label htmlFor='filesPick' className={styles.fileOpen}>выберите файл</label>

                    <div className={styles.fileTextUpload}>Файл успешно загружен</div>
                  </div>

                  <span className={styles.span}>{errorMsg}</span>
                </div>

                <button
                  className={cn(styles.buttonDisabled, isValid && styles.button)} disabled={!isValid}
                  onClick={() => setOpened(false)}
                >
                  Отправить
                </button>
              </div>
            </form>

            <div className={styles.policy}>
              Нажимая кнопку “Отправить”, я соглашаюсь на обработку персональных данных в соответствии
              <Link href='' target='_blank' className={styles.link}>
                &nbsp; c политикой об обработке персональных данных
              </Link>
            </div>
          </div>
        )}
        <div className={cn(styles.formSendBefore, !opened && styles.formSend)}>
          <div className={styles.formSendText}>Cпасибо, мы с вами свяжемся.</div>
        </div>
      </div>
    </div >
  );
};
