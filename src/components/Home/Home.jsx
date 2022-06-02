import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Grid from '@mui/material/Grid';

import './Home.css';
import Search from '../Search/Search';

function Home() {
    const dispatch = useDispatch();
    const history = useHistory();
    const items = useSelector((store) => store.items);

    useEffect(() => {
        dispatch({ type: 'FETCH_ITEMS' });
    }, []);
    
    return (
        <>
        <Search />
        <Grid container>
                {items.map((item) => {
                    return (
                    <Grid
                        item
                        key={item.id}
                    >
                    <h3
                        onClick={() => {
                            history.push(`/details/${item.id}`)
                        }}
                    >
                        <img
                            src={item.cover}
                        />
                        {item.title}
                    </h3>
                    <a
                        href={`mailto:${item.email_address}`}
                    >📧</a>
                    </Grid>
                )})}
        </Grid>
        </>
    )
}

export default Home;