import React, { useState } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import {
    Grid,
    Button,
    Stack
} from '@mui/material';
import CustomFormLabel from '../../../forms/theme-elements/CustomFormLabel';
import CustomTextField from '../../../forms/theme-elements/CustomTextField';
import CustomOutlinedInput from '../../../forms/theme-elements/CustomOutlinedInput';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Upload, message, notification } from "antd";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import routes from '../../../../utils/routes';
import { addGurus } from '../../../../store/apps/guru/GuruSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';


const FormSeparator = () => {
    // country
    const [country, setCountry] = React.useState('');
    const [editorContent, setEditorContent] = useState('');
    const [editorTestimonial, setEditorTestimonial] = useState('');

    const [fileList, setFileList] = useState([]);
    const [imageUrl, setImageUrl] = useState();
    const [loading, setLoading] = useState(false);
    const [expertise, setExpertise] = useState();
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

    const [errors, setErrors] = useState({});

    const validateForm = (values) => {
        const errors = {};
        if (!values.name.trim()) {
            errors.name = 'Required';
        }
        if (!values.expertise.trim()) {
            errors.expertise = 'Required';
        }
        if (!values.image) {
            errors.image = 'Required';
        }
        if (!values.about.trim()) {
            errors.about = 'Required';
        }
        if (!values.programImages || values.programImages.length === 0) {
            errors.programImages = 'Required';
        }
        if (!values.testimonials.trim()) {
            errors.testimonials = 'Required';
        }

        setErrors(errors);
        return errors;
    };



    const handleSubmitBtn = async () => {

        const errors = validateForm({
            name,
            expertise,
            image: imageUrl,
            about: editorContent,
            programImages: fileList,
            testimonials: editorTestimonial,
        });

        if (Object.values(errors).some(error => error)) {
            console.error("Validation errors:", errors);
            return;
        }

        try {
            const data = {
                name: name,
                image: imageUrl,
                about: editorContent,
                experties: expertise,
                programImages: fileList.map((file) => file.url),
                testimonials: editorTestimonial,
            };

            // Dispatch the action and wait for it to complete
            await dispatch(addGurus(data));
            console.log(",,,,,,,", data)
            if (data) {
                navigate('/apps/gurus/gurus-list');
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
                        onChange={(e) => {
                            setName(e.target.value);
                            setErrors({ ...errors, name: "" });
                        }}
                    />
                    {Boolean(errors.name) && (
                        <p style={{ color: 'red', margin: '5px 0' }}>{errors.name}</p>
                    )}

                    <CustomFormLabel sx={{ m: 0 }} htmlFor="fs-date">
                        Master Image
                    </CustomFormLabel>
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
                        id="fs-email"
                        placeholder="Enter expertise"
                        fullWidth
                        value={expertise}
                        // onChange={(e) => setExpertise(e.target.value)}
                        onChange={(e) => {
                            setExpertise(e.target.value);
                            setErrors({ ...errors, expertise: "" });
                        }}
                    />
                    {Boolean(errors.expertise) && (
                        <p style={{ color: 'red', margin: '5px 0' }}>{errors.expertise}</p>
                    )}

                    <CustomFormLabel htmlFor="fs-date">Program Images</CustomFormLabel>
                    <Upload
                        listType="picture-card"
                        fileList={fileList}
                        accept="image/*"
                        beforeUpload={beforeUploadProgramImages}
                    >
                        {fileList.length >= 8 ? null : uploadButton}
                    </Upload>
                    {Boolean(errors.programImages) && (
                        <p style={{ color: 'red', margin: '5px 0' }}>{errors.programImages}</p>
                    )}
                </Grid>

                <Grid item xs={12} >
                    <CustomFormLabel htmlFor="fs-editor">About Program</CustomFormLabel>
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
                            onClick={() => handleSubmitBtn()}
                            // onClick={e => scrollToError(errors, handleSubmit)}
                            // onClick={e => scrollToError(errors, handleSubmitBtn)}
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
