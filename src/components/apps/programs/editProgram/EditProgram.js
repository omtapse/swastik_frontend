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
import { updateProgramById } from '../../../../store/apps/programs/ProgramListSlice';
import { useNavigate, useParams } from 'react-router';
// import ProgramList from '../programList/ProgramList';
import Autocomplete from '@mui/material/Autocomplete';
import top100Films from '../addProgramForm/data';
import routes from '../../../../utils/routes';
import { Upload, message, notification } from "antd";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';


// import CustomTextField from "../../theme-elements/CustomTextField";



// const countries = [
//     {
//         value: 'india',
//         label: 'India',
//     },
//     {
//         value: 'uk',
//         label: 'United Kingdom',
//     },
//     {
//         value: 'srilanka',
//         label: 'Srilanka',
//     },
// ];

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


//   const useStyles = makeStyles((theme) => ({
//     root: {
//       padding: theme.spacing(2),
//     },
//     editor: {
//       minHeight: '200px',
//     },
//   }));


const EditProgramForm = () => {
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
    const [pname, setPName] = useState('');
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

    const dispatch = useDispatch();
    const { id } = useParams();

    const selectedProgram = useSelector((state) => state.ProgramReducer.selectedProgram);
    console.log("selectedProgram", selectedProgram)


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


    //   const fetchProgram = async () => {
    //     const res = await routes.APIS.GET_PROGRAM_BY_ID(params.id);

    //   };

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

    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

    const handleMouseDownPassword2 = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        if (selectedProgram.programName) {
            setPName(selectedProgram?.programName)
            setProgramPrice(selectedProgram.programPrice)
            setpillarValue(
                selectedProgram?.pillars.map((val) => ({ label: val.pillarTitle, value: val._id }))
            );
            setviharValue(
                selectedProgram?.vihars.map((val) => ({ label: val.viharName, value: val._id }))
            );
            setguruValue(selectedProgram?.guru ? selectedProgram.guru._id: null);
            setImageUrl(selectedProgram.programImage)
            setfocusValue(selectedProgram.focusOfProgram)
            setdurationValue(selectedProgram.programDuration)
            setaboutValue(selectedProgram.programDetails)
            setdateValue(selectedProgram.programDate)
            setStatus(selectedProgram.programStatus)

        }

    }, [selectedProgram]);
    console.log("urllllll", imageUrl)
    console.log("guruuuuuuuuuuuu",guruValue)
    console.log("gurus//////",gurus)



    const handleSubmitBtn = async () => {
        try {

            const data = {
                programName: pname,
                guru: guruValue,
                programDate: new Date(dateValue),
                programDuration: durationValue,
                programPrice: programPrice,
                programImage: imageUrl,
                programDetails: aboutValue,
                programStatus: status,
                vihars: viharValue,
                pillars: pillarValue,
                focusOfProgram: focusValue,
                // Add other form fields as needed
            };
            dispatch(updateProgramById(selectedProgram._id, data));
            navigate('/apps/programs/programs-list');
        } catch (error) {
            console.log("Error", error)
        }
    }

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );




    // const countryToFlag = (isoCode) =>
    //     typeof String.fromCodePoint !== 'undefined'
    //         ? isoCode
    //             .toUpperCase()
    //             .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    //         : isoCode;

    // const dispatch = useDispatch();
    // const program = useSelector((state) => state.ProgramReducer);



    useEffect(() => {
        fetchPillar();
        fetchVihar();
        fetchGurus();
    }, []);


    return (
        <div>
            {/* <Typography variant="h6" mb={3}>
                Program Details
            </Typography> */}
            {/* ------------------------------------------------------------------------------------------------ */}
            {/* Basic Layout */}
            {/* ------------------------------------------------------------------------------------------------ */}
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <CustomFormLabel htmlFor="fs-uname" sx={{ mt: 0 }}>
                        Program Name
                    </CustomFormLabel>
                    <CustomTextField id="fs-uname" placeholder="Enter Program" name="programName" value={pname} onChange={(e) => setProgramName(e.target.value)} fullWidth />

                    <CustomFormLabel htmlFor="fs-pwd">Program Duration</CustomFormLabel>
                    <CustomOutlinedInput
                        id="fs-pwd"
                        placeholder="Enter Duration"
                        fullWidth
                        value={durationValue}
                        onChange={(e) => setdurationValue(e.target.value)}
                    />
                    {/* <CustomFormLabel htmlFor="fs-uname" sx={{ mt: 0 }}>
              Program Duration
            </CustomFormLabel>
            <CustomTextField id="fs-uname" placeholder="Enter Program" fullWidth /> */}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomFormLabel htmlFor="fs-uname" sx={{ mt: 0 }}>
                        Program Price
                    </CustomFormLabel>
                    <CustomTextField id="fs-uname" placeholder="Enter Program price" name="programPrice" value={programPrice} onChange={(e) => setProgramPrice(e.target.value)} fullWidth />
                    {/* <CustomOutlinedInput
              endAdornment={<InputAdornment position="end">@example.com</InputAdornment>}
              id="fs-email"
              placeholder="john.deo"
              fullWidth
            /> */}
                    {/* <CustomFormLabel htmlFor="fs-pwd">Confirm Password</CustomFormLabel>
            <CustomOutlinedInput
              type={showPassword2 ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword2}
                    onMouseDown={handleMouseDownPassword2}
                    edge="end"
                  >
                    {showPassword2 ? <IconEyeOff size="20" /> : <IconEye size="20" />}
                  </IconButton>
                </InputAdornment>
              }
              id="fs-pwd"
              placeholder="john.deo"
              fullWidth
            /> */}
                </Grid>

                <Grid item xs={12}>
                    <Divider sx={{ mx: '-24px' }} />
                    {/* <Typography variant="h6" mt={2}>
                        Personal Info
                    </Typography> */}
                </Grid>
                <Grid item xs={12} sm={6}>
                    {/* <CustomFormLabel htmlFor="fs-fname" sx={{ mt: 0 }}>
              First Name
            </CustomFormLabel> */}
                    {/* <CustomTextField id="fs-fname" placeholder="John" fullWidth /> */}
                    <CustomFormLabel htmlFor="fs-country">Pillars</CustomFormLabel>
                    <Autocomplete
                        multiple
                        fullWidth
                        id="tags-outlined"
                        options={pillar}
                        // onChange={handleOnChangeOption}
                        onChange={(event, value) => setpillarValue(value)}
                        getOptionLabel={(option) => option.label}
                        // value={selectedProgram.pillars}
                        // defaultValue={pillar.filter((p) => pillarValue.includes(p.label))}
                        value={pillarValue}
                        filterSelectedOptions
                        renderInput={(params) => (
                            <CustomTextField {...params} aria-label="Favorites" />
                        )}
                    />
                    {/* <Autocomplete
                        multiple
                        fullWidth
                        id="tags-outlined"
                        options={guruValue}
                        // onChange={handleOnChangeOption}
                        onChange={(event, value) => setguruValue(value)}
                        getOptionLabel={(option) => option.label}
                        // value={selectedProgram.pillars}
                        // defaultValue={pillar.filter((p) => pillarValue.includes(p.label))}
                        value={guruValue}
                        filterSelectedOptions
                        renderInput={(params) => (
                            <CustomTextField {...params} aria-label="Favorites" />
                        )}
                    /> */}
                     <CustomFormLabel htmlFor="fs-country">Gurus</CustomFormLabel>
                    <CustomSelect
                        id="standard-select-currency"
                        value={guruValue}
                        onChange={(e) => {console.log("here gutu",e.target.value);setguruValue(e.target.value)}}
                        fullWidth
                        variant="outlined"
                    >
                        {gurus.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </CustomSelect>
                    <CustomFormLabel htmlFor="fs-date">Program Date</CustomFormLabel>
                    <CustomTextField type="date" id="fs-date" placeholder="John Deo" value={dateValue} onChange={(e) => setdateValue(e.target.value)} fullWidth />
                </Grid>


                <Grid item xs={12} sm={6}>
                    {/* <CustomFormLabel htmlFor="fs-lname" sx={{ mt: { sm: 0 } }}>
              Last Name
            </CustomFormLabel>
            <CustomTextField id="fs-lname" placeholder="Deo" fullWidth /> */}
                    <CustomFormLabel htmlFor="fs-language">Vihars</CustomFormLabel>
                    {/* <CustomSelect value={language} onChange={handleChange} fullWidth variant="outlined"> */}
                    {/* {lang.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))} */}
                    <Autocomplete
                        multiple
                        fullWidth
                        id="tags-outlined"
                        options={vihar}
                        // onChange={handleOnChangeOption}
                        onChange={(event, value) => setviharValue(value)}
                        getOptionLabel={(option) => option.label}
                        // defaultValue={vihar}
                        value={viharValue}
                        filterSelectedOptions
                        renderInput={(params) => (
                            <CustomTextField {...params} placeholder={selectedOptions.length === 0 ? 'Select Vihars' : ''} value={viharValue} onChange={(e) => setviharValue(e.target.value)} aria-label="Favorites" />
                        )}
                    />
                    {/* </CustomSelect> */}
                    <CustomFormLabel htmlFor="fs-phone"> Focus Of Program</CustomFormLabel>
                    <CustomTextField id="fs-phone" placeholder="Enter focus of program" value={focusValue} onChange={(e) => setfocusValue(e.target.value)} fullWidth />

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
                        >
                            <FormControlLabel value="Active" control={<Radio />} label="Active" />
                            <FormControlLabel value="Inactive" control={<Radio />} label="Inactive" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomFormLabel sx={{ m: 0 }} htmlFor="fs-date">Program Image</CustomFormLabel>
                    <Upload
                        name="image"
                        listType="picture-card"
                        className="avatar-uploader"
                        accept="image/*"
                        showUploadList={false}
                        beforeUpload={beforeUpload}
                        onChange={handleChangeImg}
                        action={null}
                    >
                        {imageUrl ? (
                            <img
                                src={imageUrl}
                                alt="avatar"
                                style={{
                                    width: "100%",
                                }}
                            />
                        ) : (
                            uploadButton
                        )}
                    </Upload>
                </Grid>
                <Grid item xs={12} >
                    <CustomFormLabel htmlFor="fs-editor">About Program</CustomFormLabel>
                    <ReactQuill
                        id="fs-editor"
                        value={aboutValue}
                        // onChange={(e) => setaboutValue(e.target.value)}
                        onChange={(value) => setaboutValue(value)}
                        style={{ height: '10rem', marginBottom: '3rem' }}
                    />
                </Grid>
                {/* <Grid item xs={12}>
                <CustomFormLabel htmlFor="fs-editor">Focus of Program</CustomFormLabel>
                <ReactQuill
                    id="fs-editor"
                    value={editorFocus}
                    onChange={(value) => setEditorFocus(value)}
                    style={{ height: '300px' }}
                />
            </Grid> */}

                <Grid item xs={12} className='pt-50'>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" color="primary"
                            onClick={() => handleSubmitBtn()}
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

export default EditProgramForm;
