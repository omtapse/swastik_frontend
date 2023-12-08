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
import { addGurus, updateGuruById } from '../../../../store/apps/guru/GuruSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';


const FormSeparator = () => {
    // country
    const [country, setCountry] = React.useState('');
    const [editorContent, setEditorContent] = useState('');
    const [editorTestimonial, setEditorTestimonial] = useState([]);

    const [fileList, setFileList] = useState([]);
    const [imageUrl, setImageUrl] = useState();
    const [loading, setLoading] = useState(false);
    const [expertise, setExperties] = useState();
    const [name, setName] = useState();
    const { id } = useParams();

    const selectedGuru = useSelector((state) => state.GuruReducer.selectedGuru);
    console.log("selectedGuru", selectedGuru)

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
            setErrors({ ...errors, image: "" });
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
            setErrors({ ...errors, programImages: "" });
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

    useEffect(() => {
        // Set initial values when the component mounts
        setName(selectedGuru?.name || '');
        setExperties(selectedGuru?.experties || '');
        // setFileList(selectedGuru.programImages || []);
        setFileList(selectedGuru?.programImages.map((item) => ({ url: item })))
        // setImageUrl(selectedGuru.image || '');
        setImageUrl(selectedGuru?.image || '')
        setEditorContent(selectedGuru?.about || '');
        setEditorTestimonial(selectedGuru?.testimonials[0] || '');
    }, [selectedGuru]);
    console.log("urllllll", imageUrl)

    const [errors, setErrors] = useState({});

    const validateForm = (values) => {
        console.log("validateForm",values)
        const errors = {};
        if (!values.name) {
            errors.name = 'Required';
        }
        if (!values.experties) {
            errors.experties = 'Required';
        }
        if (!values.image) {
            errors.image = 'Required';
        }
        if (!values.about) {
            errors.about = 'Required';
        }
        if (!values.programImages || values.programImages.length === 0) {
            errors.programImages = 'Required';
        }
        if (values.testimonials="") {
            errors.testimonials = 'Required';
        }

        setErrors(errors);
        if (Object.values(errors).length > 0) {
            return errors;
        }
        // return errors;
        return null;
    };


    const scrollToError = (errors, handleSubmitBtn) => {
        console.log("errors", errors)
        if (errors) {
            const errorField = Object.keys(errors)[0];
            const field = document.getElementsByName(errorField)[0];
            if (field) {
                field.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Adjusted to 'start'
            }
            handleSubmitBtn();
        } else {
            handleSubmitBtn();
        }
    };

    const handleSubmitBtn = async () => {

        console.log("AAAALLLALAL",editorTestimonial)
        const errors = validateForm({
            name:name,
            experties:expertise,
            image: imageUrl,
            about: editorContent,
            programImages: fileList.map((file) => file.url),
            testimonials: editorTestimonial,
        });

        if (errors && Object.values(errors).some(error => error)) {
            console.error("Validation errors:", errors);
            return;
        }

        try {
            const data = {
                name: name,
                guruImage: imageUrl,
                about: editorContent,
                experties: expertise,
                programImages: fileList,
                testimonials: editorTestimonial,
            };
            console.log("KKKKK",data)
            // Dispatch the action and wait for it to complete
            await dispatch(updateGuruById(selectedGuru._id, data));
            console.log("data>>>>>>>>", data)
            if (data) {
                navigate('/gurus/gurusList');
            }

        } catch (error) {
            console.error("Error:", error);
        }
    }


    return (
        <div>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <CustomFormLabel htmlFor="fs-uname" sx={{ mt: 0 }}>
                        Guru Name
                    </CustomFormLabel>
                    <CustomTextField
                        id="fs-uname"
                        placeholder="Enter Guru name"
                        fullWidth
                        value={name}
                        inputProps={{ maxLength: 50 }}
                        // onChange={(e) => setName(e.target.value)}
                        onChange={(e) => {
                            setName(e.target.value);
                            setErrors({ ...errors, name: "" });
                        }}
                    />
                    {Boolean(errors.name) && (
                        <p style={{ color: 'red', margin: '5px 0' }}>{errors.name}</p>
                    )}


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
                    {Boolean(errors.image) && (
                        <p style={{ color: 'red', margin: '5px 0' }}>{errors.image}</p>
                    )}

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
                        // onChange={(e) => setExperties(e.target.value)}
                        onChange={(e) => {
                            setExperties(e.target.value);
                            setErrors({ ...errors, expertise: "" });
                        }}
                    />
                    {Boolean(errors.expertise) && (
                        <p style={{ color: 'red', margin: '5px 0' }}>{errors.expertise}</p>
                    )}

                    <CustomFormLabel htmlFor="fs-date">Program Images</CustomFormLabel>
                    <Upload
                        // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList}
                        // onPreview={handlePreview}
                        // onChange={handleChangeImage}
                        accept="image/*"
                        beforeUpload={beforeUploadProgramImages}
                        // onChange={({ fileList: newFileList }) => setFileList(newFileList)}
                    >
                        {fileList.length >= 8 ? null : uploadButton}
                    </Upload>
                    {Boolean(errors.programImages) && (
                        <p style={{ color: 'red', margin: '5px 0' }}>{errors.programImages}</p>
                    )}

                </Grid>

                <Grid item xs={12} >
                    <CustomFormLabel htmlFor="fs-editor">About Guru</CustomFormLabel>
                    <ReactQuill
                        id="fs-editor"
                        value={editorContent}
                        style={{ height: '10rem', marginBottom: '3rem' }}
                        // onChange={(value) => setEditorContent(value)}
                        onChange={(value) => {
                            setEditorContent(value);
                            setErrors({ ...errors, about: "" });
                        }}
                    />
                    {Boolean(errors.about) && (
                        <p style={{ color: 'red', margin: '5px 0' }}>{errors.about}</p>
                    )}
                </Grid>

                <Grid item xs={12} >
                    <CustomFormLabel htmlFor="fs-editor">Testimonials</CustomFormLabel>
                    <ReactQuill
                        id="fs-editor"
                        value={editorTestimonial}
                        style={{ height: '10rem', marginBottom: '3rem' }}
                        // onChange={(value) => setEditorTestimonial(value)}
                        onChange={(value) => {
                            setEditorTestimonial(value);
                            setErrors({ ...errors, testimonials: "" });
                        }}
                    />
                    {Boolean(errors.testimonials) && (
                        <p style={{ color: 'red', margin: '5px 0' }}>{errors.testimonials}</p>
                    )}
                </Grid>

                <Grid item xs={12}>
                    <Stack direction="row" spacing={2}>
                        <Button
                            variant="contained"
                            color="primary"
                            // onClick={() => handleSubmitBtn()}
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

export default FormSeparator;
