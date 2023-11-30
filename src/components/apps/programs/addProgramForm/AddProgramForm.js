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


//   const useStyles = makeStyles((theme) => ({
//     root: {
//       padding: theme.spacing(2),
//     },
//     editor: {
//       minHeight: '200px',
//     },
//   }));


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
  const [language, setLanguage] = React.useState('');

  const handleChange2 = (event) => {
    setLanguage(event.target.value);
  };

  //   password
  //
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //  confirm  password
  //
  const [showPassword2, setShowPassword2] = React.useState(false);

  useEffect(() => {
    fetchPillar();
    fetchVihar();
    fetchGurus();
  }, []);

  const [errors, setErrors] = useState({
    programName: '',
    programPrice: '',
    programDuration: '',
    pillarValue: '',
    viharValue: '',
    guruValue: '',
    focusValue: '',
    dateValue: '',
    status: '',
    aboutValue: '',
    imageUrl: '',
  });

  const validateForm = () => {
    const newErrors = {
      programName: !programName ? 'Program name is required' : '',
      programPrice: !programPrice ? 'Program price is required' : '',
      programDuration: !programDuration ? 'Program duration is required' : '',
      pillarValue: pillarValue.length === 0 ? 'Pillars are required' : '',
      viharValue: viharValue.length === 0 ? 'Vihars are required' : '',
      guruValue: !guruValue ? 'Guru is required' : '',
      focusValue: !focusValue ? 'Focus of program is required' : '',
      dateValue: !dateValue ? 'Program date is required' : '',
      status: !status ? 'Program status is required' : '',
      aboutValue: !aboutValue ? 'About program is required' : '',
      imageUrl: !imageUrl ? 'Program image is required' : '',
    };
    setErrors(newErrors);
    // Return true if the form is valid, false otherwise
    return Object.values(newErrors).every((error) => error === '');
  }


  const handleSubmitBtn = async () => {
    if (!validateForm()) {
      console.error('Form validation failed. Please check the errors.');
      return;
    }
  };


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
            onChange={(e) => setProgramName(e.target.value)}
            error={!!errors.programName}
            helperText={errors.programName}
          />


          <CustomFormLabel htmlFor="fs-pwd">Program Duration</CustomFormLabel>
          <CustomOutlinedInput
            id="fs-pwd"
            placeholder="Enter Duration"
            fullWidth
            value={programDuration}
            onChange={(e) => setprogramDuration(e.target.value)}
            error={!!errors.programDuration}
            helperText={errors.programDuration}
          />

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
            onChange={(e) => setProgramPrice(e.target.value)}
            error={!!errors.programPrice}
            helperText={errors.programPrice}
          />
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
            onChange={(event, value) => setpillarValue(value)}
            getOptionLabel={(option) => option.label}
            value={pillarValue}
            // defaultValue={pillar}
            filterSelectedOptions
            renderInput={(params) => (
              <CustomTextField {...params} placeholder={'Select Pillars'} aria-label="Favorites" />
            )}
            error={!!errors.pillarValue}
            helperText={errors.pillarValue}
          />


          <CustomFormLabel htmlFor="fs-country">Gurus</CustomFormLabel>
          <CustomSelect
            id="standard-select-currency"
            value={guruValue}
            onChange={(e) => { console.log("here gutu", e.target.value); setguruValue(e.target.value) }}
            fullWidth
            variant="outlined"
            error={!!errors.guruValue}
            helperText={errors.guruValue}
          >
            {gurus.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </CustomSelect>


          <CustomFormLabel htmlFor="fs-date">Program Date</CustomFormLabel>
          <CustomTextField
            type="date"
            id="fs-date"
            placeholder="John Deo"
            fullWidth
            value={dateValue}
            onChange={(e) => setdateValue(e.target.value)}
            error={!!errors.dateValue}
            helperText={errors.dateValue}
          />
        </Grid>


        <Grid item xs={12} sm={6}>

          <CustomFormLabel htmlFor="fs-language">Vihars</CustomFormLabel>
          <Autocomplete
            multiple
            fullWidth
            id="tags-outlined"
            options={vihar}
            // onChange={handleOnChangeOption}
            onChange={(event, value) => setviharValue(value)}
            getOptionLabel={(option) => option.label}
            defaultValue={vihar}
            filterSelectedOptions
            renderInput={(params) => (
              <CustomTextField {...params} placeholder={selectedOptions.length === 0 ? 'Select Vihars' : ''} value={viharValue} onChange={(e) => setviharValue(e.target.value)} aria-label="Favorites" />
            )}
            error={!!errors.viharValue}
            helperText={errors.viharValue}
          />

          {/* </CustomSelect> */}
          <CustomFormLabel htmlFor="fs-phone"> Focus Of Program</CustomFormLabel>
          <CustomTextField
            id="fs-phone"
            placeholder="Enter focus of program"
            fullWidth
            value={focusValue}
            onChange={(e) => setfocusValue(e.target.value)}
            error={!!errors.focusValue}
            helperText={errors.focusValue}
          />

        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Program Status</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              error={!!errors.status}
              helperText={errors.status}
            >
              <FormControlLabel value="Active" control={<Radio />} label="Active" />
              <FormControlLabel value="Inactive" control={<Radio />} label="Inactive" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomFormLabel sx={{ m: 0 }} htmlFor="fs-date">Program Image</CustomFormLabel>

          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            beforeUpload={beforeUpload}
            onChange={handleChangeImg}
            loading={loading}
            error={!!errors.imageUrl}
            helperText={errors.imageUrl}
          >
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button>
        </Grid>
        <Grid item xs={12} >
          <CustomFormLabel htmlFor="fs-editor">About Program</CustomFormLabel>
          <ReactQuill
            id="fs-editor"
            value={aboutValue}
            // onChange={(e) => setaboutValue(e.target.value)}
            onChange={(value) => setaboutValue(value)}
            style={{ height: '10rem', marginBottom: '3rem' }}
            error={!!errors.aboutValue}
            helperText={errors.aboutValue}
          />
        </Grid>


        <Grid item xs={12} className='pt-50'>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="primary"
              onClick={handleSubmitBtn}
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
