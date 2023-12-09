import axios from '../../../utils/axios';
import { filter, map } from 'lodash';
import { createSlice } from '@reduxjs/toolkit';
import routes from '../../../utils/routes';
import { hasError } from '../eCommerce/EcommerceSlice';

const API_URL = '/api/data/eCommerce/ProductsData';

const initialState = {
  viharCount:0,
  pillarCount:0,
  programCount:0,
  guruCount:0,
};

export const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    addCount: (state, action) => {
        console.log("action.payload",action.payload)
      state.viharCount = action.payload.viharCount;
      state.pillarCount = action.payload.pillarCount;
      state.programCount = action.payload.programCount;
      state.guruCount = action.payload.guruCount;
    },
  },
});
export const {addCount} = countSlice.actions;

export const fetchCounts = () => async (dispatch) => {
  try {
    const response = await routes.APIS.getCounts();
    if(response.status === 200){
        console.log("response.data",response)
        dispatch(addCount(response));
    }
  } catch (error) {
    dispatch(hasError(error));
  }
};


export default countSlice.reducer;
