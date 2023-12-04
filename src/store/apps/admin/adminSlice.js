import { createSlice } from '@reduxjs/toolkit';
import routes from '../../../utils/routes';
import { notification } from 'antd';


const initialState = {
  adminId: null,
  adminEmail: null,
  adminLoginTime: null,
  adminName: null,
  adminRole: null
};

export const AdminSlice = createSlice({
  name: 'Admin',
  initialState,
  reducers: {
    saveAdminInfo: (state, action) => {
      state.adminEmail = action.payload.email || action.payload.adminEmail;
      state.adminId = action.payload.id || action.payload._id;
      state.adminLoginTime = action.payload.loginTime;
      state.adminName = action.payload.adminName || action.payload.name || action.payload.userName;
      state.adminRole = action.payload.role || action.payload.adminRole || action.payload.userRole;

      console.log("saveAdminInfo****", action.payload)
    },
  },
});


export const { saveAdminInfo } = AdminSlice.actions;

// Logout Admin
// export const LogoutAdmin = () => async () => {
//   try {
//     const res = await routes.APIS.logoutAdmin();
//     console.log("logoutAdmin****", res)
//     if (res.status === 200) {
//       notification.success({
//         message: "Logout successfully",
//         placement: "top"
//       })
//       navigate('/auth/login', { replace: true });
//     } else {
//       notification.error({
//         message: "Something went wrong",
//         placement: "top"
//       })
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }

//get admin info by id
export const getAdminDetails = (adminId) => async (dispatch) => {
  try {
    const res = await routes.APIS.getAdminInfo(adminId);
    console.log("saveAdminInfo****", res)
    if (res.status === 200) {
      dispatch(saveAdminInfo(res));
    }
  } catch (error) {
    console.log(error)
  }
}


//update admin info by id
export const updateAdminInfo = (adminId, data) => async (dispatch) => {
  console.log("updateAdminInfo****", adminId, data)
  try {
    const res = await routes.APIS.updateAdminInfo(adminId, data);
    console.log("saveAdminInfo****", res.data)
    if (res.status === 200) {
      dispatch(saveAdminInfo(res.data));
      notification.success({
        message: "Admin info updated successfully",
        placement: "top"
      })
    }
  } catch (error) {
    console.log(error)
    notification.error({
      message: "Something went wrong",
      placement: "top"
    })
  }
}

export default AdminSlice.reducer;
