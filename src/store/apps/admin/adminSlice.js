import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    adminId: null,
    adminEmail: null,
    adminLoginTime: null,
};

export const AdminSlice = createSlice({
  name: 'Admin',
  initialState,
  reducers: {
    saveAdminInfo: (state, action) => {
        state.adminEmail = action.payload.email;
        state.adminId = action.payload.id;
        state.adminLoginTime = action.payload.loginTime;
    },
  },
});


export const { saveAdminInfo } = AdminSlice.actions;

export default AdminSlice.reducer;
