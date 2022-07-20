import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Autocomplete, Box, Button, Stack, TextField } from '@mui/material';

function Search() {
    const [ value, setValue ] = useState('');
    const [ inputValue, setInputValue ] = useState('');
    const dispatch = useDispatch();
    const items = useSelector((store) => store.items);

    useEffect(() => {
        dispatch({ type: 'FETCH_ITEMS' });
    }, []);

    console.log('**************************************************************************************************', items);

    return (
        <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
        >
            <Box
                display="flex"
                flexDirection="column"
            >
                <Autocomplete
                    id="search-bar"
                    freeSolo
                    options={items.itemsReducer.map((option) => option.title)}
                    sx={{
                        backgroundColor: 'white',
                        width: 300
                    }}
                    value={value}
                    inputValue={inputValue}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                    }}
                    renderInput={(params) => 
                    <TextField
                        {...params}
                        variant="standard"
                        label="Search"
                    />}
                />
                <Button
                    variant="contained"
                    sx={{ width: 300 }}
                >
                    Search
                </Button>
            </Box>
        </Box>
    )
}

export default Search;