import React, { useState } from 'react';
import { Button, Stack } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import { notification } from 'antd';
import routes from '../../../utils/routes';

const AuthResetPassword = () => {
  const params = useParams();  
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const handleforgetpassword = async () =>{
    try {
      if(!password){
        notification.error({
          message : "Please enter registered password" ,
          placement : "top"
        })
        return;
      }
      console.log(params);
      const res = await routes.APIS.resetPasswordUsingLink({password,userId:params.id,token:params.token});
      if(res.status === 200){
        console.log(res)
        notification.success({
          message : "Password changed successfully" ,
          placement : "top"
        })
        navigate('/auth/login', { replace: true });
      }else{
        notification.error({
          message : res.error ,
          placement : "top"
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Stack mt={4} spacing={2}>
        <CustomFormLabel htmlFor="reset-email">Enter a new password</CustomFormLabel>
        <CustomTextField type="password" onChange={e=>setPassword(e.target.value)} value={password} id="reset-email" variant="outlined" fullWidth />

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

export default AuthResetPassword;
