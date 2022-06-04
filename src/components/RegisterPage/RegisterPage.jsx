import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

import {Button} from '@mui/material';
import './RegisterPage.css';

function RegisterPage() {
  const history = useHistory();

  return (
    <div>
      <RegisterForm />
      <center>
        <Button
          variant="contained"
          size="large"
          color="primary"
          onClick={() => {
            history.push('/login');
          }}
        >
          Log in
        </Button>
      </center>
      {/* <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </button>
      </center> */}
    </div>
  );
}

export default RegisterPage;
