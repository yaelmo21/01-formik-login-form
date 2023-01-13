import React from 'react';
import { FormLogin } from './components/FormLogin';
import { FormRegister } from './components/FormRegister';

export const FormLoginApp = () => {
  return (
    <div>
      <FormLogin />
      <hr />
      <h2>Formulario de registro</h2>
      <FormRegister />
    </div>
  );
};
