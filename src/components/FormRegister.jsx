import { FieldArray, Formik } from 'formik';
import React from 'react';

const initialValues = {
  nombre: '',
  edad: '',
  telefonos: [],
};

export const FormRegister = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  const telefonosItems = (arrayHelper, values, handleChange) => {
    const { push, remove } = arrayHelper;
    return (
      <div>
        <h3>Telefonos</h3>
        {values.telefonos.map((_, index) => (
          <div key={index}>
            <input
              placeholder={`teléfono ${index + 1}`}
              value={values.telefonos[index]}
              name={`telefonos.${index}`}
              onChange={handleChange}
            />
            <button type='button' onClick={() => remove(index)}>
              remover
            </button>
          </div>
        ))}
        <div>
          <button type='button' onClick={() => push('')}>
            Agregar
          </button>
        </div>
      </div>
    );
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, handleChange, handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <input
            placeholder='Nombre'
            name='nombre'
            type='text'
            value={values.nombre}
            onChange={handleChange}
          />
          <input
            placeholder='Edad'
            name='edad'
            type='number'
            value={values.edad}
            onChange={handleChange}
          />
          <FieldArray
            name='telefonos'
            render={(arrayHelper) =>
              telefonosItems(arrayHelper, values, handleChange)
            }
          />
          <div>
            <button type='submit'>Guardar</button>
          </div>
        </form>
      )}
    </Formik>
  );
};
