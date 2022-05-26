import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

function AddItem() {

    const [itemTitle, setItemTitle] = useState('');
    const [itemAuthor, setItemAuthor] = useState('');
    const [itemCover, setItemCover] = useState('');
    const [itemMediaType, setItemMediaType] = useState('');
    const [itemComments, setItemComments] = useState('');

    const history = useHistory();

    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_ITEM',
            payload: {
                itemTitle,
                itemAuthor,
                itemCover,
                itemMediaType,
                itemComments,
                user_id: user.id
            }
        })
        history.push('/Profile');
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <input
                onChange={(e) => setItemTitle(e.target.value)}
                placeholder="title"
                value={itemTitle}
            >
            </input>
            <input
                onChange={(e) => setItemAuthor(e.target.value)}
                placeholder="author"
                value={itemAuthor}
            >
            </input>
            <input
                onChange={(e) => setItemCover(e.target.value)}
                placeholder="cover (url)"
                value={itemCover}
            >
            </input>
            <input
                onChange={(e) => setItemMediaType(e.target.value)}
                placeholder="media type"
                value={itemMediaType}
            >
            </input>
            <input
                onChange={(e) => setItemComments(e.target.value)}
                placeholder="comments"
                value={itemComments}
            >
            </input>
            <button>Submit</button>
        </form>
    )
}

export default AddItem;