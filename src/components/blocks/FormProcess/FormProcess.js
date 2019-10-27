import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from './styles';
import { Formik } from 'formik';
import { Schema } from './validation';
import { Input, Button, Textarea, InputAdd } from '~/components/elements';
import { Creators as ProcessActions } from '~/store/ducks/process';

export default function FormProcess() {
  const dispatch = useDispatch();
  const [add, setAdd] = useState([]);

  function addItems(val) {
    setAdd([...add, val]);
  }

  return (
    <Formik
      initialValues={{ subject: '' }}
      validationSchema={Schema}
      onSubmit={values => {
        const items = {
          assunto: values.subject,
          interessados: add,
          descricao: values.subject,
        };

        dispatch(ProcessActions.registerRequest(items, 'dashboard'));
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Input
            label="Assunto"
            htmlfor="subject"
            type="text"
            level="normal"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.subject}
            name="subject"
            errors={errors.subject && touched.subject && errors.subject}
          />
          <InputAdd
            title="Interessados"
            label="Novo interessado"
            items={add}
            type="text"
            level="normal"
            onChange={setFieldValue}
            onBlur={handleBlur}
            value={values.interested}
            addItems={addItems}
            name="interested"
          />
          <Textarea
            label="Descrição"
            htmlfor="description"
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
          <Button type="submit">CADASTRAR</Button>
        </Form>
      )}
    </Formik>
  );
}
