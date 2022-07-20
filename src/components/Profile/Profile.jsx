import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

// import Footer from '../Footer/Footer';

import Card from 'react-bootstrap/Card';
import {Button} from '@mui/material';
import './Profile.css';

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
    const history = useHistory();
    const items = useSelector((store) => store.items);
    const [emailAddress, setEmailAddress] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_EMAIL_ADDRESS',
            payload: emailAddress
        })
        setEmailAddress('');
    }

    return (
        <div id="profile">
            <div className="profile-one">
                {user.emailAddress ?
                <div>

                    <h4>Add your email address to connect with other users:</h4>
                    <form
                        onSubmit={handleSubmit}
                    >
                        <input
                            placeholder='email address'
                            type="email"
                            onChange={(e) => setEmailAddress(e.target.value)}
                            value={emailAddress}
                        >
                        </input>
                        <Button>Submit</Button>
                    </form>
                </div>
                :
                <div></div>
                }
            </div>

            <div className="profile-two">

                <div id="profile-welcome">
                    <center>
                        <h1>Welcome {user.username}!</h1>
                        <h5>Got a new favorite?</h5>
                    </center>
                </div>
                <div id="add-item-button">
                    <Button
                        variant="contained"
                        onClick={() => {
                            history.push('/addItem')
                        }}
                    >
                        Add Item
                    </Button>
                </div>
                <h2 className="inventory">LendIt Inventory:</h2>
            </div>

            <div className="profile-three">
                {items.itemsReducer.map((item) => {
                    return (
                        <Card
                                className="profile-each-card"
                                key={item.id}
                            >
                                <Card.Body
                                    className="card-body"
                                >
                                    <img
                                        class="profile-image"
                                        style={{mt: 2}}
                                        backgroundColor="#fafafa"
                                        color="#222"
                                        src={item.cover}
                                    />
                                    {/* <p>
                                        {item.comments}
                                    </p> */}
                                    
                                </Card.Body>
                                <Card.Footer className="card-footer">
                                    <center>
                                        <Button
                                            color="outline"
                                            onClick={() => {
                                                history.push(`/edit/${item.id}`)
                                            }}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            color="outline"
                                            onClick={() => {
                                                dispatch({
                                                    type: 'DELETE_ITEM',
                                                    payload: item.id
                                                })
                                            }}
                                        >
                                            Delete
                                        </Button>
                                    </center>
                                </Card.Footer>
                        </Card>
                    )})}
            </div>
        </div>
    )
}

export default Profile;