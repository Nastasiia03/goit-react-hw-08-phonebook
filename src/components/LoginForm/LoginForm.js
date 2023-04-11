import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
    const dispatch = useDispatch();
    
    const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
    };
    
   return <form onSubmit={handleSubmit}>
        <input placeholder="email" name="email"></input>
        <input placeholder="password" name="password"></input>
        <button>Sign in</button>
    </form>
}