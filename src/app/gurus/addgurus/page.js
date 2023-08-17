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
import { Upload, message, notification } from "antd";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import { routes } from "@/utills/routes";
import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
import Editor from "@/Components/Editor/Editor";
import { Formik } from "formik";
import styles from './styles.module.css'

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [fileList, setFileList] = useState([]);
  const [value, setValue] = useState("");
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

  useEffect(() => {}, []);

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
                      <a href="javascript: void(0)">Gurus</a>
                    </li>
                    <li class="breadcrumb-item" aria-current="page">
                      Add Guru
                    </li>
                  </ul>
                </div>
                <div class="col-md-12">
                  <div class="page-header-title">
                    <h2 class="mb-0">Add Guru</h2>
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
                      name: "",
                      experties: "",
                      Testimonials: "",
                      about: "",
                    }}
                    validate={(values) => {
                      console.log("values", values);
                      const errors = {};
                      if (values.name === "") {
                        errors.name = "Please enter full name";
                      }
                      if (values.experties === "") {
                        errors.experties = "Please enter gurus experties";
                      }
                      console.log(
                        "values.Testimonials",
                        values.Testimonials=== ""
                      );
                      if (values.Testimonials === "") {
                        errors.Testimonials = "Please enter Testimonials";
                      }
                      if (values.about === "") {
                        errors.about = "Please enter information about guru";
                      }
                      console.log("errors", errors);
                      return errors;
                    }}
                    onSubmit={async(values, { setSubmitting }) => {
                      console.log("HERE", values);
                      let data = {
                        name: values.name,
                        experties: values.experties,
                        testimonials: values.Testimonials,
                        about: values.about,
                        guruImage: imageUrl,
                        programImages: fileList.map((item) => item.url),
                      };
                      const responce = await routes.APIS.ADD_GURU(data)
                      if(responce.message === "Guru created successfully"){
                        notification.success({
                          message: responce.message,
                        });
                        router.push("/gurus")
                      }programStatus
                      console.log(responce)
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
                            <label class="form-label">Guru Name:</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter full name"
                              value={values.name}
                              name="name"
                              onChange={handleChange}
                            />
                            {errors.name && (
                              <small className={`form-text text-muted ${styles.errorMessage}`}>
                                Please enter full name
                              </small>
                            )}
                          </div>
                        </div>
                        <div class="form-group row">
                          <div class="col-lg-8">
                            <label class="form-label">About:</label>
                            <div
                              class="input-group search-form"
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <Editor
                                onChange={setFieldValue}
                                fieldName={"about"}
                                placeholder={"Write something..."}
                                error={errors.about}
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
                          <div class="form-group row">
                            <div class="col-lg-6">
                              <label class="form-label">Experties:</label>
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Experties in...."
                                value={values.experties}
                                name="experties"
                                onChange={handleChange}
                              />
                              {errors.experties && (
                                <small className={`form-text text-muted ${styles.errorMessage}`}>
                                  Please enter gurus experties
                                </small>
                              )}
                            </div>
                          </div>
                          <div class="col-lg-3">
                            <label class="form-label">Main Image:</label>
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
                                <small className={`form-text text-muted ${styles.errorMessage}`}>
                                  Please upload image
                                </small>
                              )}
                            </div>
                            {/* <small className={`form-text text-muted ${styles.errorMessage}`}>
                          Please enter your Password
                        </small> */}
                          </div>
                          <div class="col-lg-6">
                          <label class="form-label">Program Images:</label>
                            <Upload
                              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
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
                        <div class="form-group row">
                         
                        </div>
                        
                        <div class="form-group row">
                          <div class="col-lg-8">
                            <label class="form-label">Testimonials:</label>
                            <div>
                              <div class="input-group search-form" style={{display:'flex',flexDirection:'column'}}>
                                <Editor
                                  onChange={setFieldValue}
                                  fieldName={"Testimonials"}
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
