import {useEffect} from 'react';

function EditItem() {
    useEffect(() => {
        dispatchEvent({
            type: 'FETCH_ITEM',
            payload: item.id
        })
    })

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

export default EditItem;