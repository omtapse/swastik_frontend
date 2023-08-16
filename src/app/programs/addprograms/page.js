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
import { Space, Tooltip, Button, Dropdown, message } from 'antd';
// import { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import Editor from "@/Components/Editor/Editor";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import { Upload} from "antd";
import { routes } from "@/utills/routes";


export default function Home() {

  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [imageUrl, setImageUrl] = useState();



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
  const handleChange = async (info) => {
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

  

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  

  const router = useRouter();

  useEffect(() => {
    

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
                  <form>
                    <div class="form-group row">
                      <div class="col-lg-6">
                        <label class="form-label">Program Name:</label>
                        <input type="email" class="form-control" placeholder="Enter full name" />
                        <small class="form-text text-muted">Please enter your full name</small>
                      </div>
                      <div class="col-lg-6">
                        <label class="form-label">Program Duration</label>
                        <input type="number" class="form-control" placeholder="Enter duration in days" />
                        <small class="form-text text-muted">Please Enter Duration </small>
                      </div>
                      <div class="col-lg-6">
                        <label class="form-label">Program Price</label>
                        <input type="number" class="form-control" placeholder="Enter Price in INR" />
                        <small class="form-text text-muted">Please Enter price </small>
                      </div>
                      <div class="form-group row">
                          <div class="col-lg-12">
                            <label class="form-label">About the program</label>
                            <div class="input-group search-form">
                              <Editor placeholder={"Write something..."} />
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
                              <Editor placeholder={"Write something..."} />
                            </div>
                            {/* <small class="form-text text-muted">
                          Please enter your Password
                        </small> */}
                          </div>
                      </div>  
                      <div class="form-group row">
                          <div class="col-lg-6">
                            <label class="form-label">Main Image:</label>
                            <div class="input-group search-form">
                              <Upload
                                name="image"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                beforeUpload={beforeUpload}
                                onChange={handleChange}
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
                            <Space wrap> 
                              <Dropdown menu={menuProps}>
                                <Button>
                                  <Space>
                                    Select Pillar
                                    <DownOutlined />
                                  </Space>
                                </Button>
                              </Dropdown>
                            </Space>
                          </div>
                        </div>
                        
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group row">
                            <Space wrap> 
                              <Dropdown menu={menuProps}>
                                <Button>
                                  <Space>
                                    Select vihar
                                    <DownOutlined />
                                  </Space>
                                </Button>
                              </Dropdown>
                            </Space>
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
                        <label class="form-label">Program Status</label>
                        <div>
                          <div class="form-check form-check-inline">
                            <input type="radio" id="customRadioInline1" name="customRadioInline1" class="form-check-input" checked />
                            <label class="form-check-label" for="customRadioInline1">Active</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input type="radio" id="customRadioInline2" name="customRadioInline1" class="form-check-input" />
                            <label class="form-check-label" for="customRadioInline2">Inactive</label>
                          </div>
                        </div>
                        <small class="form-text text-muted">Please select user type</small>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary mb-4">
                          Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
