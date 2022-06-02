import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import Search from '../Search/Search';

import './Home.css';
import {Box} from '@mui/material';
import {Card} from '@mui/material';
import {Grid} from '@mui/material';

function Home() {
    const dispatch = useDispatch();
    const history = useHistory();
    const items = useSelector((store) => store.items);

    const cardStyle = {
        width: '60vw',
        height: '5vw'
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_ITEMS' });
    }, []);
    
    return (
        <>
            <Search />
            <Grid
                container
                sx={{
                    justifyContent: 'flex-end'
                }}
            >
                {items.map((item) => {
                    return (
                        <Box
                            sx={{
                                backgroundColor: 'secondary'
                            }}
                        >
                            <Card style={cardStyle}>
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
                            </Card>
                        </Box>
                    )})}
            </Grid>
        </>
    )
}

export default Home;