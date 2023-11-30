import React, { useState } from 'react';
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Divider,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import CustomCheckbox from '../../../components/forms/theme-elements/CustomCheckbox';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';

import AuthSocialButtons from './AuthSocialButtons';
import routes from '../../../utils/routes';
import { useDispatch } from 'react-redux';
import { saveAdminInfo } from '../../../store/apps/admin/adminSlice';
import { notification } from 'antd';

const AuthLogin = ({ title, subtitle, subtext }) =>{ 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async() => {
    try {
      if(!username || !password){
        notification.error({
          message : "Please fill all the fields" ,
          placement : "top"
        })
        return;
      }
      const res = await routes.APIS.login({email:username, password});
      if(res.status === 200){
        dispatch(saveAdminInfo({email:username,id:res.adminId,loginTime:Date.now()}))
        notification.success({
          message : "Login Successful",
          placement : "top"
        })
        navigate('/dashboards/modern', { replace: true });
      }else{
        notification.error({
          message : "Invalid Credentials" ,
          placement : "top"
        })
      }
    } catch (error) {
      console.log(error);
    }
  }



  return(
  <>
    {title ? (
      <Typography fontWeight="700" variant="h3" mb={1}>
        {title}
      </Typography>
    ) : null}
    {subtext}
    {/* <AuthSocialButtons title="Sign in with" />
    <Box mt={3}>
      <Divider>
        <Typography
          component="span"
          color="textSecondary"
          variant="h6"
          fontWeight="400"
          position="relative"
          px={2}
        >
          or sign in with
        </Typography>
      </Divider>
    </Box> */}

    <Stack>
      <Box>
        <CustomFormLabel htmlFor="username">Username</CustomFormLabel>
        <CustomTextField onChange={(e) => setUsername(e.target.value)}  value={username} id="username" variant="outlined" fullWidth />
      </Box>
      <Box>
        <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
        <CustomTextField onChange={e=>setPassword(e.target.value)} value={password} id="password" type="password" variant="outlined" fullWidth />
      </Box>
      <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
        <FormGroup>
          <FormControlLabel
            control={<CustomCheckbox defaultChecked />}
            label="Remeber this Device"
          />
        </FormGroup>
        <Typography
          component={Link}
          to="/auth/forgot-password"
          fontWeight="500"
          sx={{
            textDecoration: 'none',
            color: 'primary.main',
          }}
        >
          Forgot Password ?
        </Typography>
      </Stack>
    </Stack>
    <Box>
      <Button
        color="primary"
        variant="contained"
        size="large"
        fullWidth
        onClick={handleLogin}
        type="submit"
      >
        Sign In
      </Button>
    </Box>
    {subtitle}
  </>
)};

export default AuthLogin;
