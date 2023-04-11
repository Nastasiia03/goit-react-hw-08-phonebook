import { useDispatch } from 'react-redux';
// import { useAuth } from 'hooks/UseAuth';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
    const dispatch = useDispatch();
    // const { user } = useAuth();

    return <div>
  <p>UserMail</p>
        <button type="button" onClick={() => dispatch(logOut())}>Logout</button>
</div>
}