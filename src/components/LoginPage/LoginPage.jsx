import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

import './LoginPage.css';
import {Button} from '@mui/material';

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <LoginForm />
      <center>
        <div>
          <h4 className="highlight-registry">Need an account?</h4>
        </div>
        <Button
          variant="contained"
          size="large"
          color="primary"
          // className="registration-button"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </Button>
      </center>
    </div>
  );
}

export default LoginPage;
