import React from 'react';
import { Grid, Box, Card, Typography } from '@mui/material';

import Logo from 'src/layouts/full/shared/logo/Logo';
import PageContainer from 'src/components/container/PageContainer';

import AuthForgotPassword from '../authForms/AuthForgotPassword';

const ForgotPassword2 = () => (
  <PageContainer title="Forgot Password" description="this is Forgot Password page">
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
            <AuthForgotPassword />
          </Card>
        </Grid>
      </Grid>
    </Box>
  </PageContainer>
);

export default ForgotPassword2;
