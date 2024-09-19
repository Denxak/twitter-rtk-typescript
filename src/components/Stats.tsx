import Avatar from './Avatar'
import { changeStat } from '../features/stats/statsSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';

const Stats = () => {
    const dispatch = useAppDispatch();
    const {name} = useAppSelector(state => state.user);
    const {followers, following} = useAppSelector(state => state.stats);
    return (
        <div className='user-stats'>
            <div>
                <Avatar />
                {name}
            </div>
            <div className='stats'>
                <div
                    onClick={() => { dispatch(changeStat('followers', 1)); }}
                    onContextMenu={e => {
                        e.preventDefault();
                        dispatch(changeStat('followers', -1));
                    }}>
                    Followers: {followers}
                </div>
                <div
                    onClick={() => { dispatch(changeStat('following', 1)); }}
                    onContextMenu={e => {
                        e.preventDefault();
                        dispatch(changeStat('following', -1));
                    }}>
                    Following: {following}
                </div>
            </div>
        </div>
    )
}

export default Stats