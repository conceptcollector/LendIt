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
    </Box>
  );
}

export default LoginPage;
