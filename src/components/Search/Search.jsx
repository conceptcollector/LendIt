import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import {Box} from '@mui/system';

function Search() {
    const [value, setValue] = useState('');
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const items = useSelector((store) => store.items);

    useEffect(() => {
        dispatch({ type: 'FETCH_ITEMS' });
    }, []);

    console.log('**************************************************************************************************', items);

    return (
        <Stack sx={{
            width: 300,
        }}>
            <Autocomplete
                id="search-bar"
                freeSolo
                options={items.map((option) => option.title)}
                value={value}
                inputValue={inputValue}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                renderInput={(params) => <TextField {...params} label="Search" />}
            />
            <button>Search</button>
        </Stack>
    )
}

export default Search;