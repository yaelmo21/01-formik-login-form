import { useFormik } from 'formik';
import React from 'react';

export const FormLogin = () => {
  const submitForm = (values) => {};

  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: submitForm,
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='email'
          name='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='password'
          name='password'
          onChange={handleChange}
        />
        <button type='submit'>iniciar sesión</button>
      </form>
    </div>
  );
};
