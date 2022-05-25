import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import './LoginPage.css';

function LoginPage() {
  const history = useHistory();

  return (
    <Box>
      <LoginForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
      </center>
    </Box>
  );
}

export default LoginPage;
