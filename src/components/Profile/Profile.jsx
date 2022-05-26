import {useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Grid from '@material-ui/core/Grid';

function Profile() {
    useEffect(() => {
        console.log(user);
        dispatch({
            type: 'FETCH_USER_ITEMS',
            payload: user.id
        });
    }, []);
    
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const params = useParams();
    const history = useHistory();
    // const items = useSelector((store) => store.items);

    return (
        <>
            <h1>Welcome {user.username}!</h1>
            <button
                onClick={() => {
                    history.push('/addItem')
                }}
            >
                Add Item
            </button>
            <h2>lendIt Inventory:</h2>
        </>
    )
}

export default Profile;