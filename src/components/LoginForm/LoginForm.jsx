import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
// import userOperations from 'redux/auth/auth-operatons';
import { useUserLoginMutation } from 'redux/auth/auth-slice';

export let token = null;

const LoginForm = ({setIsLogIn, setName}) => {
  const { handleSubmit, register, reset } = useForm();

  const [userLogin] = useUserLoginMutation();

  // const dispatch = useDispatch();

  const onFormSubmit = async ({ email, password }) => {
    const user = {
      email,
      password,
    };

    const res = await userLogin(user);

    token = res.data.token;
    setIsLogIn(true)
    setName(res.data.user.name)

    // dispatch(userOperations.logIn({  email, password }))

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <label>
        Email
        <input type="text" {...register('email')} />
      </label>
      <label>
        Password
        <input type="text" {...register('password')} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
