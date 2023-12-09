import { createSlice } from '@reduxjs/toolkit';
import routes from '../../../utils/routes';

const API_URL = '/api/data/eCommerce/ProductsData';

const initialState = {
  programs: [
    {
      programName: '',
      programDate: '',
      programDuration: '',
      programPrice: '',
      programImage: '',
      programDetails: '',
      programStatus: '',
      vihar: [],
      pillar: [],
      guru: [],
      focusOfProgram: ''
    },
  ],
  selectedProgram: null

};

export const ProgramSlice = createSlice({
  name: 'program',
  initialState,
  reducers: {
    GetPrograms: (state, action) => {
      state.programs = action.payload;
    },
    CreateProgram: (state, action) => {
      state.programs.push(action.payload);
    },
    setSelectedProgram: (state, action) => {
      state.selectedProgram = action.payload;
    },

    UpdateProgramById: (state, action) => {
      console.log('updateSelectedProgram*****:', action.payload)
      state.selectedProgram = {
        ...state.selectedProgram,
        ...action.payload,
      };
    },
    DeleteProgram: (state, action) => {
      state.programs = state.programs.filter((program) => program._id !== action.payload);
    },
  },
});
export const { GetPrograms, CreateProgram, UpdateProgramById, DeleteProgram, setSelectedProgram } = ProgramSlice.actions;

export const fetchProgram = () => async (dispatch) => {
  try {
    const response = await routes.APIS.Get_ALL_Program();
    console.log("HEREEEEE", response);
    dispatch(GetPrograms(response));
  } catch (error) {
    // dispatch(hasError(error));
    console.log(error);
  }
};
export const fetchProgramById = (id) => async (dispatch) => {
  try {
    console.log(id);
  
    const res = await routes.APIS.GET_PROGRAM_BY_ID(id);
    console.log('fetchProgramById*****:', res.data);
    dispatch(setSelectedProgram(res.data));
  } catch (error) {
    console.log(error)
  }
};

export const addProgram = (data) => async (dispatch) => {
  try {
    const response = await routes.APIS.ADD_PROGRAM(data);
    if (response.message === "program created successfully") {
      console.log(response.message);
      dispatch(CreateProgram(response.data));
    } else {
      console.error('Unexpected response format:', response);
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateProgramById = (id, data) => async (dispatch) => {
  try {
    const res = await routes.APIS.PUT_PROGRAM(id, data)
    console.log('updateGuruById*****:', res);
    dispatch(UpdateProgramById(res));
  } catch (error) {
    console.log(error)
  }
};



export const deleteProgramByID = (id) => async (dispatch) => {
  try {
    const response = await routes.APIS.DELETE_PROGRAM(id);
    // console.log("idddd",response)
    await dispatch(fetchProgram());
  } catch (error) {
    console.log(error)
  }
}

export default ProgramSlice.reducer;
