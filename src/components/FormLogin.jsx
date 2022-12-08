import { useFormik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string().email('Email invalido').required(),
  password: Yup.string().min(1).required(),
});

export const FormLogin = () => {
  const submitForm = (values) => {};

  const { handleSubmit, handleChange, handleReset, errors, values } = useFormik(
    {
      initialValues: {
        email: '',
        password: '',
      },
      onSubmit: submitForm,
      validationSchema: schema,
    },
  );

  return (
    <div>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <input
          type='email'
          placeholder='email'
          name='email'
          value={values.email}
          onChange={handleChange}
          autoComplete='off'
        />
        <input
          type='password'
          placeholder='password'
          name='password'
          value={values.password}
          onChange={handleChange}
          autoComplete='off'
        />
        <button type='submit'>iniciar sesión</button>
        <button type='reset'>Limpiar</button>
        <br />
        {errors.email && <span>Email invalido</span>}
        {errors.password && (
          <span>La contraseña debe tener al menos 1 caracter</span>
        )}
      </form>
    </div>
  );
};
