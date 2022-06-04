import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

// import Search from '../Search/Search';

import './Home.css';
import Card from 'react-bootstrap/Card'

function Home() {
    const dispatch = useDispatch();
    const history = useHistory();
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
                                className="each-card"
                                key={item.id}
                            >
                                <Card.Header
                                    className="card-header"
                                    color="#fafafa"
                                >
                                    {item.title}
                                </Card.Header>
                                <Card.Body
                                    className="card-body"
                                >
                                    <img
                                        backgroundColor="#fafafa"
                                        color="#222"
                                        src={item.cover}
                                    />
                                    <p>
                                        {item.comments}
                                    </p>
                                    
                                </Card.Body>
                                <Card.Footer className="card-footer">
                                    <a
                                        margin="auto"
                                        href={`mailto:${item.email_address}`}
                                    >📧</a>
                                </Card.Footer>
                        </Card>
                    )})}
            </div>
        </div>
    )
}

export default Home;