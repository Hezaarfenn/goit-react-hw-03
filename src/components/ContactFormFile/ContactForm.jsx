import styles from './ContactForm.module.css';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'En az 3 karakter olmalıdır.')
    .max(50, 'En fazla 50 karakter olmalıdır.')
    .required('Required'),
  number: Yup.string()
    .min(2, 'En az 3 karakter olmalıdır.')
    .max(50, 'En fazla 50 karakter olmalıdır.')
    .required('Required'),
});

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    onAddContact(values.name, values.number);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label}>Name</label>
        <Field className={styles.input} type="text" name="name" />
        <ErrorMessage name="name" component="div" className={styles.error} />

        <label className={styles.label}>Number</label>
        <Field className={styles.input} type="tel" name="number" />
        <ErrorMessage name="number" component="div" className={styles.error} />

        <button className={styles.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
