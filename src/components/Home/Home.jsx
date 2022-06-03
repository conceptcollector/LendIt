import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import Search from '../Search/Search';

import './Home.css';
import Card from 'react-bootstrap/Card'
import {Grid} from '@mui/material';
import {spacing} from '@mui/system';

function Home() {
    const dispatch = useDispatch();
    const history = useHistory();
    const items = useSelector((store) => store.items);

    useEffect(() => {
        dispatch({ type: 'FETCH_ITEMS' });
    }, []);
    
    return (
        <div className="wrapper">
            <div className="one"></div>
            <Grid container>
                <div className="box">
                    <Search />
                    {items.map((item) => {
                        return (
                            <Card
                                onClick={() => {
                                    history.push(`/details/${item.id}`)
                                }}
                            >
                                <Card.Header className="card-header-color">
                                    {item.title}
                                </Card.Header>
                                <Grid
                                    item
                                    key={item.id}
                                >
                                    <Card.Body>
                                        <img
                                            src={item.cover}
                                        />
                                        <p>{item.comments}</p>
                                    </Card.Body>
                                    <Card.Footer>
                                    <a
                                        href={`mailto:${item.email_address}`}
                                    >📧</a>
                                    </Card.Footer>
                                </Grid>
                            </Card>
                        )})}
                    </div>
            </Grid>
        </div>
    )
}

export default Home;