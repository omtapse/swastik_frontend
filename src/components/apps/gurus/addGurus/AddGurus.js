import React, { useState } from 'react';
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
import 'react-quill/dist/quill.snow.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

// import Button from '@mui/material/Button';
import PageContainer from '../../../container/PageContainer';
import Breadcrumb from '../../../../layouts/full/shared/breadcrumb/Breadcrumb';
import ParentCard from '../../../shared/ParentCard';
import { Upload, message, notification } from "antd";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import routes from '../../../../utils/routes';
import { addGurus } from '../../../../store/apps/guru/GuruSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';




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

const FormSeparator = () => {
    // country
    const [country, setCountry] = React.useState('');
    const [editorContent, setEditorContent] = useState('');
    const [editorTestimonial, setEditorTestimonial] = useState('');

    const [fileList, setFileList] = useState([]);
    const [imageUrl, setImageUrl] = useState();
    const [loading, setLoading] = useState(false);
    const [expertise,setExperties] =useState();
    const [name, setName] = useState();

    const handleChange = (event) => {
        setCountry(event.target.value);
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

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
            console.log("hhhhhhh", res.url)
            setLoading(false);
        }
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    const handleSubmitBtn = async () => {
        try {
            const data = {
                name: name,
                image: imageUrl,
                about:editorContent ,
                experties: expertise,
                programImages: fileList.map((file) => file.url),
                testimonials: editorTestimonial,
            };
    
            // Dispatch the action and wait for it to complete
            await dispatch(addGurus(data));
            console.log(",,,,,,,",data)
            if(data){
                navigate('/apps/gurus/gurus-list');
            }
    
            
        } catch (error) {
            console.error("Error:", error);
        }
    }


    return (
        <div>
            {/* <Typography variant="h6" mb={3}>
          Account Details
        </Typography> */}
            {/* ------------------------------------------------------------------------------------------------ */}
            {/* Basic Layout */}
            {/* ------------------------------------------------------------------------------------------------ */}
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <CustomFormLabel htmlFor="fs-uname" sx={{ mt: 0 }}>
                        Guru Name
                    </CustomFormLabel>
                    <CustomTextField id="fs-uname" placeholder="Enter Guru name" fullWidth value ={name} onChange = {(e) => setName(e.target.value)}/>

                    {/* <CustomFormLabel htmlFor="fs-uname" sx={{ mt: 0 }}>
              Expertise
            </CustomFormLabel>
            <CustomTextField id="fs-uname" placeholder="John Deo" fullWidth /> */}
                    <CustomFormLabel sx={{ m: 0 }} htmlFor="fs-date">Master Image</CustomFormLabel>
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

                    {/* <CustomFormLabel htmlFor="fs-pwd">Main Image</CustomFormLabel>
            <CustomOutlinedInput
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <IconEyeOff size="20" /> : <IconEye size="20" />}
                  </IconButton>
                </InputAdornment>
              }
              id="fs-pwd"
              placeholder="john.deo"
              fullWidth
            /> */}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomFormLabel htmlFor="fs-email" sx={{ mt: { sm: 0 } }}>
                        Expertise
                    </CustomFormLabel>
                    <CustomOutlinedInput
                        // endAdornment={<InputAdornment position="Start">Enter experise</InputAdornment>}
                        id="fs-email"
                        placeholder="Enter experise"
                        fullWidth
                        value={expertise}
                        onChange={(e) => setExperties(e.target.value) }
                    />
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
                       <CustomFormLabel htmlFor="fs-date">Program Images</CustomFormLabel>
                       <Upload
                        // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList}
                        // onPreview={handlePreview}
                        // onChange={handleChangeImage}
                        accept="image/*"
                        beforeUpload={beforeUploadProgramImages}
                    >
                        {fileList.length >= 8 ? null : uploadButton}
                    </Upload>

                </Grid>
                {/* <Grid item xs={12}>
                    <Divider sx={{ mx: '-24px' }} />
                    <Typography variant="h6" mt={2}>
                        Personal Info
                    </Typography>
                </Grid> */}


                {/* <Grid item xs={12} sm={6}>
                    <CustomFormLabel htmlFor="fs-fname" sx={{ mt: 0 }}>
                        First Name
                    </CustomFormLabel>
                    <CustomTextField id="fs-fname" placeholder="John" fullWidth />
                    <CustomFormLabel htmlFor="fs-country">Country</CustomFormLabel>
                    <CustomSelect
                        id="standard-select-currency"
                        value={country}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                    >
                        {countries.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </CustomSelect>
                    <CustomFormLabel htmlFor="fs-date">Birth Date</CustomFormLabel>
                    <CustomTextField type="date" id="fs-date" placeholder="John Deo" fullWidth />
                    
                </Grid> */}

                {/* <Grid item xs={12} sm={6}>
                    <CustomFormLabel htmlFor="fs-lname" sx={{ mt: { sm: 0 } }}>
                        Last Name
                    </CustomFormLabel>
                    <CustomTextField id="fs-lname" placeholder="Deo" fullWidth />
                    <CustomFormLabel htmlFor="fs-language">Language</CustomFormLabel>
                    <CustomSelect value={language} onChange={handleChange2} fullWidth variant="outlined">
                        {lang.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </CustomSelect>

                    <CustomFormLabel htmlFor="fs-phone">Phone no</CustomFormLabel>
                    <CustomTextField id="fs-phone" placeholder="123 4567 201" fullWidth />
                </Grid> */}
                <Grid item xs={12} >
                <CustomFormLabel htmlFor="fs-editor">About Program</CustomFormLabel>
                <ReactQuill
                    id="fs-editor"
                    value={editorContent}
                    onChange={(value) => setEditorContent(value)}
                    style={{height:'10rem',marginBottom:'3rem'}}
                />
            </Grid>

            <Grid item xs={12} >
                <CustomFormLabel htmlFor="fs-editor">Testimonials</CustomFormLabel>
                <ReactQuill
                    id="fs-editor"
                    value={editorTestimonial}
                    onChange={(value) => setEditorTestimonial(value)}
                    style={{height:'10rem',marginBottom:'3rem'}}
                />
            </Grid>

                <Grid item xs={12}>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" color="primary" onClick={() => handleSubmitBtn()}>
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

export default FormSeparator;
