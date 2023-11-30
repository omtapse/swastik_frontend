import { createSlice } from '@reduxjs/toolkit';
import routes from '../../../utils/routes';

const API_URL = '/api/data/eCommerce/ProductsData';

const initialState = {
    // gurus:[],
    gurus: [
        {
            name: '',
            guruImage: '',
            about: '',
            experties: '',
            testimonials: '',
            programImages: []
        },
    ],
    selectedGuru: null

};

export const GuruSlice = createSlice({
    name: 'guru',
    initialState,
    reducers: {
        GetGuru: (state, action) => {

            state.gurus = action.payload;


        },
        CreateGuru: (state, action) => {
            // state.gurus.push(action.payload);
            state.gurus = [...state.gurus, action.payload];
        },

        setSelectedGuru: (state, action) => {
            state.selectedGuru = action.payload;
          },

        DeleteGuru: (state, action) => {
            state.gurus = state.gurus.filter((guru) => guru._id !== action.payload);
          },
          updateSelectedGuru: (state, action) => {
            console.log('updateSelectedguruuuu*****:', action.payload)
            state.selectedGuru = {
                ...state.selectedGuru,
                ...action.payload,
            };
        },
        // UpdateGuru: (state, action) => {
        //     const { index, updatedGuru } = action.payload;
        //     const updatedGurus = [...state.gurus];
        //     updatedGurus[index] = updatedGuru;
        //     return {
        //         ...state,
        //         gurus: updatedGurus,
        //     };
        // },
        
    },
});
export const { GetGuru, CreateGuru, updateSelectedGuru,setSelectedGuru } = GuruSlice.actions;

export const fetchGurus = () => async (dispatch) => {
    try {
        console.log("fetchGurus caled")
        const response = await routes.APIS.GET_ALL_GURUS();
        console.log("guruuuuuuuuuuu", response.data);
        dispatch(GetGuru(response.data));
    } catch (error) {
        // dispatch(hasError(error));
        console.log(error);
    }
};
export const fetchGuruById = (id) => async (dispatch) => {
    try {
      const res = await routes.APIS.GET_GURU_BY_ID(id);
      console.log('fetchGuruById*****:', res.guru);
      dispatch(updateSelectedGuru(res.guru));
    } catch (error) {
      console.log(error)
    }
  };

export const addGurus = (data) => async (dispatch) => {
    try {
        console.log("////////", data)
        const response = await routes.APIS.ADD_GURU(data);
        console.log("addddddd", response)
        if (response.status === 200) {
            dispatch(CreateGuru(response));
        } else {
            console.error('Unexpected response format:');
        }
    } catch (error) {
        console.log(error);
    }
};

// export const updateGurus = (index, updatedGuru) => async (dispatch) => {
//     try {
//         const response = await routes.APIS.UPDATE_GURU(updatedGuru); // Pass updatedProgram as the payload
//         console.log(response)
//         dispatch(UpdateGuru({ index, updatedVihar: response.data }));
//     } catch (error) {
//         console.log(error);
//     }
// };
export const updateGuruById = (id, data) => async (dispatch) => {
    try {
        const res = await routes.APIS.UPDATE_GURU(id,data);
        console.log('updateGuruById*****:', res);
        dispatch(updateSelectedGuru(res));
    } catch (error) {
        console.log(error)
    }
};  
export const deleteGuruByID = (id) => async (dispatch) => {
    try {
      const response = await routes.APIS.DELETE_GURU(id);
      console.log("idddd",response)
      await dispatch(fetchGurus());
    } catch (error) {
      console.log(error)
    }
  }

export default GuruSlice.reducer;
