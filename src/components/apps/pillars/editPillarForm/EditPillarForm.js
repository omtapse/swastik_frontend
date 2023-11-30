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

// import { IconEye, IconEyeOff } from '@tabler/icons';
import CustomFormLabel from '../../../forms/theme-elements/CustomFormLabel';
import CustomTextField from '../../../forms/theme-elements/CustomTextField';
// import CustomOutlinedInput from '../../../forms/theme-elements/CustomOutlinedInput';
// import CustomSelect from '../../../forms/theme-elements/CustomSelect';
// import { Paper } from '@mui/material';
import ReactQuill from 'react-quill';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import 'react-quill/dist/quill.snow.css';
// import Button from '@mui/material/Button';
// import PageContainer from '../../../container/PageContainer';
// import Breadcrumb from '../../../../layouts/full/shared/breadcrumb/Breadcrumb';
// import ParentCard from '../../../shared/ParentCard';
import { Upload, message, notification } from "antd";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import routes from '../../../../utils/routes';
// import { GetPillars,CreatePillar,UpdatePillar, addPillar } from '../../../../store/apps/pillars/PillarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { updatePillarById } from '../../../../store/apps/pillars/PillarSlice';




const countries = [
    {
        value: 'india',
        label: 'India',
    },
    {
        value: 'uk',
        label: 'United Kingdom',
    },
    {
        value: 'srilanka',
        label: 'Srilanka',
    },
];

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


const AddProgramForm = () => {
    // country
    const [country, setCountry] = React.useState('');
    const [text, setText] = useState('');
    const [editorContent, setEditorContent] = useState('');
    const [editorFocus, setEditorFocus] = useState('')
    const [loading, setLoading] = useState(false);
        const [imageUrl, setImageUrl] = useState();
        const [title,setTitle] = useState();
        // const [tagline,seTagline] = useState();
        

        const dispatch = useDispatch();
        const navigate = useNavigate();

        const selectedPillar = useSelector((state) => state.PillarReducer?.selectedPillar || []);
        console.log("selectedPillar",selectedPillar);

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



    // const getBase64 = (img, callback) => {
    //   const reader = new FileReader();
    //   reader.addEventListener('load', () => callback(reader.result));
    //   reader.readAsDataURL(img);
    // };

    const beforeUpload = async (file) => {
        try {
            setLoading(true);
            const formData = new FormData();
            formData.append("image", file);
            const res = await routes.APIS.UPLOAD_IMAGE(formData);
            setImageUrl(res.url);
            setLoading(false);
            return false; // Prevent default upload
        } catch (error) {
            console.log("error", error);
        }
    };

    const beforeUploadProgramImages = async (file) => {
        try {
            setLoading(true);
            const formData = new FormData();
            formData.append("image", file);
            const res = await routes.APIS.UPLOAD_IMAGE(formData);
            setFileList([...fileList, { url: res.url }]);
            setLoading(false);
            return false; // Prevent default upload
        } catch (error) {
            console.log("error", error);
        }
    };
    const handleChangeImage = async (info) => {
        if (info.file.status === "uploading") {
            console.log("info", info.file);
            setLoading(true);
            let formData = new FormData();
            formData.append("image", info.file);
            let res = await routes.APIS.UPLOAD_IMAGE(formData);
            setImageUrl(res.url);
            console.log("hhhhhhh",res.url)
            setLoading(false);
        }
    };

    useEffect(() => {
        setTitle(selectedPillar?.pillarTitle || '')
        setImageUrl(selectedPillar?.pillarImage || '');
        setEditorContent(selectedPillar?.pillarDescription || '');

      }, [selectedPillar]);
      console.log("urllllll",imageUrl)




        

        // const handleChangeimg = (info) => {
        //     if (info.file.status === 'uploading') {
        //         setLoading(true);
        //         return;
        //     }
        //     if (info.file.status === 'done') {
        //         // Get this url from response in the real world.
        //         getBase64(info.file.originFileObj, (url) => {
        //             setLoading(false);
        //             setImageUrl(url);
        //         });
        //     }
        // };


        const uploadButton = (
            <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{ marginTop: 8 }}>Upload</div>
            </div>
        );



        const handleSubmitBtn = () =>{
            const data = {
                pillarTitle:title ,
                pillarImage:imageUrl,
                pillarDescription:editorContent
        }

        dispatch(updatePillarById(selectedPillar._id,data));
        navigate('/apps/pillars/pillar-list')

        }



        return (
            <div>
                <Typography variant="h6" mb={3}>
                    Pillar Details
                </Typography>
                {/* ------------------------------------------------------------------------------------------------ */}
                {/* Basic Layout */}
                {/* ------------------------------------------------------------------------------------------------ */}
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <CustomFormLabel htmlFor="fs-uname" sx={{ mt: 0 }}>
                            Pillar title
                        </CustomFormLabel>
                        <CustomTextField id="fs-uname" placeholder="Enter Program" fullWidth value={title} onChange={(e) => setTitle(e.target.value) } />

                        {/* <CustomFormLabel sx={{ m: 0 }} htmlFor="fs-date">Master Image</CustomFormLabel>
                        <Button
                            component="label"
                            variant="contained"
                            startIcon={<CloudUploadIcon />}
                        >
                            Upload file
                            <VisuallyHiddenInput type="file" />
                        </Button> */}
                        {/* <CustomFormLabel htmlFor="fs-uname" sx={{ mt: 0 }}>
              Program Duration
            </CustomFormLabel>
            <CustomTextField id="fs-uname" placeholder="Enter Program" fullWidth /> */}
                    </Grid>
                    {/* <Grid item xs={12} sm={6}>
                        <CustomFormLabel htmlFor="fs-uname" sx={{ mt: 0 }}>
                            Tagline
                        </CustomFormLabel>
                        <CustomTextField id="fs-uname" placeholder="Enter Tagline" fullWidth value={tagline} onChange={(e) => setTagline(e.target.value)} /> */}
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
                    {/* </Grid> */}

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
                        <CustomFormLabel sx={{ m: 0 }} htmlFor="fs-date">Pillar Image</CustomFormLabel>
                        <Upload
                            name="image"
                            listType="picture-card"
                            className="avatar-uploader"
                            accept="image/*"
                            showUploadList={false}
                            beforeUpload={beforeUpload}
                            onChange={handleChangeImage}
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


                        {/* <CustomFormLabel htmlFor="fs-date">Program Date</CustomFormLabel>
                    <CustomTextField type="date" id="fs-date" placeholder="John Deo" fullWidth /> */}


                    </Grid>


                    <Grid item xs={12} sm={6}>
                        {/* <CustomFormLabel htmlFor="fs-lname" sx={{ mt: { sm: 0 } }}>
              Last Name
            </CustomFormLabel>
            <CustomTextField id="fs-lname" placeholder="Deo" fullWidth /> */}
                        {/* <CustomFormLabel sx={{m:0}}  htmlFor="fs-date">Facility Image</CustomFormLabel>
                    <Button
                        component="label"
                        variant="contained"
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload file
                        <VisuallyHiddenInput type="file" />
                    </Button> */}
                        {/* <CustomFormLabel htmlFor="fs-phone"> Focus Of Program</CustomFormLabel>
                    <CustomTextField id="fs-phone" placeholder="Enter focus of program" fullWidth /> */}

                    </Grid>
                    {/* <Grid item xs={12} sm={6}>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Program Status</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="Active" control={<Radio />} label="Active" />
                            <FormControlLabel value="Inactive" control={<Radio />} label="Inactive" />
                        </RadioGroup>
                    </FormControl>
                </Grid> */}
                    {/* <Grid item xs={12} sm={6}>
                <CustomFormLabel sx={{m:0}}  htmlFor="fs-date">Program Image</CustomFormLabel>
                    <Button
                        component="label"
                        variant="contained"
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload file
                        <VisuallyHiddenInput type="file" />
                    </Button>
                </Grid> */}
                    <Grid item xs={12} >
                        <CustomFormLabel htmlFor="fs-editor">Brief of Pillar</CustomFormLabel>
                        <ReactQuill
                            id="fs-editor"
                            value={editorContent}
                            onChange={(value) => setEditorContent(value)}
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
                            <Button variant="contained" color="primary" onClick={() => handleSubmitBtn()} >
                            {/* onClick={() => handleSubmitBtn()} */}
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
