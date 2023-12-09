import React from 'react';
import { Grid, Box, Typography,Card } from '@mui/material';


import Logo from 'src/layouts/full/shared/logo/Logo';
import PageContainer from 'src/components/container/PageContainer';

import img1 from 'src/assets/images/backgrounds/login-bg.svg';

import AuthForgotPassword from '../authForms/AuthForgotPassword';
import AuthResetPassword from '../authForms/AuthResetPassword';

const ResetPassword = () => (
    <PageContainer title="Reset Password" description="this is Reset Password page">
        <Box
    sx={{
      position: 'relative',
      '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'url(/src/assets/images/backgrounds/anandVihar.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        zIndex: -1,
      },
      '&:after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))',
        zIndex: -1,
      },
    }}
  >

<Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={12}
        sm={12}
        lg={4}
        xl={3}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '500px' }}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Logo />
          </Box>
          <Typography
            color="textSecondary"
            textAlign="center"
            variant="subtitle2"
            fontWeight="400"
          >
            Please enter the email address associated with your account and We will email you a
            link to reset your password.
          </Typography>
          <AuthResetPassword />
        </Card>
      </Grid>
    </Grid>
        {/* <Grid container justifyContent="center" spacing={0} sx={{ overflowX: 'hidden' }}>
            <Grid
                item
                xs={12}
                sm={12}
                lg={8}
                xl={9}
                sx={{
                    position: 'relative',
                    '&:before': {
                        content: '""',
                        background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
                        backgroundSize: '400% 400%',
                        animation: 'gradient 15s ease infinite',
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        opacity: '0.3',
                    },
                }}
            >
                <Box position="relative">
                    <Box px={3}>
                        <Logo />
                    </Box>
                    <Box
                        alignItems="center"
                        justifyContent="center"
                        height={'calc(100vh - 75px)'}
                        sx={{
                            display: {
                                xs: 'none',
                                lg: 'flex',
                            },
                        }}
                    >
                        <img
                            src={img1}
                            alt="bg"
                            style={{
                                width: '100%',
                                maxWidth: '500px',
                            }}
                        />
                    </Box>
                </Box>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                lg={4}
                xl={3}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Box p={4}>
                    <Typography variant="h4" fontWeight="700">
                        Reset Password
                    </Typography>

                 
                    <AuthResetPassword />
                </Box>
            </Grid>
        </Grid> */}
  </Box>
    </PageContainer>
);

export default ResetPassword;
