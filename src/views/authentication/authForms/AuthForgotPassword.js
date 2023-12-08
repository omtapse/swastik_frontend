import React, { useState } from 'react';
import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import { notification } from 'antd';
import routes from '../../../utils/routes';

const AuthForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleforgetpassword = async () => {
    try {
      if (!email) {
        notification.error({
          message: "Please enter registered email",
          placement: "top"
        })
        return;
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        notification.error({
          message: "Please enter valid email",
          placement: "top"
        })
        return;
      }

      const res = await routes.APIS.GENERATE_RESET_PASSWORD_LINK({ email });
      if (res.status === 200) {
        notification.success({
          message: "Reset Password Link Sent to your email address",
          placement: "top"
        })
      } else {
        notification.error({
          message: "Something went wrong",
          placement: "top"
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Stack mt={4} spacing={2}>
        <CustomFormLabel htmlFor="reset-email">Email Adddress</CustomFormLabel>
        <CustomTextField onChange={e => setEmail(e.target.value)} value={email} id="reset-email" variant="outlined" fullWidth />

        <Button color="primary" variant="contained" size="large" fullWidth onClick={handleforgetpassword}>
          Forgot Password
        </Button>
        <Button color="primary" size="large" fullWidth component={Link} to="/auth/login">
          Back to Login
        </Button>
      </Stack>
    </>
  );
};

export default AuthForgotPassword;
