import {useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import './EditItem.css';

function EditItem() {
    useEffect(() => {
        dispatch({
            type: 'FETCH_ITEM',
            payload: itemId
        })
    }, [itemId])

    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const itemId = params.id;
    const editItem = useSelector((store) => store.editItem)
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'UPDATE_ITEM',
            payload: editItem
        })
        history.push('/profile');
    }
       
    return (
        <form
            onSubmit={handleSubmit}
        >
            <input
                value={editItem.title}
                onChange={(e) => {
                    dispatch({
                        type: 'EDIT_TITLE',
                        payload: e.target.value
                    })
                }}
            >
            </input>
            <input
                value={editItem.author}
                onChange={(e) => {
                    dispatch({
                        type: 'EDIT_AUTHOR',
                        payload: e.target.value
                    })
                }}
            >
            </input>
            <input
                value={editItem.cover}
                onChange={(e) => {
                    dispatch({
                        type: 'EDIT_COVER',
                        payload: e.target.value
                    })
                }}
            >
            </input>
            <input
                value={editItem.media_type}
                onChange={(e) => {
                    console.log('editItem.media_type', editItem.media_type);
                    dispatch({
                        type: 'EDIT_MEDIA_TYPE',
                        payload: e.target.value
                    })
                }}
            >
            </input>
            <input
                value={editItem.comments}
                onChange={(e) => {
                    dispatch({
                        type: 'EDIT_COMMENTS',
                        payload: e.target.value
                    })
                }}
            >
            </input>
            <button>Submit</button>
        </form>
    )
}

export default EditItem;