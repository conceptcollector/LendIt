import {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import Search from '../Search/Search';

import './Home.css';
import { Box } from '@mui/material';

function Home() {
    const dispatch = useDispatch();
    const items = useSelector((store) => store.items);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_RECENT_ITEMS' });
    }, []);
    
    return (
        <div id="home-wrapper">
            <div id="home-one">
                <div></div>
                {/* <Footer /> */}
            </div>
            <div id="home-two">
                <Search />
                <Box id="home-items">
                    {items.recentItemsReducer.map((item) => {
                        return (
                            <Box
                                className="home-each-box"
                                key={item.id}
                            >
                                <div
                                    className="each-box-one"
                                    color="#fafafa"
                                    onClick={() => {
                                        history.push(`/details/${item.id}`);
                                    }}
                                >
                                    <center>
                                        {item.title}
                                    </center>
                                </div>
                                <div
                                    className="each-box-two"
                                >
                                    <center>
                                    <img
                                        className="home-cover"
                                        color="#222"
                                        src={item.cover}
                                        onClick={() => {
                                            history.push(`/details/${item.id}`);
                                        }}
                                    />
                                    </center>
                                </div>
                            </Box>
                    )})}
                </Box>
            </div>
        </div>
    )
}

export default Home;