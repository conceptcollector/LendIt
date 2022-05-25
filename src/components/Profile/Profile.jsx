import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Grid from '@material-ui/core/Grid';

function Profile() {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const items = useSelector((store) => store.items);

    useEffect(() => {
        dispatch({type: 'FETCH_USER_ITEMS'});
      }, []);

    return (
        <>
            <h1>Welcome {user.username}!</h1>
            <button>Add Item</button>
            <h2>lendIt Inventory:</h2>
        </>
    )
}

export default Profile;