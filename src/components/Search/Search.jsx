import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Stack, TextField } from '@mui/material';

function Search() {
    // const [ value, setValue ] = useState();
    // const [ inputValue, setInputValue ] = useState();
    const dispatch = useDispatch();
    const items = useSelector((store) => store.items);
    const history = useHistory();
    const handleSearch = () => {
        console.log('Yo');
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_ITEMS' });
    }, []);

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
                <form
                    onSubmit={handleSearch}
                >
                    <TextField
                        variant="standard"
                        label="Search"
                        sx={{
                            width: 300,
                            backgroundColor: 'white'
                        }}
                    />
                    <Button
                        variant="contained"
                        type="submit"
                        sx={{ width: 300 }}
                    >
                        Search
                    </Button>
                </form>
            </Box>
        </Box>
    )
}

export default Search;