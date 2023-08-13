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
import { Upload, message } from "antd";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import { routes } from "@/utills/routes";
import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
import Editor from "@/Components/Editor/Editor";
import { Formik } from "formik";

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
                    initialValues={{ name: "", About: "" ,experties:"",Testimonials:"" }}
                    validate={(values) => {
                      const errors = {};
                      if (!values.email) {
                        errors.email = "Required";
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                          values.email
                        )
                      ) {
                        errors.email = "Invalid email address";
                      }
                      return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                      }, 400);
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChangeFormValues,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
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
                              onChange={e=>handleChangeFormValues}
                            />
                            {errors.name && <small class="form-text text-muted">
                              Please enter full name
                            </small>}
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
                        {/* <div class="form-group row">
                      <div class="col-lg-6">
                        <label class="form-label">Password:</label>
                        <div class="input-group search-form">
                          <Upload
                            beforeUpload={() => false}
                            listType="picture-card"
                            fileList={fileList}
                            // onPreview={handlePreview}
                            onChange={handleChange}
                            accept="image/*"
                          >
                            {fileList.length >= 8 ? null : uploadButton}
                          </Upload>
                        </div>
                        <small class="form-text text-muted">
                          Please enter your Password
                        </small>
                      </div>
                    </div> */}
                        <div class="form-group row">
                          <div class="col-lg-12">
                            <label class="form-label">About:</label>
                            <div class="input-group search-form">
                              <Editor placeholder={"Write something..."} />
                            </div>
                            {/* <small class="form-text text-muted">
                          Please enter your Password
                        </small> */}
                          </div>
                          <div class="form-group row">
                            <div class="col-lg-6">
                              <label class="form-label">Experties:</label>
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Experties in...."
                                value={values.experties}
                              />
                              {errors.experties && <small class="form-text text-muted">
                                Please enter gurus experties
                              </small>}
                            </div>
                          </div>
                          <div class="col-lg-6">
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
                          </div>
                        </div>
                        <div class="form-group row">
                          <div class="col-lg-6">
                            <label class="form-label">Testimonials:</label>
                            <div>
                              <div class="input-group search-form">
                                <Editor placeholder={"Write something..."} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <button type="submit" class="btn btn-primary mb-4">
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
