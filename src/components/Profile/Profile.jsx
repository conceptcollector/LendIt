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
        <div className="profile-rows">
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
                {/* <Footer /> */}
            </div>
            <div className="profile-two">
                <div>
                    <h1 id="profile-welcome">Welcome {user.username}!</h1>
                    <h5>Got a new favorite?</h5>
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
                                        margin="auto"
                                        backgroundColor="#fafafa"
                                        color="#222"
                                        src={item.cover}
                                    />
                                    {/* <p>
                                        {item.comments}
                                    </p> */}
                                    
                                </Card.Body>
                                <Card.Footer className="card-footer">
                                <Button
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
                                </Card.Footer>
                        </Card>
                        // <Grid item key={item.id}>
                        //     <img 
                        //         src={item.cover}
                        //     />
                        
                        //     <h3>
                        //         {item.title}
                        //     </h3>
                        //     <button
                        //         onClick={() => {
                        //             history.push(`/edit/${item.id}`)
                        //         }}
                        //     >
                        //         Edit
                        //     </button>
                        //     <button
                        //         onClick={() => {
                        //             dispatch({
                        //                 type: 'DELETE_ITEM',
                        //                 payload: item.id
                        //             })
                        //         }}
                        //     >
                        //         Delete
                        //     </button>
                        // </Grid>
                    )})}
            </div>
        </div>
    )
}

export default Profile;