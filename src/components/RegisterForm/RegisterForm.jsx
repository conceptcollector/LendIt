import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Button} from '@mui/material';
import {TextField} from '@mui/material';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}

<div>
          
          <TextField
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

      {/* <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div> */}
    </form>
  );
}

export default RegisterForm;
