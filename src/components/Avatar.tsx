import { useDispatch } from 'react-redux';
import { changeAvatar, changeName } from '../features/user/userSlice';
import { useAppSelector } from '../app/hooks';

interface avatarProps { size?: 'small' }

const Avatar = ({ size }: avatarProps) => {
    const dispatch = useDispatch();
    const {avatar, name} = useAppSelector(state => state.user);
    return (
        <img
            onClick={() => {
                const url = prompt('Enter new avatar url')
                dispatch(changeAvatar(url));
            }}
            onContextMenu={e => {
                e.preventDefault();
                const name = prompt('Enter new name')
                dispatch(changeName(name));
            }}
            className={`user-avatar ${size ?? ''}`}
            src={avatar}
            alt={name} />
    )
}

export default Avatar