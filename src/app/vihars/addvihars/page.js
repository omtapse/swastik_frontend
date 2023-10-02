"use client";
import Image from "next/image";
import { Html, Head, Main, NextScript } from "next/document";
import "@/styles/Template Styles/css/fonts/fontawesome.css";
import { useEffect, useState } from "react";
import Localstorage from "@/utills/storage/Localstorage";
import { useRouter } from "next/navigation";
import Sidebar from "@/Components/Sidebar";
import Header from "@/Components/Header";
import Script from "next/script";
import { Select, Upload, message, notification } from "antd";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import { routes } from "@/utills/routes";
import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
import Editor from "@/Components/Editor/Editor";
import { Formik } from "formik";
import styles from "./styles.module.css";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [fileList, setFileList] = useState([]);
  const [value, setValue] = useState("");
  const [activities , setActivities] = useState();
  const [options , setOptions] = useState([])
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
      setLoading(false);
    }
  };

  const handleChangeSelect = (value) => {
    console.log("value", value);
  };

  const getAllActivities = async () => {
    try {
      const res = await routes.APIS.GET_ALL_ACTIVITIES_VIHARS();
      console.log("resssss", res);
      let data = res.activities.map((item) =>{return {label:item.activityName,value:item.activityName}});
      setOptions(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getAllActivities();
  }, []);


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
                    <li class="breadcrumb-item">
                      <a href="../navigation/index.html">Home</a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="javascript: void(0)">Vihars</a>
                    </li>
                    <li class="breadcrumb-item" aria-current="page">
                      Add Vihar
                    </li>
                  </ul>
                </div>
                <div class="col-md-12">
                  <div class="page-header-title">
                    <h2 class="mb-0">Add Vihar</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                {/* <div class="card-header">
                <h5></h5>
              </div> */}
                <div class="card-body">
                  <Formik
                    initialValues={{
                      viharName: "",
                      tagline: "",
                      activities:activities,
                      vihardescription: "",
                    }}
                    validate={(values) => {
                      const errors = {};
                      if (!values.viharName) {
                        errors.name = "Please enter vihar name";
                      }
                      if (!values.tagline) {
                        errors.tagline = "Please enter tagline";
                      }
                      if (!activities) {
                        errors.activities = "Please enter activities";
                      }
                      if (!imageUrl) {
                        errors.imageUrl = "Please upload image";
                      }
                      console.log("errors",activities, errors);
                      return errors;
                    }}
                    onSubmit={async (values, { setSubmitting }) => {
                      let data = {
                        viharName: values.viharName,
                        tagLine: values.tagline,
                        masterImage: imageUrl,
                        activities: activities,
                        facilityImages: fileList.map((item) => item.url),
                        vihardescription:values.vihardescription,
                      };
                      console.log("HERE", data);
                      const responce = await routes.APIS.ADD_VIHAR(data);
                      if (responce.message === "Vihar created successfully") {
                        notification.success({
                          message: responce.message,
                        });
                        router.push("/vihars");
                      }
                      console.log(responce);
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
                            <label class="form-label">Vihar Name:</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter Vihar Name"
                              value={values.viharName}
                              name="viharName"
                              onChange={handleChange}
                            />
                            {errors.name && (
                              <small
                                className={`form-text text-muted ${styles.errorMessage}`}
                              >
                                Please enter full name
                              </small>
                            )}
                          </div>
                        </div>
                        <div class="form-group row">
                          <div class="col-lg-6">
                            <label class="form-label">Tag Line:</label>
                            <input
                               type="text"
                              class="form-control"
                              placeholder="Enter tag line"
                              value={values.tagline}
                              name="tagline"
                              onChange={handleChange}
                            />
                            {errors.name && (
                              <small
                                className={`form-text text-muted ${styles.errorMessage}`}
                              >
                                Please enter full name
                              </small>
                            )}
                          </div>
                        </div>
                        <div class="form-group row">
                          <div class="col-lg-8">
                            <label class="form-label">Activities:</label>
                            <div
                              class="input-group search-form"
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <Select
                                mode="tags"
                                style={{ width: "100%" ,padding:"10px 0px"}}
                                onChange={e=>setActivities(e)}
                                tokenSeparators={[","]}
                                options={options}
                                value={activities}
                              />
                              {errors.about && (
                                <small
                                  style={{
                                    marginTop: "-20px",
                                    marginBottom: "20px",
                                  }}
                                  className={`form-text text-muted ${styles.errorMessage}`}
                                >
                                  {errors.about}
                                </small>
                              )}
                            </div>
                          </div>
                          <div class="col-lg-3 mt-4">
                            <label class="form-label">Master Image:</label>
                            <div class="input-group search-form">
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
                              {!imageUrl && (
                                <small
                                  className={`form-text text-muted ${styles.errorMessage}`}
                                >
                                  Please upload image
                                </small>
                              )}
                            </div>
                            {/* <small className={`form-text text-muted ${styles.errorMessage}`}>
                          Please enter your Password
                        </small> */}
                          </div>
                          <div class="col-lg-6 mt-4">
                            <label class="form-label">Facility Images:</label>
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
                          </div>
                        </div>
                        <div class="form-group row"></div>

                        <div class="form-group row">
                          <div class="col-lg-8">
                            <label class="form-label">Vihar Description:</label>
                            <div>
                              <div
                                class="input-group search-form"
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <Editor
                                  onChange={setFieldValue}
                                  fieldName={"vihardescription"}
                                  placeholder={"Write something..."}
                                />
                                {errors.Testimonials && (
                                  <small
                                    style={{ marginTop: "-20px" }}
                                    className={`form-text text-muted ${styles.errorMessage}`}
                                  >
                                    {errors.Testimonials}
                                  </small>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleSubmit(e);
                          }}
                          type="submit"
                          class="btn btn-primary mb-4"
                        >
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
