import React, { useEffect, useState } from 'react';
import {
  Grid,
  InputAdornment,
  Button,
  Typography,
  Divider,
  MenuItem,
  IconButton,
  Stack
} from '@mui/material';

import { IconEye, IconEyeOff } from '@tabler/icons';
import CustomFormLabel from '../../../forms/theme-elements/CustomFormLabel';
import CustomTextField from '../../../forms/theme-elements/CustomTextField';
import CustomOutlinedInput from '../../../forms/theme-elements/CustomOutlinedInput';
import CustomSelect from '../../../forms/theme-elements/CustomSelect';
import { Paper } from '@mui/material';
import ReactQuill from 'react-quill';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import 'react-quill/dist/quill.snow.css';
// import Button from '@mui/material/Button';
import PageContainer from '../../../container/PageContainer';
import Breadcrumb from '../../../../layouts/full/shared/breadcrumb/Breadcrumb';
import ParentCard from '../../../shared/ParentCard';
import { useDispatch, useSelector } from 'react-redux';
import { CreateProgram, addProgram } from '../../../../store/apps/programs/ProgramListSlice';
import { useNavigate } from 'react-router';
import ProgramList from '../programList/ProgramList';
import Autocomplete from '@mui/material/Autocomplete';
import top100Films from '../addProgramForm/data';
import routes from '../../../../utils/routes';
import { useFormik } from 'formik';
import * as yup from 'yup';

const lang = [
  {
    value: 'en',
    label: 'English',
  },
  {
    value: 'fr',
    label: 'French',
  },
];
const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Quill Editor',
  },
];

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


const AddProgramForm = () => {
  // country
  const [country, setCountry] = React.useState('');
  const [text, setText] = useState('');
  const [editorContent, setEditorContent] = useState('');
  const [editorFocus, setEditorFocus] = useState('');
  const [imageUrl, setImageUrl] = useState();
  const navigate = useNavigate();
  const [pillar, setPillar] = useState([]);
  const [vihar, setVihar] = useState([]);
  const [gurus, setGurus] = useState([]);
  const [selectedOptions, setSelectedOptions] = React.useState([top100Films]);
  const [programName, setProgramName] = useState('');
  const [programPrice, setProgramPrice] = useState('');
  const [programDuration, setprogramDuration] = useState('');
  const [pillarValue, setpillarValue] = useState([]);
  const [viharValue, setviharValue] = useState([]);
  const [guruValue, setguruValue] = useState([]);
  const [focusValue, setfocusValue] = useState('');
  const [durationValue, setdurationValue] = useState('');
  const [aboutValue, setaboutValue] = useState('');
  const [dateValue, setdateValue] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  // const [value, setValue] = useState({});

  const dispatch = useDispatch();



  const fetchPillar = async () => {
    const res = await routes.APIS.GET_ALL_PILLARS();
    if (res.message === "Pillars fetched successfully") {
      let data = res.data.map((pillar) => {
        return { label: pillar.pillarTitle, value: pillar._id };
      });
      setPillar(data);
      console.log("pillar", data)
    }
  };

  const fetchVihar = async () => {
    const res = await routes.APIS.GET_ALL_VIHARS();
    if (res) {
      let data = res.vihars.map((vihar) => {
        return { label: vihar.viharName, value: vihar._id };
      });
      setVihar(data);
      console.log("vihar", data)

    }
  };

  const fetchGurus = async () => {
    const res = await routes.APIS.GET_ALL_GURUS();
    if (res.message === "Gurus fetched successfully") {
      let result = res.data.map((guru) => {
        return { value: guru._id, label: guru.name };
      });
      setGurus(result);
      console.log("guru", result)
    }
  };

  const beforeUpload = async (file) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("image", file);
      const res = await routes.APIS.UPLOAD_IMAGE(formData);
      setImageUrl(res.url);
      setErrors({ ...errors, imageUrl: "" });
      console.log(res.url)
      setLoading(false);
      return false;
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleChangeImg = async (info) => {
    console.log("kkkkkkkk", info.target.files[0])
    //   setLoading(true);
    let formData = new FormData();
    formData.append("image", info.target.files[0]);
    let res = await routes.APIS.UPLOAD_IMAGE(formData);
    setImageUrl(res.url);
    console.log(res.url)
    setLoading(false);

  };

  const handleOnChangeOption = (event, value) => {
    setSelectedOptions(value);
  };


  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  // language
  // const [language, setLanguage] = React.useState('');

  // const handleChange2 = (event) => {
  //   setLanguage(event.target.value);
  // };

  // //   password
  // //
  // const [showPassword, setShowPassword] = React.useState(false);

  // const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  // //  confirm  password
  // //
  // const [showPassword2, setShowPassword2] = React.useState(false);

  // const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  // const handleMouseDownPassword2 = (event) => {
  //   event.preventDefault();
  // };

  // const validationSchema = yup.object({
  //   programName: yup.string('Enter program Name').required('programName is Required'),
  //   programDuration: yup.string('Enter program Duration').required('programDuration is Required'),
  //   programStatus: yup.string('Enter program status').required('status is required'),
  //   programDetails: yup.string('Enter details').required('details is required'),
  //   programPrice: yup.string('Enter programPrice').required('programPrice is required'),
  //   // programImages: yup.string().required('Program Images is required'),
  //   programImages: yup.array().min(1, 'Select at least one image'),
  //   vihar: yup.array().min(1, 'Select at least one Vihar'),
  //   pillar: yup.array().min(1, 'Select at least one Pillar'),
  //   guru: yup.string().required('Select a Guru'),
  //   programDate: yup.date().required('Program Date is required'),
  //   focusOfProgram: yup.string().required('Focus of Program is required'),
  // });



  // const formik = useFormik({
  //   initialValues: {
  //     programName: "",
  //     programDuration: "",
  //     programStatus: "Active",
  //     programDetails: "",
  //     programPrice: "",
  //     programImages: "",
  //     vihar: [],
  //     pillar: [],
  //     guru: "",
  //     programDate: "",
  //     focusOfProgram: "",
  //   },

  //   validationSchema: validationSchema,
  //   onSubmit: async (values) => {
  //     try {
  //       // Your form submission logic here
  //       console.log('Form submitted with values:', values);
  //       const data = {
  //         programName: values.programName,
  //         guru: values.guru,
  //         programDate: new Date(values.programDate),
  //         programDuration: values.programDuration,
  //         programPrice: values.programPrice,
  //         programImage: imageUrl,
  //         programDetails: values.programDetails,
  //         programStatus: values.programStatus,
  //         vihars: values.vihar,
  //         pillars: values.pillar,
  //         focusOfProgram: values.focusOfProgram,
  //         // Add other form fields as needed
  //       };
  //       console.log("<<<<<<<>>>>>>>", values)
  //       dispatch(addProgram(data));
  //       navigate('/apps/programs/programs-list');
  //     } catch (error) {
  //       console.log('Error', error);
  //     }
  //   },  //   
  // });

  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let errors = {};

    if (!programName) {
      errors.programName = "Program Name is required";
    }
    if (!programPrice) {
      errors.programPrice = "Program Price is required";
    }
    if (!programDuration) {
      errors.programDuration = "Program Duration is required";
    }
    if (!aboutValue) {
      errors.programDetails = "Program Details is required";
    }
    if (!dateValue) {
      errors.programDate = "Program Date is required";
    }
    if (!focusValue) {
      errors.focusOfProgram = "Focus of Program is required";
    }
    if (!status) {
      errors.programStatus = "Program Status is required";
    }
    if (!guruValue) {
      errors.guru = "Guru is required";
    }
    if (!pillarValue) {
      errors.pillar = "Pillar is required";
    }
    if (!viharValue) {
      errors.vihar = "Vihar is required";
    }
    setErrors(errors);
    return errors;
  };

  const scrollToError = (errors, handleSubmitBtn) => {
    if (errors) {
      const errorField = Object.keys(errors)[0];
      const field = document.querySelector(`[name=${errorField}]`);
      if (field) {
        field.focus();
        field.scrollIntoView({ behavior: "smooth", block: "start" });

      }
      handleSubmitBtn();
    } else {
      handleSubmitBtn();
    }
  };


  const handleSubmitBtn = async () => {
    const errors = validateForm(
      programName,
      programPrice,
      programDuration,
      aboutValue,
      dateValue,
      focusValue,
      status,
      guruValue,
      pillarValue,
      viharValue
    );

    if (Object.keys(errors).length > 0) {
      return;
    }

    try {

      const data = {
        programName: programName,
        guru: guruValue,
        programDate: new Date(dateValue),
        programDuration: programDuration,
        programPrice: programPrice,
        programImage: imageUrl,
        programDetails: aboutValue,
        programStatus: status,
        vihars: viharValue,
        pillars: pillarValue,
        focusOfProgram: focusValue,
        // Add other form fields as needed
      };
      dispatch(addProgram(data));
      navigate('/apps/programs/programs-list');
    } catch (error) {
      console.log("Error", error)
    }
  }

  useEffect(() => {
    fetchPillar();
    fetchVihar();
    fetchGurus();
  }, []);


  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CustomFormLabel htmlFor="fs-uname" sx={{ mt: 0 }}>
            Program Name
          </CustomFormLabel>
          <CustomTextField
            id="fs-uname"
            placeholder="Enter Program"
            fullWidth
            value={programName}
            // onChange={(e) => setProgramName(e.target.value)}
            //   onChange={(e) => {
            //     setTitle(e.target.value);
            //     setErrors({ ...errors, title: "" });
            // }}
            onChange={(e) => {
              setProgramName(e.target.value);
              setErrors({ ...errors, programName: "" });
            }}
          />
          {Boolean(errors.programName) && (
            <div style={{ color: 'red' }}>{errors.programName}</div>
          )}

          <CustomFormLabel htmlFor="fs-pwd">Program Duration</CustomFormLabel>
          <CustomOutlinedInput
            id="fs-pwd"
            placeholder="Enter Duration"
            fullWidth
            value={programDuration}
            // onChange={(e) => setprogramDuration(e.target.value)}
            onChange={(e) => {
              setprogramDuration(e.target.value);
              setErrors({ ...errors, programDuration: "" });
            }}
          />
          {Boolean(errors.programDuration) && (
            <div style={{ color: 'red' }}>{errors.programDuration}</div>
          )}


        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomFormLabel htmlFor="fs-uname" sx={{ mt: 0 }}>
            Program Price
          </CustomFormLabel>
          <CustomTextField
            id="fs-uname"
            placeholder="Enter Program price"
            fullWidth
            value={programPrice}
            // onChange={(e) => setProgramPrice(e.target.value)}
            onChange={(e) => {
              setProgramPrice(e.target.value);
              setErrors({ ...errors, programPrice: "" });
            }}
          />
          {Boolean(errors.programPrice) && (
            <div style={{ color: 'red' }}>{errors.programPrice}</div>
          )}

        </Grid>

        <Grid item xs={12}>
          <Divider sx={{ mx: '-24px' }} />

        </Grid>
        <Grid item xs={12} sm={6}>

          <CustomFormLabel htmlFor="fs-country">Pillars</CustomFormLabel>
          <Autocomplete
            multiple
            fullWidth
            id="tags-outlined"
            options={pillar}
            // onChange={handleOnChangeOption}
            getOptionLabel={(option) => option.label}
            // defaultValue={pillar}
            filterSelectedOptions
            renderInput={(params) => (
              <CustomTextField {...params} placeholder={'Select Pillars'} aria-label="Favorites" />
            )}
            value={pillarValue}
            // onChange={(event, value) => setpillarValue(value)}
            onChange={(event, value) => {
              setpillarValue(value);
              setErrors({ ...errors, pillar: "" });
            }}

          />
          {Boolean(errors.pillar) && (
            <div style={{ color: 'red' }}>{errors.pillar}</div>
          )}


          <CustomFormLabel htmlFor="fs-country">Gurus</CustomFormLabel>
          <CustomSelect
            id="standard-select-currency"
            fullWidth
            variant="outlined"
            value={guruValue}
            // onChange={(e) => { console.log("here gutu", e.target.value); setguruValue(e.target.value) }}
            onChange={(e) => {
              setguruValue(e.target.value);
              setErrors({ ...errors, guru: "" });
            }}
          >
            {gurus.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </CustomSelect>
          {Boolean(errors.guru) && (
            <div style={{ color: 'red' }}>{errors.guru}</div>
          )}

          <CustomFormLabel htmlFor="fs-date">Program Date</CustomFormLabel>
          <CustomTextField
            type="date"
            id="fs-date"
            placeholder="John Deo"
            fullWidth
            value={dateValue}
            // onChange={(e) => setdateValue(e.target.value)}
            onChange={(e) => {
              setdateValue(e.target.value);
              setErrors({ ...errors, programDate: "" });
            }}
          />
          {Boolean(errors.programDate) && (
            <div style={{ color: 'red' }}>{errors.programDate}</div>
          )}
        </Grid>


        <Grid item xs={12} sm={6}>

          <CustomFormLabel htmlFor="fs-language">Vihars</CustomFormLabel>

          <Autocomplete
            multiple
            fullWidth
            id="tags-outlined"
            options={vihar}
            // onChange={handleOnChangeOption}
            getOptionLabel={(option) => option.label}
            defaultValue={vihar}
            filterSelectedOptions
            renderInput={(params) => (
              <CustomTextField {...params} placeholder={selectedOptions.length === 0 ? 'Select Vihars' : ''} value={viharValue} onChange={(e) => setviharValue(e.target.value)} aria-label="Favorites" />
            )}
            // onChange={(event, value) => setviharValue(value)}
            onChange={(event, value) => {
              setviharValue(value);
              setErrors({ ...errors, vihar: "" });
            }}

          />
          {Boolean(errors.vihar) && (
            <div style={{ color: 'red' }}>{errors.vihar}</div>
          )}
          {/* </CustomSelect> */}
          <CustomFormLabel htmlFor="fs-phone"> Focus Of Program</CustomFormLabel>
          <CustomTextField
            id="fs-phone"
            placeholder="Enter focus of program"
            fullWidth
            value={focusValue}
            // onChange={(e) => setfocusValue(e.target.value)}
            onChange={(e) => {
              setfocusValue(e.target.value);
              setErrors({ ...errors, focusOfProgram: "" });
            }}
          />
          {Boolean(errors.focusOfProgram) && (
            <div style={{ color: 'red' }}>{errors.focusOfProgram}</div>
          )}

        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Program Status</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={status}
              // onChange={(e) => setStatus(e.target.value)}
              onChange={(e) => {
                setStatus(e.target.value);
                setErrors({ ...errors, programStatus: "" });
              }}
            >
              <FormControlLabel value="Active" control={<Radio />} label="Active" />
              <FormControlLabel value="Inactive" control={<Radio />} label="Inactive" />
            </RadioGroup>
          </FormControl>
          {Boolean(errors.programStatus) && (
            <div style={{ color: 'red' }}>{errors.programStatus}</div>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomFormLabel sx={{ m: 0 }} htmlFor="fs-date">Program Image</CustomFormLabel>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            beforeUpload={beforeUpload}
            onChange={handleChangeImg}
          >
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button>
          {Boolean(errors.programImages) && (
            <div style={{ color: 'red' }}>{errors.programImages}</div>
          )}
        </Grid>
        <Grid item xs={12} >
          <CustomFormLabel htmlFor="fs-editor">About Program</CustomFormLabel>
          <ReactQuill
            id="fs-editor"
            value={aboutValue}
            // onChange={(e) => setaboutValue(e.target.value)}
            style={{ height: '10rem', marginBottom: '3rem' }}
            // onChange={(value) => setaboutValue(value)}
            onChange={(value) => {
              setaboutValue(value);
              setErrors({ ...errors, programDetails: "" });
            }}
          />
          {Boolean(errors.programDetails) && (
            <div style={{ color: 'red' }}>{errors.programDetails}</div>
          )}
        </Grid>


        <Grid item xs={12} className='pt-50'>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="primary"
              // onClick={handleSubmitBtn}
              onClick={(e) => scrollToError(errors, handleSubmitBtn)}

            >
              Submit
            </Button>
            <Button variant="text" color="error">
              Cancel
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddProgramForm;
