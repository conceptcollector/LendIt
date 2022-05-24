import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './Home.css';

function Home() {
    const dispatch = useDispatch();
    const items = useSelector(store => store.items);
    // const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_ITEMS' });
    }, []);


    return (
        <ul>
            {items.map((item) => {
                return (<li key={item.id}>
                    <img 
                        src={item.cover}
                    />
                    {item.title}
                </li>
            )})}
        </ul>
    )
}

export default Home;