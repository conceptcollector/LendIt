const editItemsReducer = (state = {}, action) => {
    if (action.type === 'SET_EDIT_ITEM') {
      return action.payload;
    } else if (action.type === 'EDIT_TITLE') {
      return (
        {
          ...state,
          title: action.payload,
        }
      )
    } else if (action.type === 'EDIT_AUTHOR') {
      return (
        {
          ...state,
          author: action.payload
        }
      )
    } else if (action.type === 'EDIT_COVER') {
        return (
          {
            ...state,
            cover: action.payload,
          }
        )
    } else if (action.type === 'EDIT_MEDIA_TYPE') {
        return (
          {
            ...state,
            mediaType: action.payload,
          }
        )
    } else if (action.type === 'EDIT_COMMENTS') {
        return (
          {
            ...state,
            comments: action.payload,
          }
        )
    }
    return state;
  }

  export default editItemsReducer;