import { createSlice } from '@reduxjs/toolkit';
import routes from '../../../utils/routes';

const API_URL = '/api/data/eCommerce/ProductsData';

const initialState = {
  pillars: [
    {
      pillarTitle: '',
      tagLine: '',
      pillarImage: '',
      activities: [],
      pillarDescription: ''
    },
  ],
  selectedPillar: null

};

export const PillarSlice = createSlice({
  name: 'pillar',
  initialState,
  reducers: {
    GetPillars: (state, action) => {

      state.pillars = action.payload;


    },
    setSelectedPillar: (state, action) => {
      state.selectedPillar = action.payload
      console.log("state.selectedPillar", state.selectedPillar)
    },
    CreatePillar: (state, action) => {
      state.pillars.push(action.payload);
    },
    updateSelectedPillar: (state, action) => {
      console.log('updateSelectedPillar*****:', action.payload)
      state.selectedPillar = {
        ...state.selectedPillar,
        ...action.payload,
      };
    },
    DeletePillar: (state, action) => {
      state.pillars = state.pillars.filter((pillar) => pillar._id !== action.payload);
      console.log("<<<<<0", action.payload)
    },
    // UpdatePillar: (state, action) => {
    //   const { index, updatedPillar } = action.payload;
    //   const updatedPillars = [...state.programs];
    //   updatedPillars[index] = updatedPillar;
    //   return {
    //     ...state,
    //     pillars: updatedPillars,
    //   };
    // },
  },
});
export const { GetPillars, CreatePillar, setSelectedPillar, updateSelectedPillar, DeletePillar } = PillarSlice.actions;

export const fetchPillar = () => async (dispatch) => {
  try {
    const response = await routes.APIS.GET_ALL_PILLARS();
    console.log("pilarrrrr", response.data);
    dispatch(GetPillars(response.data));
  } catch (error) {
    // dispatch(hasError(error));
    console.log(error);
  }
};

export const fetchPillarById = (id) => async (dispatch) => {
  try {
    const res = await routes.APIS.GET_PILLAR_BY_ID(id);
    console.log('fetchPillarById*****:', res.pillar);
    dispatch(updateSelectedPillar(res.pillar));
  } catch (error) {
    console.log(error)
  }
};

export const addPillar = (data) => async (dispatch) => {
  try {
    const response = await routes.APIS.ADD_PILLAR(data);
    if (response.message === "Pillar created successfully") {
      console.log("addPillar", response.message);
      dispatch(CreatePillar(response));
    } else {
      console.error('Unexpected response format:', response);
    }
  } catch (error) {
    console.log(error);
  }
};

export const updatePillarById = (id, data) => async (dispatch) => {
  try {
    const res = await routes.APIS.UPDATE_PILLAR(id, data);
    console.log('updatePillarById*****:', res);
    dispatch(updateSelectedPillar(res));
  } catch (error) {
    console.log(error)
  }
};
export const deletePillarByID = (id) => async (dispatch) => {
  try {
    const response = await routes.APIS.DELETE_PILLAR(id);
    console.log("idddd", response)
    await dispatch(fetchPillar());
  } catch (error) {
    console.log(error)
  }
}
export default PillarSlice.reducer;
