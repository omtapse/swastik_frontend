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
import { GetPillars, CreatePillar, addPillar } from '../../../../store/apps/pillars/PillarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';


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
    const [editorFocus, setEditorFocus] = useState('')
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [title, setTitle] = useState();
    // const [tagline,seTagline] = useState();


    const dispatch = useDispatch();
    const navigate = useNavigate();

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


    const beforeUpload = async (file) => {
        try {
            setLoading(true);
            const formData = new FormData();
            formData.append("image", file);
            const res = await routes.APIS.UPLOAD_IMAGE(formData);
            setImageUrl(res.url);
            console.log("*****")

            setErrors({ ...errors, imageUrl: "" });
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
            setErrors({ ...errors, FileList: "" });
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
            console.log("&&&&")
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

    const [errors, setErrors] = useState({});
    const validateForm = () => {
        let errors = {};
        if (!title) {
            errors.title = "Pillar Title is required";
        }
        if (!imageUrl) {
            errors.imageUrl = "Pillar image is required";
        }
        if (!editorContent) {
            errors.editorContent = "Brief of Pillar is required";
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


    const handleSubmitBtn = () => {
        const errors = validateForm(
            title,
            imageUrl,
            editorContent
        );
        if (Object.keys(errors).length > 0) {
            return;
        }

        const data = {
            pillarTitle: title,
            pillarImage: imageUrl,
            pillarDescription: editorContent
        }

        dispatch(addPillar(data));
        navigate('/pillars/pillarList')

    }



    return (
        <div>
            {/* <Typography variant="h6" mb={3}>
                Pillar Details
            </Typography> */}

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <CustomFormLabel htmlFor="fs-uname" sx={{ mt: 0 }}>
                        Pillar title
                    </CustomFormLabel>
                    <CustomTextField
                        id="fs-uname"
                        placeholder="Enter Program"
                        fullWidth
                        value={title}
                        inputProps={{ maxLength: 50 }}
                        onChange={(e) => {
                            setTitle(e.target.value);
                            setErrors({ ...errors, title: "" });
                        }}
                    />
                    {Boolean(errors.title) && (
                        <Typography variant="caption" color="red">
                            {errors.title}
                        </Typography>
                    )}

                </Grid>

                <Grid item xs={12}>
                    <Divider sx={{ mx: '-24px' }} />

                </Grid>

                <Grid item xs={12} sm={6}>

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
                    {Boolean(errors.imageUrl) && (
                        <Typography variant="caption" color="red">
                            {errors.imageUrl}
                        </Typography>
                    )}


                </Grid>

                <Grid item xs={12} >
                    <CustomFormLabel htmlFor="fs-editor">Brief of Pillar</CustomFormLabel>
                    <ReactQuill
                        id="fs-editor"
                        value={editorContent}
                        style={{ height: '10rem', marginBottom: '3rem' }}
                        // onChange={(value) => setEditorContent(value)}
                        onChange={(value) => {
                            setEditorContent(value);
                            setErrors({ ...errors, editorContent: "" });
                        }}
                    />
                    {Boolean(errors.editorContent) && (
                        <Typography variant="caption" color="red">
                            {errors.editorContent}
                        </Typography>
                    )}
                </Grid>


                <Grid item xs={12} className='pt-50'>
                    <Stack direction="row" spacing={2}>
                        <Button
                            variant="contained"
                            color="primary"
                            // onClick={() => handleSubmitBtn()}
                            onClick={() => scrollToError(errors, handleSubmitBtn)}
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
