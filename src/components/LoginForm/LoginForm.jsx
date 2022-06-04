import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

import {Button} from '@mui/material';
import {TextField} from '@mui/material';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form className="formPanel" onSubmit={login}>
      <h2>Login</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}

        <div>
          
          <TextField
            required
            id="standard-required"
            label="Username"
            variant="standard"
            color="outline"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />

        </div>

        <div>

          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            color="outline"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

        </div>

        <Button 
          variant="outlined"
          color="outline"
          sx={{mt: 1.5}}
          size="medium"
          type="submit"
        >
          Log In
        </Button>
    </form>
  );
}

export default LoginForm;