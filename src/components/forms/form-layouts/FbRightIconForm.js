import React from 'react';
import {
  Button,
  FormControlLabel,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Stack
} from '@mui/material';
import CustomCheckbox from '../theme-elements/CustomCheckbox';
import CustomFormLabel from '../theme-elements/CustomFormLabel';
import ParentCard from '../../shared/ParentCard';
import { IconLock, IconUser, IconMail } from '@tabler/icons';
import { useDispatch, useSelector } from 'react-redux';
import { notification } from 'antd';
import routes from '../../../utils/routes';
import { updateAdminInfo } from '../../../store/apps/admin/adminSlice';

const FbRightIconForm = () => {
  const dispatch = useDispatch();
  const adminId = useSelector((state) => state.adminReducer.adminId);
  const adminName = useSelector((state) => state.adminReducer.adminName);
  const adminEmail = useSelector((state) => state.adminReducer.adminEmail);


  const [form, setFormValues] = React.useState({
    name: adminName,
    email: adminEmail,
    password: '',
    confirmPassword: '',
  });

  const handleUpdate = async () => {
    console.log(form);
    if (!form.name || !form.email) {
      notification.error({
        message: "All fields are required",
        placement: "top"
      })
      return;
    }

    if (form.email) {
      const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
      if (!emailRegex.test(form.email)) {
        notification.error({
          message: "Invalid Email",
          placement: "top"
        })
        return;
      }
    }

    if(form.password.length > 0){
      if (form.password.length < 8) {
        notification.error({
          message: "Password should be atleast 8 characters",
          placement: "top"
        })
        return;
      }
      if (form.password !== form.confirmPassword) {
        notification.error({
          message: "Password and Confirm Password should be same",
          placement: "top"
        })
        return;
      }
    }
    // if (form.password.length < 8) {
    //   notification.error({
    //     message: "Password should be atleast 8 characters",
    //     placement: "top"
    //   })
    //   return;
    // }
    if (form.password !== form.confirmPassword) {
      notification.error({
        message: "Password and Confirm Password should be same",
        placement: "top"
      })
      return;
    }

    try {
      dispatch(updateAdminInfo(adminId, form));
      // const res = await routes.APIS.updateAdminInfo(adminId, form);
      // if (res.status === 200) {
      //   notification.success({
      //     message: "Profile Updated Successfully",
      //     placement: "top"
      //   })
      // } else {
      //   notification.error({
      //     message: "Something went wrong",
      //     placement: "top"
      //   })
      // }
    } catch (error) {
      console.log(error);
    };
  }




  return (
    <ParentCard title="Update Profile"
      footer={
        <>
          <Stack direction="row" spacing={1}>
            <Button
              onClick={handleUpdate}
              color="primary"
              variant="contained"
            >
              Update Profile
            </Button>
            <Button variant="contained" color="error">
              Cancel
            </Button>
          </Stack>

        </>
      }>
      <form>
        <FormControl fullWidth>
          <CustomFormLabel
            sx={{
              mt: 0,
            }}
            htmlFor="username2-text"
          >
            Name
          </CustomFormLabel>
          <OutlinedInput
            endAdornment={
              <InputAdornment position="end">
                <IconUser width={20} />
              </InputAdornment>
            }
            id="username2-text"
            placeholder="Name"
            fullWidth
            value={form.name}
            onChange={(e) => {
              setFormValues({
                ...form,
                name: e.target.value,
              });
            }}
          />
        </FormControl>
        {/* 2 */}
        <FormControl fullWidth>
          <CustomFormLabel htmlFor="mail2-text">Email</CustomFormLabel>
          <OutlinedInput
            endAdornment={
              <InputAdornment position="end">
                <IconMail width={20} />
              </InputAdornment>
            }
            id="mail2-text"
            placeholder="Email"
            fullWidth
            value={form.email}
            onChange={(e) => {
              setFormValues({
                ...form,
                email: e.target.value,
              });
            }}
          />
        </FormControl>
        {/* 3 */}
        <FormControl fullWidth>
          <CustomFormLabel htmlFor="pwd2-text">Password</CustomFormLabel>
          <OutlinedInput
            type="password"
            endAdornment={
              <InputAdornment position="end">
                <IconLock width={20} />
              </InputAdornment>
            }
            id="pwd2-text"
            placeholder="Password"
            fullWidth
            value={form.password}
            onChange={(e) => {
              setFormValues({
                ...form,
                password: e.target.value,
              });
            }}
          />
        </FormControl>

        <FormControl fullWidth>
          <CustomFormLabel htmlFor="cpwd2-text">Confirm Password</CustomFormLabel>
          <OutlinedInput
            type="password"
            endAdornment={
              <InputAdornment position="end">
                <IconLock width={20} />
              </InputAdornment>
            }
            id="cpwd2-text"
            placeholder="Confirm Password"
            fullWidth
            value={form.confirmPassword}
            onChange={(e) => {
              setFormValues({
                ...form,
                confirmPassword: e.target.value,
              });
            }}
          />
        </FormControl>
        {/* <FormControlLabel
          control={
            <CustomCheckbox checked={state.checkedB} onChange={handleChange} name="checkedB" />
          }
          sx={{
            mt: '10px',
          }}
          label="Remember Me!"
        /> */}
      </form>
    </ParentCard>
  );
};

export default FbRightIconForm;
