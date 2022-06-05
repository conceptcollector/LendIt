import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import './AddItem.css';
import {TextField, Button} from '@mui/material';

function AddItem() {

    const [itemTitle, setItemTitle] = useState('');
    const [itemAuthor, setItemAuthor] = useState('');
    const [itemCover, setItemCover] = useState('');
    const [itemMediaType, setItemMediaType] = useState('');
    const [itemComments, setItemComments] = useState('');

    const history = useHistory();

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_ITEM',
            payload: {
                itemTitle,
                itemAuthor,
                itemCover,
                itemMediaType,
                itemComments
            }
        })
        history.push('/Profile');
    }

    return (
        <div id="add-item">
            <div></div>
            <form
                id ="add-item-form"
                onSubmit={handleSubmit}
            >
                <TextField
                    id="add-item-title"
                    required
                    variant="standard"
                    color="tertiary"
                    sx={{mt: 4}}
                    style={{width: "50%"}}
                    onChange={(e) => setItemTitle(e.target.value)}
                    placeholder="title"
                    value={itemTitle}
                >
                </TextField>
                <TextField
                    id="add-item-author"
                    variant="standard"
                    color="tertiary"
                    sx={{mt: 4}}
                    style={{width: "50%"}}
                    onChange={(e) => setItemAuthor(e.target.value)}
                    placeholder="author"
                    value={itemAuthor}
                >
                </TextField>
                <TextField
                    id="add-item-cover"
                    variant="standard"
                    color="tertiary"
                    sx={{mt: 4}}
                    style={{width: "50%"}}
                    onChange={(e) => setItemCover(e.target.value)}
                    placeholder="cover (url)"
                    value={itemCover}
                >
                </TextField>
                <TextField
                    id="add-item-media-type"
                    variant="standard"
                    color="tertiary"
                    sx={{mt: 4}}
                    style={{width: "50%"}}
                    onChange={(e) => setItemMediaType(e.target.value)}
                    placeholder="media type"
                    value={itemMediaType}
                >
                </TextField>
                <TextField
                    id="add-item-comments"
                    variant="standard"
                    color="tertiary"
                    multiline
                    rows={5}
                    maxRows={10}
                    sx={{mt: 4, mr: 17}}
                    onChange={(e) => setItemComments(e.target.value)}
                    placeholder="comments"
                    value={itemComments}
                >
                </TextField>
                <Button
                    id="actual-add-item-button"
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

export default AddItem;