import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {useHistory} from 'react-router-dom';

function Home() {
    const dispatch = useDispatch();
    const items = useSelector(store => store.items);
    // const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_ITEMS' });
    }, []);


    return (
        <>
        <p>You're Home</p>
        <ul>
            {items.map((item) => {
                <li key={item.id}>
                    {item.title}
                </li>
            })}
        </ul>
        </>
        )
        }

export default Home;