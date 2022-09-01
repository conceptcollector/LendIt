import {useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import './ItemDetails.css';

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
    const item = useSelector((store) => store.editItem);
    
    
    return (
        <div className="details-wrapper">
            <div className="details-one"></div>
            <div className="details-two">
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
            <a
                href={`mailto:${item.email_address}`}
            >📧</a>
            </div>
        </div>
    )
}

export default ItemDetails;