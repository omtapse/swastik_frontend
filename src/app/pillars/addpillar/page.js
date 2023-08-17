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
                      <a href="javascript: void(0)">Pillars</a>
                    </li>
                    <li class="breadcrumb-item" aria-current="page">
                      Add Pillar
                    </li>
                  </ul>
                </div>
                <div class="col-md-12">
                  <div class="page-header-title">
                    <h2 class="mb-0">Add Pillar</h2>
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
                      title: "",
                      breif: "",
                    }}
                    validate={(values) => {
                      console.log("values", values);
                      const errors = {};
                      if (values.title === "") {
                        errors.name = "Please enter Program title";
                      }
                      if(values.breif === ""){
                        errors.breif = "Please enter Breif of program"
                      }
                      if(!imageUrl){
                        errors.image = "Please upload image"
                      }
                      console.log("errors", errors);
                      return errors;
                    }}
                    onSubmit={async(values, { setSubmitting }) => {
                      console.log("HERE", values);
                      let data = {
                        pillarTitle: values.title,
                        pillarDescription: values.breif,
                        pillarImage: imageUrl,
                      };
                      try {
                        const responce = await routes.APIS.ADD_PILLAR(data)
                        if(responce.message === "Pillar created successfully"){
                          notification.success({
                            message: responce.message,
                          });
                          router.push("/pillars")
                        }
                      } catch (error) {
                        notification.error({
                          message: error.message,
                        });                        
                      }
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
                            <label class="form-label">Pillar Title:</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter pillar title"
                              value={values.title}
                              name="title"
                              onChange={handleChange}
                            />
                            {errors.title && (
                              <small className={`form-text text-muted ${styles.errorMessage}`}>
                                Please enter pillar title
                              </small>
                            )}
                          </div>
                          <div class="col-lg-3">
                            <label class="form-label">Pillar Image:</label>
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
                              {errors && !imageUrl && (
                                <small className={`form-text text-muted ${styles.errorMessage}`}>
                                  Please upload image
                                </small>
                              )}
                            </div>
                            {/* <small className={`form-text text-muted ${styles.errorMessage}`}>
                          Please enter your Password
                        </small> */}
                          </div>
                        </div>
                        <div class="form-group row">
                         
                        </div>
                        <div class="form-group row">
                         
                        </div>
                        
                        <div class="form-group row">
                          <div class="col-lg-8">
                            <label class="form-label">Brief of pillar :</label>
                            <div>
                              <div class="input-group search-form" style={{display:'flex',flexDirection:'column'}}>
                                <Editor
                                  onChange={setFieldValue}
                                  fieldName={"breif"}
                                  placeholder={"Write something..."}
                                />
                                {errors.breif && (
                                  <small
                                    style={{ marginTop: "-20px" }}
                                    className={`form-text text-muted ${styles.errorMessage}`}
                                  >
                                    {errors.breif}
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
