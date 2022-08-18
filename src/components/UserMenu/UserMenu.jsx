import { useUserLogOutMutation } from 'redux/auth/auth-slice';
// import { useDispatch } from "react-redux";
// import userOperations from "redux/auth/auth-operatons";

// token = 0
const UserMenu = ({setIsLogIn, setName, name}) => {
  const [userLogOut] = useUserLogOutMutation();
  // const dispatch = useDispatch();

  const logOut = () => {
    console.log('LOGOUT');

    userLogOut();
    setIsLogIn(false)
    setName(null)

    // dispatch(userOperations.logOut())
  };
  return (
    <div>
      <button type="button" onClick={logOut}>
        LOGOUT
      </button>
      <h1>{name ? `Hello ${name} `: 'Welcome'}</h1>
    </div>
  );
};

export default UserMenu;
