import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

// import Search from '../Search/Search';

import './Home.css';
import Card from 'react-bootstrap/Card';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function Home() {
    const dispatch = useDispatch();
    const items = useSelector((store) => store.items);

    useEffect(() => {
        dispatch({ type: 'FETCH_ITEMS' });
    }, []);
    
    return (
        <div className="wrapper">
            <div className="one">
                <div></div>
                {/* <Footer /> */}
            </div>
            <div className="box">
                {/* <Search /> */}
                    {items.map((item) => {
                        return (
                            <Card
                                className="home-each-card"
                                key={item.id}
                            >
                                <Card.Header
                                    className="card-header"
                                    color="#fafafa"
                                >
                                    <center>
                                        {item.title} - {item.author}
                                    </center>
                                </Card.Header>
                                <Card.Body
                                    className="card-body"
                                >
                                    {/* <center> */}
                                    <img
                                        className="home-cover"
                                        backgroundColor="#fafafa"
                                        color="#222"
                                        src={item.cover}
                                    />
                                    {/* </center> */}
                                    <p className="home-comments">
                                        {item.comments}
                                    </p>
                                    
                                </Card.Body>
                                <Card.Footer className="card-footer">
                                    <center>
                                        <a
                                            href={`mailto:${item.email_address}?Subject=${item.title}`}
                                            target="_blank"
                                        >
                                            <EmailOutlinedIcon
                                                color="outline"
                                            />
                                        </a>
                                    </center>
                                </Card.Footer>
                        </Card>
                    )})}
            </div>
        </div>
    )
}

export default Home;