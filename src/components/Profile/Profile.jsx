import React from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import Grid from '@material-ui/core/Grid';

function Profile() {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const items = useSelector((store) => store.items);

    useEffect(() => {
        dispatch({type: 'FETCH_USER_ITEMS'});
      }, [dispatch]);

    return (
        <>
            <h1>Welcome {user.username}!</h1>
            <h2>lendIt Inventory:</h2>
            <Grid container>
                {items.map((item) => {
                    return (
                    <Grid item>
                    <h3 key={item.id}>
                        <img 
                            src={item.cover}
                        />
                        {item.title}
                    </h3>
                    </Grid>
                )})}
            </Grid>
        </>
    )
}

export default Profile;