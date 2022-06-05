import {useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import './EditItem.css';
import {TextField, Button} from '@mui/material';

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
        <div id="edit-item">
            <div></div>
            <form
                id="edit-item-form"
                onSubmit={handleSubmit}
            >
                <TextField
                    id="edit-item-title"
                    variant="standard"
                    color="tertiary"
                    sx={{mt: 4}}
                    style={{width: "50%"}}
                    value={editItem.title}
                    onChange={(e) => {
                        dispatch({
                            type: 'EDIT_TITLE',
                            payload: e.target.value
                        })
                    }}
                >
                </TextField>
                <TextField
                    id="edit-item-author"
                    variant="standard"
                    color="tertiary"
                    sx={{mt: 4}}
                    style={{width: "50%"}}
                    value={editItem.author}
                    onChange={(e) => {
                        dispatch({
                            type: 'EDIT_AUTHOR',
                            payload: e.target.value
                        })
                    }}
                >
                </TextField>
                <TextField
                    id="edit-item-cover"
                    variant="standard"
                    color="tertiary"
                    sx={{mt: 4}}
                    style={{width: "50%"}}
                    value={editItem.cover}
                    onChange={(e) => {
                        dispatch({
                            type: 'EDIT_COVER',
                            payload: e.target.value
                        })
                    }}
                >
                </TextField>
                <TextField
                    id="edit-item-media-type"
                    variant="standard"
                    color="tertiary"
                    sx={{mt: 4}}
                    style={{width: "50%"}}
                    value={editItem.media_type}
                    onChange={(e) => {
                        console.log('editItem.media_type', editItem.media_type);
                        dispatch({
                            type: 'EDIT_MEDIA_TYPE',
                            payload: e.target.value
                        })
                    }}
                >
                </TextField>
                <TextField
                    id="edit-item-comments"
                    variant="standard"
                    color="tertiary"
                    multiline
                    rows={5}
                    maxRows={10}
                    sx={{mt: 4, mr: 17}}
                    value={editItem.comments}
                    onChange={(e) => {
                        dispatch({
                            type: 'EDIT_COMMENTS',
                            payload: e.target.value
                        })
                    }}
                >
                </TextField>
                <Button
                    id="edit-item-button"
                    type="submit"
                    variant="contained"
                    size="large"
                    color="tertiary"
                    sx={{mt: 4, ml: 10}}
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default EditItem;