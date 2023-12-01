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
import { fetchVihar, CreateVihar, GetVihars, addVihar } from '../../../../store/apps/vihar/ViharSlice';
import Autocomplete from '@mui/material/Autocomplete';



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
    const [fileList, setFileList] = useState([]);
    const [options, setOptions] = useState([]);
    const [activities, setActivities] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [activityValue, setActivityValue] = useState()
    const [imageUrl, setImageUrl] = useState();
    const [title, setTitle] = useState();
    const [tagline, setTagline] = useState();


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
            setErrors({ ...errors, fileList: "" });
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




    const getAllActivities = async () => {
        try {
            const res = await routes.APIS.GET_ALL_ACTIVITIES_VIHARS();
            console.log("resssss", res);
            let data = res.activities.map((item) => { return { label: item.activityName, value: item.activityName } });
            setOptions(data);
        } catch (error) {
            console.log("error", error);
        }
    };


    const handleSetActivity = (activity) => {
        let newArray = activity?.map((act) => {

            if (act.label) {
                return act
            } else {
                let newObj = {
                    label: act,
                    value: act
                }
                setOptions((prev) => [...prev, newObj])
                return newObj
            }
        })

        setActivities(newArray);
    }

    useEffect(() => {

        getAllActivities();
    }, []);

    useEffect(() => {
        console.log("activity", options, activities);

    }, [activities, options])



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
            errors.title = "Title is required";
        }
        if (!tagline) {
            errors.tagline = "Tagline is required";
        }
        if (!imageUrl) {
            errors.imageUrl = "Master Image is required";
        }
        if (!editorContent) {
            errors.editorContent = "Brief of Vihar is required";
        }
        if (!activities.length) {
            errors.activities = "Activities is required";
        }
        if (!fileList.length) {
            errors.fileList = "Facility Images is required";
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
            title,
            tagline,
            imageUrl,
            editorContent,
            activities,
            fileList
        );

        if (Object.keys(errors).length > 0) {
            return;
        }

        try {
            const data = {
                viharName: title,
                tagLine: tagline,
                masterImage: imageUrl,
                activities: activities,
                vihardescription: editorContent,
                facilityImages: fileList.map((file) => file.url),
            };

            // Dispatch the action and wait for it to complete
            await dispatch(addVihar(data));

            navigate('/apps/vihars/vihar-list');
        } catch (error) {
            console.error("Error:", error);
        }
    }



    return (
        <div>
            <Typography variant="h6" mb={3}>
                Pillar Details
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <CustomFormLabel htmlFor="fs-uname" sx={{ mt: 0 }}>
                        Vihar Name
                    </CustomFormLabel>
                    <CustomTextField
                        id="fs-uname"
                        placeholder="Enter Program"
                        fullWidth
                        value={title}
                        // onChange={(e) => setTitle(e.target.value)}
                        onChange={(e) => {
                            setTitle(e.target.value);
                            setErrors({ ...errors, title: "" });
                        }}
                    />

                    {Boolean(errors.title) && (
                        <p style={{ color: 'red', margin: '5px 0' }}>{errors.title}</p>
                    )}

                    <CustomFormLabel htmlFor="fs-uname" sx={{ mt: 0 }}>
                        Tagline
                    </CustomFormLabel>
                    <CustomTextField
                        id="fs-uname"
                        placeholder="Enter Tagline"
                        fullWidth
                        value={tagline}
                        // onChange={(e) => setTagline(e.target.value)}
                        onChange={(e) => {
                            setTagline(e.target.value);
                            setErrors({ ...errors, tagline: "" });
                        }}
                    />
                    {Boolean(errors.tagline) && (
                        <p style={{ color: 'red', margin: '5px 0' }}>{errors.tagline}</p>
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
                    {Boolean(errors.imageUrl) && (
                        <p style={{ color: 'red', margin: '5px 0' }}>{errors.imageUrl}</p>
                    )}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomFormLabel htmlFor="fs-uname" sx={{ mt: 0 }}>
                        activities
                    </CustomFormLabel>
                    <Autocomplete
                        freeSolo
                        multiple
                        fullWidth
                        id="tags-outlined"
                        options={options || []}
                        // onChange={handleOnChangeOption}
                        // onChange={(event, value) => { handleSetActivity(value) }}
                        onChange={(event, value) => {
                            handleSetActivity(value);
                            setErrors({ ...errors, activities: "" });
                        }}
                        getOptionLabel={(option) => option.label}
                        defaultValue={activities}
                        filterSelectedOptions
                        onInputChange={(event, newInputValue) => {
                            // Add the new value to the options list

                            // setOptions((prevOptions) =>{
                            //     console.log("prevOptions",prevOptions);
                            //     return[
                            //     ...prevOptions,
                            //     { label: newInputValue, value: newInputValue },
                            // ]});
                        }}

                        renderInput={(params) => (
                            <CustomTextField {...params} value={activityValue} aria-label="Favorites" />
                        )}
                    />
                    {Boolean(errors.activities) && (
                        <p style={{ color: 'red', margin: '5px 0' }}>{errors.activities}</p>
                    )}
                </Grid>

                <Grid item xs={12}>
                    <Divider sx={{ mx: '-24px' }} />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <CustomFormLabel sx={{ m: 0 }} htmlFor="fs-date">Facility Image</CustomFormLabel>
                    <Upload
                        listType="picture-card"
                        fileList={fileList}
                        // onPreview={handlePreview}
                        // onChange={handleChangeImage}
                        accept="image/*"
                        beforeUpload={beforeUploadProgramImages}
                    >
                        {fileList.length >= 8 ? null : uploadButton}
                    </Upload>
                    {Boolean(errors.fileList) && (
                        <p style={{ color: 'red', margin: '5px 0' }}>{errors.fileList}</p>
                    )}
                </Grid>


                <Grid item xs={12} sm={6}>


                </Grid>
                <Grid item xs={12} >
                    <CustomFormLabel htmlFor="fs-editor">Brief of Vihar</CustomFormLabel>
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
                        <p style={{ color: 'red', margin: '5px 0' }}>{errors.editorContent}</p>
                    )}
                </Grid>

                <Grid item xs={12} className='pt-50'>
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
export default AddProgramForm;
