import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { Form, Bottom, LimitSize } from './styles';
import { Schema } from './validation';
import { Input, Button, Textarea, InputAdd } from '~/components/elements';
import { Creators as ProcessActions } from '~/store/ducks/process';

export default function FormProcess() {
  const dispatch = useDispatch();
  const process = useSelector(state => state.search.data);
  const idEdit = useSelector(state => state.portals.id);
  const findItem = process.find(item => item.id === idEdit);

  // INITIAL STATES
  const initialInterests = findItem ? findItem.interessados : [];
  const initialState = {
    subject: findItem ? findItem.assunto : '',
    description: findItem ? findItem.descricao : '',
  };

  const [add, setAdd] = useState(initialInterests);

  function addItems(val) {
    setAdd([...add, val]);
  }
  function removeItem(val) {
    setAdd(add.filter(item => item !== val));
  }

  return (
    <Formik
      initialValues={initialState}
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
          <LimitSize>
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
          </LimitSize>
          <LimitSize>
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
              removeItem={removeItem}
              name="interested"
            />
          </LimitSize>
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
          <Bottom>
            <Button type={idEdit ? 'button' : 'submit'}>
              {idEdit ? 'EDITAR' : 'CADASTRAR'}
            </Button>
          </Bottom>
        </Form>
      )}
    </Formik>
  );
}
