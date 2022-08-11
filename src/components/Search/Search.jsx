import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Autocomplete, Box, Button, Stack, TextField } from '@mui/material';

function Search() {
    useEffect(() => {
        dispatch({ type: 'FETCH_ITEMS' });
    }, []);
    const query = useRef();
    const dispatch = useDispatch();
    const items = useSelector((store) => store.items.itemsReducer);
    const history = useHistory();
    const handleSearch = (e) => {
        e.preventDefault();
        const queryVal = query.current.value;

    }


    return (
        <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
        >
            <form
                onSubmit={handleSearch}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                >
                    <Autocomplete
                        freeSolo
                        options={items.map((option) => option)}
                        getOptionLabel={(option) => `${option.title}`}
                        renderOption={(props, option) => {
                            return (
                                <li
                                    {...props}
                                    key={option.id}
                                    onClick={() => {
                                        history.push(`/details/${option.id}`);
                                    }}
                                >
                                    {option.title}
                                </li>
                            )
                        }}
                        renderInput={(params) =>
                            <TextField
                                {...params}
                                variant="standard"
                                label="Search"
                                inputRef={query}
                                sx={{
                                    width: 300,
                                    backgroundColor: 'white'
                                }}
                            />
                            {/* <Button
                                variant="contained"
                                type="submit"
                                sx={{ width: 300 }}
                            >
                                Search
                            </Button> */}
                        }
                    />
                    
            </Box>
                </form>
        </Box>
    )
}

export default Search;