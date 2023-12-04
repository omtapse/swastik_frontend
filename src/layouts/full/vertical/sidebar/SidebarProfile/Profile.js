import React from 'react';
import { Box, Avatar, Typography, IconButton, Tooltip, useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import img1 from 'src/assets/images/profile/user-1.jpg';
import { IconPower } from '@tabler/icons';
import { Link, useNavigate } from "react-router-dom";
// import { LogoutAdmin } from '../../../../../store/apps/admin/adminSlice';
import { notification } from 'antd';
import routes from '../../../../../utils/routes';

export const Profile = () => {
  const customizer = useSelector((state) => state.customizer);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const hideMenu = lgUp ? customizer.isCollapse && !customizer.isSidebarHover : '';
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const admin = useSelector((state) => state.adminReducer);

  // const handleLogout = () => {
  //   // dispatch(LogoutAdmin());
  //   // navigate('/auth/login');
  //   console.log("logout")
  // };
  const handleLogout = async () => {
    try {
      const res = await routes.APIS.logoutAdmin();
      console.log("logoutAdmin****", res)
      if (res.status === 200) {
        notification.success({
          message: "Logout successfully",
          placement: "top"
        })
        navigate('/auth/login', { replace: true });
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
    <Box
      display={'flex'}
      alignItems="center"
      gap={2}
      sx={{ m: 3, p: 2, bgcolor: `${'secondary.light'}` }}
    >
      {!hideMenu ? (
        <>
          <Avatar alt="Remy Sharp" src={img1} />

          <Box>
            <Typography variant="h6" color="textPrimary">
              {/* Mathew */}
              {admin.adminName}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {/* Designer */}
              {admin.adminRole}
            </Typography>
          </Box>
          <Box sx={{ ml: 'auto' }}>
            <Tooltip title="Logout" placement="top">
              <IconButton
                color="primary"
                component={Link}
                // to="/auth/login"
                aria-label="logout"
                size="small"
                onClick={handleLogout}

              >
                <IconPower size="20" />
              </IconButton>
            </Tooltip>
          </Box>
        </>
      ) : (
        ''
      )}
    </Box>
  );
};
