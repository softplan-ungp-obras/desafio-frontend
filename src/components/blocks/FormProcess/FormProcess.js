import React from 'react';
import { Formik } from 'formik';
import { Schema } from './validation';
import { Input, Button, Textarea } from '~/components/elements';
// import { Container } from './styles';

export default function FormProcess() {
  return (
    <Formik
      initialValues={{ subject: '' }}
      validationSchema={Schema}
      onSubmit={values => {
        console.log('VALUES', values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            level="normal"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.subject}
            name="subject"
            errors={errors.subject && touched.subject && errors.subject}
          />
          <Input
            type="text"
            level="normal"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.interested}
            name="interested"
            errors={
              errors.interested && touched.interested && errors.interested
            }
          />
          <Textarea
            type="text"
            level="normal"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
            name="description"
            errors={
              errors.description && touched.description && errors.description
            }
          />
          <Button type="submit">Enviar</Button>
        </form>
      )}
    </Formik>
  );
}
