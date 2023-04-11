import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
    const dispatch = useDispatch();
    
    const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
    };
    
   return <form onSubmit={handleSubmit}>
        <input placeholder="name" name="name"></input>
        <input placeholder="email" name="email"></input>
        <input placeholder="password" name="password"></input>
        <button>Sign up</button>
    </form>
}