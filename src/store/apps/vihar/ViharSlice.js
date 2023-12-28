import { createSlice } from '@reduxjs/toolkit';
import routes from '../../../utils/routes';

const API_URL = '/api/data/eCommerce/ProductsData';

const initialState = {
  vihars: [
    {
      viharName: '',
      tagLine: '',
      masterImage: '',
      activities: [],
      vihardescription: '',
      facilityImages: [],
    },
  ],
  selectedVihar: null,
  // activitiesData: [], 

};

export const ViharSlice = createSlice({
  name: 'vihar',
  initialState,
  reducers: {
    GetVihars: (state, action) => {

      state.vihars = action.payload;
    },
    // GetActivities: (state, action) => {
    //   state.activitiesData = action.payload;
    //   console.log("state.activitiesData",state.activitiesData)
    // },
    setSelectedVihar: (state, action) => {
      state.selectedVihar = action.payload
      console.log("state.selectedVihar",state.selectedVihar)
    },
    CreateVihar: (state, action) => {
      state.vihars.push(action.payload);
    },
    updateSelectedVihar: (state, action) => {
      console.log('updateSelectedvihar*****:', action.payload)
      state.selectedVihar = {
        ...state.selectedVihar,
        ...action.payload,
      };
    },
    DeleteVihar: (state, action) => {
      state.vihars = state.vihars.filter((vihar) => vihar._id !== action.payload);
      console.log("<<<<<0",action.payload)
    },
  },
});
export const { GetVihars, CreateVihar,DeleteVihar, updateSelectedVihar, GetActivities,setSelectedVihar } = ViharSlice.actions;

export const fetchVihar = () => async (dispatch) => {
  try {
    const response = await routes.APIS.GET_ALL_VIHARS();
    console.log("viharrrrr", response.vihars);
    dispatch(GetVihars(response.vihars));
  } catch (error) {
    // dispatch(hasError(error));
    console.log(error);
  }
};

export const fetchViharById = (id) => async (dispatch) => {
  try {

    const res = await routes.APIS.GET_VIHAR_BY_ID(id);
    console.log('fetchViharById*****:', res.vihar);
   await dispatch(setSelectedVihar(res.vihar));
  } catch (error) {
    console.log(error)
  }
};

// export const fetchActivitiesById = (id,data) => async (dispatch) => {
//   try {
//     // console.log(".........??????",id)
//     const response = await routes.APIS.GET_ALL_ACTIVITIES_VIHARS(id);
//     console.log("activitiessssss", response);
//     dispatch(GetActivities(response));
//   } catch (error) {
//     console.log(error);
//   }
// };

export const addVihar = (data) => async (dispatch) => {
  try {
    const response = await routes.APIS.ADD_VIHAR(data);
    // console.log("vihSliceeeeee", response.data)
    if (response.message === "Vihar created successfully") {
      dispatch(CreateVihar(response.data));
    } else {
      console.error('Unexpected response format:', response.data);
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateViharById = (id, data) => async (dispatch) => {
  try {
    const res = await routes.APIS.UPDATE_VIHAR(id, data);
    console.log('updateViharById*****:', res.data);
    dispatch(updateSelectedPillar(res.data));
  } catch (error) {
    console.log(error)
  }
};
export const deleteViharByID = (id) => async (dispatch) => {
  try {
    const response = await routes.APIS.DELETE_VIHAR(id);
    console.log("idddd",response)
    await dispatch(fetchVihar());
  } catch (error) {
    console.log(error)
  }
}

export default ViharSlice.reducer;
