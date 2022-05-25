import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import './Home.css';

function Home() {
    const dispatch = useDispatch();
    const items = useSelector(store => store.items);
    // const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_ITEMS' });
    }, []);


    return (
        <Grid container>
                {items.map((item) => {
                    return (
                    <Grid item key={item.id}>
                    <h3>
                        <img 
                            src={item.cover}
                        />
                        {item.title}
                    </h3>
                    </Grid>
                )})}
        </Grid>
    )
}

export default Home;