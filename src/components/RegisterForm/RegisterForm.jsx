// import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import userOperations from 'redux/auth/auth-operatons';
// import { useUserRegisterMutation } from 'redux/auth/auth-slice';

const RegisterForm =  () => {
  const { handleSubmit, register, reset } = useForm();

//   const [token ,setToken] = useState()
//   const [userRgister] = useUserRegisterMutation()

const dispatch = useDispatch()

  const onFormSubmit = async ({ name, email, password }) => {
    // const user = {
    //   name,
    //   email,
    //   password,
    // };

    // const res = await userRgister(user)
    // setToken(res.data.token)
    // console.log("onFormSubmit ~ data", res);
    dispatch(userOperations.register({ name, email, password }))
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <label>
        Name
        <input type="text" {...register('name')} />
      </label>
      <label>
        Email
        <input type="text" {...register('email')} />
      </label>
      <label>
        Password
        <input type="text" {...register('password')} />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
