"use client";
import Image from "next/image";
import { Html, Head, Main, NextScript } from "next/document";
import "@/styles/Template Styles/css/fonts/fontawesome.css";
import { useEffect,useState } from "react";
import Localstorage from "@/utills/storage/Localstorage";
import { useRouter } from "next/navigation";
import Sidebar from "@/Components/Sidebar";
import Header from "@/Components/Header";
import Script from "next/script";
// import './index.css';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Space, Tooltip, Button, Dropdown, message,notification} from 'antd';
// import { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';

import Editor from "@/Components/Editor/Editor";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import { Upload} from "antd";
import { routes } from "@/utills/routes";
import { Formik } from "formik";
import { Radio } from 'antd';
import styles from './styles.module.css';

// import { CMultiSelect } from '@coreui/react-pro'
// import CMultiSelect from '@coreui/react-pro/src/components/multi-select/CMultiSelect'
// import '@coreui/coreui/dist/css/coreui.min.css'
import Select from 'react-select'
// import { colourOptions } from './docs/data';




export default function Home() {

  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [imageUrl, setImageUrl] = useState();
  const [pillar,setPillar] =useState([])
  const [vihar,setVihar] =useState([]);
  const [gurus,setGurus] = useState([]);
  const [programStatus, setProgramStatus] = useState('Active');

  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const fetchPillar = async() =>{
    const res =await routes.APIS.GET_PILLAR()
    console.log(">>>>>>>>>>>>>>>>>>>>>",res)
    if(res.message==="Pillars fetched successfully"){
      let data = res.pillars.map(pillar=>{ return {label: pillar.pillarTitle, value:pillar._id}})
      console.log("data===>",data)
      setPillar(data)
    }
  }

  const fetchVihar =async()=>{
    const res = await routes.APIS.GET_VIHAR();
    console.log("///////////////",res);
    if(res){
      let data = res.vihars.map(vihar=>{return{label:vihar.viharName,value:vihar._id}})
      console.log(">>>>>>>>",data);
      setVihar(data)
    }
    
  }

  const fetchGurus = async()=>{
    const res = await routes.APIS.GET_ALL_GURUS();
    console.log(")))))))))",res);
    if(res.message==="Gurus fetched successfully"){
       let result =res.data.map(guru=>{return{value:guru._id,label:guru.name}})
       console.log(result)
       setGurus(result)
    }
  }

//   const getChange = (e, name) => {
//     console.log("helloooooooooooo")
//     if (name) {
//         console.log(e, name)
//         setProgramStatus((prev) => ({
//           ...prev,
//             [name]: e
//         }))
//     } else {
      

//       setProgramStatus((prev) => ({
           
//             [e.target.name]: e.target.value
//         }))
//     }

// }

const handleStatusChange = (e) => {
  console.log(e.target.value);
  setProgramStatus(e.target.value);
};

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
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
  // const beforeUploadProgramImages = async (file) => {
  //   try {
  //     setLoading(true);
  //     const formData = new FormData();
  //     formData.append("image", file);
  //     const res = await routes.APIS.UPLOAD_IMAGE(formData);
  //     setFileList([...fileList, { url: res.url }]);
  //     setLoading(false);
  //     return false; // Prevent default upload
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };
  const handleChangeImg = async (info) => {
    if (info.file.status === "uploading") {
      console.log("info", info.file);
      setLoading(true);
      let formData = new FormData();
      formData.append("image", info.file);
      let res = await routes.APIS.UPLOAD_IMAGE(formData);
      setImageUrl(res.url);
      setLoading(false);
    }
  };

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const weekFormat = 'MM/DD';
const monthFormat = 'YYYY/MM';

const customFormat= (value) =>
  `custom format: ${value.format(dateFormat)}`;

const customWeekStartEndFormat = (value) =>
  `${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value)
    .endOf('week')
    .format(weekFormat)}`;


  const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };

  // const renderButtons = ([leftButton, rightButton]) => [
  //   <Tooltip title="tooltip" key="leftButton">
  //     {leftButton}
  //   </Tooltip>,
  //   React.cloneElement(rightButton, { loading: true }),
  // ];
  
  
  const items = [
    {
      label: 'pillar1',
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: 'pillar2',
      key: '2',
      icon: <UserOutlined />,
    },
    {
      label: 'pillar3',
      key: '3',
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: 'pillar4',
      key: '4',
      icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ];

  // const PillarOptions = [
  
  //   { value: 'Pillar1', label: 'Pillar1', color: '#00B8D9' },
  //   { value: 'Pillar2', label: 'Pillar2', color: '#0052CC' },
  //   { value: 'Pillar3', label: 'Pillar3', color: '#5243AA' },
  //   { value: 'Pillar4', label: 'Pillar4', color: '#FF5630' },
  //   { value: 'Pillar5', label: 'Pillar5', color: '#FF8B00' },
   
  // ];



  const ViharOptions = [
    // { value: 'Pillar1', label: 'Pillar1', color: '#00B8D9'},
    // { value: 'Pillar2', label: 'Pillar2', color: '#0052CC'},
    // { value: 'Pillar3', label: 'Pillar3', color: '#5243AA' },
    // { value: 'Pillar4', label: 'Pillar4', color: '#FF5630'},
    // { value: 'Pillar5', label: 'Pillar5', color: '#FF8B00' },
   
  ];
  const options = [
    { 
      value: 1,
      label: "Leanne Graham"
    },
    {
      value:  2,
      label: "Ervin Howell"
    }
  ];
  
  // const MyComponent = () => (
  //   <Select options={options} />
  // )
  

  // const options = [
  //   {
  //     value: 0,
  //     text: 'Angular',
  //     selected: true,
  //   },
  //   {
  //     value: 1,
  //     text: 'Bootstrap',
  //     selected: true,
  //     disabled: true,
  //   },
  //   {
  //     value: 2,
  //     text: 'React.js',
  //   },
  //   {
  //     value: 3,
  //     text: 'Vue.js',
  //   },
  //   {
  //     label: 'backend',
  //     options: [
  //       {
  //         value: 4,
  //         text: 'Django',
  //       },
  //       {
  //         value: 5,
  //         text: 'Laravel',
  //         selected: true,
  //       },
  //       {
  //         value: 6,
  //         text: 'Node.js',
  //       },
  //     ],
  //   },
  // ]
  

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  

  const router = useRouter();

  useEffect(() => {
    fetchPillar()
    fetchVihar()
    fetchGurus()
  }, [])

  return (
    <>
      <Sidebar />
      <Header />
      <section class="pc-container" style={{ paddingTop: 0 }}>
        <div class="pc-content">
          <div class="page-header">
            <div class="page-block">
              <div class="row align-items-center">
                <div class="col-md-12">
                  <ul class="breadcrumb mb-3">
                    <li class="breadcrumb-item"><a href="../navigation/index.html">Home</a></li>
                    <li class="breadcrumb-item"><a href="javascript: void(0)">Programs</a></li>
                    <li class="breadcrumb-item" aria-current="page">Add Program</li>
                  </ul>
                </div>
                <div class="col-md-12">
                  <div class="page-header-title">
                    <h2 class="mb-0">Add Program</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="row">
            <div class="col-lg-12">
              <div class="card">                
                <div class="card-body">
                <Formik
                    initialValues={{
                      programName: "",
                      programDuration: "",
                      programStatus: "",
                      programDetails:"",
                      programPrice: "",
                      programImages:""
                      
                    }}
                    validate={(values) => {
                      console.log("values", values);
                      const errors = {};
                      if (values.programName === "") {
                        errors.programName = "Please enter full name";
                      }
                      if (values.programDuration === "") {
                        errors.programDuration = "Please enter duration experties";
                      }
                      console.log(
                        "values.programDuration",
                        values.programDuration=== ""
                      );
                      // if (values.programStatus === "") {
                      //   errors.programStatus = "Please select status";
                      // }
                      if (values.programDetails === "") {
                        errors.programDetails = "Please enter details about program";
                      }
                      if (values.programPrice === "") {
                        errors.programPrice = "Please enter price of program";
                      }
                      console.log("errors", errors);
                      return errors;
                    }}
                    onSubmit={async(values, { setSubmitting }) => {
                      console.log("all submit", values);
                      let data = {
                        programName: values.programName,
                        programDuration: values.programDuration,
                        programStatus: values.programStatus,
                        programDetails: values.programDetails,
                        programPrice: values.programPrice,
                        programImage: imageUrl,
                        // programImages: fileList.map((item) => item.url),
                      };
                      const response = await routes.APIS.ADD_PROGRAM(data)
                      if(response.message === "program created successfully"){
                        notification.success({
                          message: response.message,
                        });
                        router.push("/programs")
                      }
                      console.log(response)
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      setValues,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      setFieldValue,
                      /* and other goodies */
                    }) => (
                  <form>
                    <div class="form-group row">
                      <div class="col-lg-6">
                        <label class="form-label">Program Name:</label>
                        <input
                         type="text"
                         class="form-control"
                         placeholder="Enter full name"
                         value={values.programName}
                         name="programName"
                         onChange={handleChange}
                        />
                        {errors.programName &&(
                            <small className={`form-text text-muted ${styles.errorMessage}`}>Please enter program name</small>
                        )}
                        
                      </div>
                      <div class="col-lg-6">
                        <label class="form-label">Program Duration</label>
                        <input 
                        type="number" 
                        class="form-control"
                        placeholder="Enter duration in days"
                        value={values.programDuration}
                        name="programDuration"
                        onChange={handleChange}
                        />
                        {errors.programDuration &&(
                           <small className={`form-text text-muted ${styles.errorMessage}`}>Please Enter Duration </small>
                        )}
                        
                      </div>
                      <div class="col-lg-6">
                        <label class="form-label">Program Price</label>
                        <input
                        type="number" 
                        class="form-control"
                        placeholder="Enter Price in INR"
                        value={values.programPrice}
                        name="programPrice"
                        onChange={handleChange}
                         />
                         {errors.programPrice &&(
                            <small className={`form-text text-muted ${styles.errorMessage}`}>Please Enter price </small>
                         )}
                        
                      </div>
                      <div class="form-group row">
                          <div class="col-lg-12">
                            <label class="form-label">About the program</label>
                            <div class="input-group search-form">
                              <Editor
                               onChange={setFieldValue}
                               fieldName={"programDetails"}
                               placeholder={"Write something..."}
                              //  error={errors.programDetails}
                              />
                              {errors.programDetails && (
                                <small
                                  style={{
                                    marginTop: "-20px",
                                    marginBottom: "20px",
                                  }}
                                  className={`form-text text-muted ${styles.errorMessage}`}
                                >
                                  {errors.programDetails}
                                </small>
                              )}
                            </div>
                            {/* <small class="form-text text-muted">
                          Please enter your Password
                        </small> */}
                          </div>
                      </div>   
                      <div class="form-group row">
                          <div class="col-lg-12">
                            <label class="form-label">Focus of the program</label>
                            <div class="input-group search-form">
                              <Editor
                               onChange={setFieldValue}
                               fieldName={"focus"}
                               placeholder={"Write something..."}
                               error={errors.focus} 
                              />
                              {errors.focus && (
                                <small
                                  style={{
                                    marginTop: "-20px",
                                    marginBottom: "20px",
                                  }}
                                  className={`form-text text-muted ${styles.errorMessage}`}
                                >
                                  {errors.focus}
                                </small>
                              )}
                            </div>
                            {/* <small class="form-text text-muted">
                          Please enter your Password
                        </small> */}
                          </div>
                      </div>  
                      <div class="form-group row">
                      {/* <div class="col-lg-3"> */}
                          <div class="col-lg-6">
                            <label class="form-label">Program Image:</label>
                            <div class="input-group search-form">
                              <Upload
                                name="image"
                                listType="picture-card"
                                className="avatar-uploader"
                                value={values.programImage}
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
                              {!imageUrl && (
                                <small className={`form-text text-muted ${styles.errorMessage}`}>
                                  Please upload image
                                </small>
                              )}
                            </div>
                            {/* <small class="form-text text-muted">
                          Please enter your Password
                        </small> */}
                          </div>
                        </div>
                      {/* <div class="col-lg-6">
                            <Upload
                              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                              listType="picture-card"
                              fileList={fileList}
                              // onPreview={handlePreview}
                              // onChange={handleChange}
                              beforeUpload={beforeUploadProgramImages}
                            >
                              {fileList.length >= 8 ? null : uploadButton}
                            </Upload>
                      </div>  */}
                      <div class="col-lg-6">
                        <div class="form-group row">
                          <div class="pillar">
                          <label class="form-label">Pillar:</label>
                          <Select
                            // defaultValue={[PillarOptions[2], PillarOptions[3]]}
                            isMulti
                            name="colors"
                            options={pillar}
                            className="basic-multi-select"
                            classNamePrefix="select"
                          />
                          {/* <div class="select_gurus">
                          <label class="form-label">Gurus:</label>
                          <Select options={gurus} onChange={(values) => setValues(values,)} />
                          </div> */}
        
                            {/* <Space wrap> 
                              <Dropdown menu={menuProps}>
                                <Button>
                                  <Space>
                                    Select Gurus
                                    <DownOutlined />
                                  </Space>
                                </Button>
                              </Dropdown>
                            </Space> */}
                          </div>
                        </div>    
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group row">
                        <label class="form-label">Vihar:</label>
                        <Select
                          // defaultValue={[ViharOptions[2], ViharOptions[3]]}
                          isMulti
                          name="colors"
                          options={vihar}
                          className="basic-multi-select"
                          classNamePrefix="select"
                        />
                            {/* <Space wrap> 
                              <Dropdown menu={menuProps}>
                                <Button>
                                  <Space>
                                    Select vihar
                                    <DownOutlined />
                                  </Space>
                                </Button>
                              </Dropdown>
                            </Space> */}
                        </div> 
                      </div>
                      <div class="date">
                        <Space direction="vertical" size={12}>
                          <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
                          {/* <DatePicker defaultValue={dayjs('01/01/2015', dateFormatList[0])} format={dateFormatList} />
                          <DatePicker defaultValue={dayjs('2015/01', monthFormat)} format={monthFormat} picker="month" />
                          <DatePicker defaultValue={dayjs()} format={customWeekStartEndFormat} picker="week" />
                          <RangePicker
                            defaultValue={[dayjs('2015/01/01', dateFormat), dayjs('2015/01/01', dateFormat)]}
                            format={dateFormat}
                          />
                          <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={customFormat} /> */}
                        </Space>
                      </div>
                    </div>
                    {/* <div class="form-group row">
                      <div class="col-lg-6">
                        <label class="form-label">Password:</label>
                        <div class="input-group search-form">
                          <input type="Password" class="form-control" placeholder="Please enter your Password" />
                          <span class="input-group-text bg-transparent"><i class="feather icon-lock"></i></span>
                        </div>
                        <small class="form-text text-muted">Please enter your Password</small>
                      </div>
                      <div class="col-lg-6">
                        <label class="form-label">Profile URL:</label>
                        <div class="input-group search-form">
                          <input type="text" class="form-control" placeholder="Please enter your Profile URL" />
                          <span class="input-group-text bg-transparent"><i class="feather icon-link"></i></span>
                        </div>
                        <small class="form-text text-muted">Please enter your Profile URL</small>
                      </div>
                    </div> */}
                    <div class="form-group row">
                      <div class="col-lg-6">
                      <Radio.Group
                       name="programStatus"
                       defaultValue={programStatus}
                       onChange={handleStatusChange}
                      >
                          <Radio value="Active">Active</Radio>
                          <Radio value="Inactive">Inactive</Radio>
                        </Radio.Group>
                        {/* {errors.programStatus &&(
                            <small className={`form-text text-muted ${styles.errorMessage}`}>Please select user type</small>
                         )} */}
                        <small class="form-text text-muted">Please select user type</small>
                      </div>
                    </div>
                    <button onClick={(e)=>{e.preventDefault();handleSubmit(e)}} type="submit" class="btn btn-primary mb-4">
                          Submit
                    </button>
                  </form>
                  )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
