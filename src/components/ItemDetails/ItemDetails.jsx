import {useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

function ItemDetails() {
    useEffect(() => {
        dispatch({
            type: 'FETCH_ITEM',
            payload: itemId
        })
    }, [itemId])

    const params = useParams();
    // const history = useHistory();
    const dispatch = useDispatch();
    const itemId = params.id;
    const item = useSelector((store) => store.editItem)
    
    
    return (
        <>
            <img
                className="details-cover"
                src={item.cover}
            />
            <h1 className="details-title">
                {item.title}
            </h1>
            <h2 className="details-author">
                {item.author}
            </h2>
            <p>
                {item.comments}
            </p>
            <button>📧</button>
        </>
    )
}

export default ItemDetails;