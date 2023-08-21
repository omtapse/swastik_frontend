"use client";
import Image from "next/image";
import { Html, Head, Main, NextScript } from "next/document";
import "@/styles/Template Styles/css/fonts/fontawesome.css";
import { useEffect, useState } from "react";
import Localstorage from "@/utills/storage/Localstorage";
import { useRouter } from "next/navigation";
import Sidebar from "@/Components/Sidebar";
import Header from "@/Components/Header";
import Link from "next/link";
import { routes } from "@/utills/routes";
import { Table, notification } from "antd";

import { useGlobalLoader } from "../../contexts/GlobalLoaderContext.js"

export default function Home() {

  const { showLoader, hideLoader } = useGlobalLoader();

  const [gurus, setGurus] = useState([]);
  const [columns, setColumns] = useState([]);
  const router = useRouter();

  const fetchGurus = async () => {
    try {
      showLoader();
      const res = await routes.APIS.GET_ALL_VIHARS();
      if (res.message === "Vihars fetched successfully") {
        setGurus(res.vihars);
        setColumns([
          {
            title: "#",
            dataIndex: "id",
            key: "id",
            render: (text, obj, index) => {
              return <h6 class="mb-1">{index + 1}</h6>
            }
          },
          {
            title: "Vihar Name",
            dataIndex: "viharName",
            key: "viharName",
            render: (text, obj) => {
              {
                console.log(text, obj);
              }
              return (
                <div class="row">
                  <div class="col-auto pe-0">
                    <img
                      src={obj.masterImage}
                      alt="user-image"
                      class="wid-40 rounded"
                    />
                  </div>
                  <div class="col">
                    <h6 class="mb-1">{text}</h6>
                    <p
                      class="text-muted f-12 mb-0"
                      style={{
                        width: "20rem",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        // height:"46px",
                        overflow: "hidden"
                      }}
                      dangerouslySetInnerHTML={{ __html: obj.tagLine }}
                    >
                      {/* {obj.about} */}
                    </p>
                  </div>
                </div>
              );
            },
          },
          {
            title: "Updated On",
            dataIndex: "updatedAt",
            key: "updatedAt",
            render: (text) => {
              return <p>{text.split('T')[0]}</p>;
            }
          },
          {
            title: "Actions",
            dataIndex: "Action",
            key: "Action",
            render: (text, obj) => {
              return (
                <ul class="list-inline me-auto mb-0">
                  <li
                    class="list-inline-item align-bottom"
                    data-bs-toggle="tooltip"
                    title="View"
                  >
                    <a
                      href="#"
                      class="avtar avtar-xs btn-link-secondary btn-pc-default"
                      data-bs-toggle="modal"
                      data-bs-target="#cust-modal"
                    >
                      <i class="ti ti-eye f-18"></i>
                    </a>
                  </li>
                  <li
                    class="list-inline-item align-bottom"
                    data-bs-toggle="tooltip"
                    title="Edit"
                  >
                    <Link
                      href={`/vihars/editvihars/${obj._id}`}
                      class="avtar avtar-xs btn-link-success btn-pc-default"
                    >
                      <i class="ti ti-edit-circle f-18"></i>
                    </Link>
                  </li>
                  <li
                    class="list-inline-item align-bottom"
                    data-bs-toggle="tooltip"
                    title="Delete"
                  >
                    <div
                      class="avtar avtar-xs btn-link-danger btn-pc-default"
                      onClick={() => {
                        console.log("HEREEEE", obj._id)
                        try {
                          showLoader();
                        routes.APIS.DELETE_VIHAR(obj._id).then((res) => {
                          notification.success({ message: res.message })
                          fetchGurus()
                        })
                        } catch (error) {
                          console.log(error)
                        } finally {
                          hideLoader();
                        }
                      }}
                    >
                      <i class="ti ti-trash f-18"></i>
                    </div>
                  </li>
                </ul>
              );
            },
          },
        ]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      hideLoader();
    }
  }
  useEffect(() => {
    fetchGurus();
  }, []);

  return (
    <>
      <Sidebar />
      <Header />
      <div class="pc-container">
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
                      <a href="javascript: void(0)">Vihar</a>
                    </li>
                    <li class="breadcrumb-item" aria-current="page">
                      Vihar List
                    </li>
                  </ul>
                </div>
                <div class="col-md-12">
                  <div class="page-header-title">
                    <h2 class="mb-0">Vihar List</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div class="card table-card">
                <div class="card-body">
                  <div class="text-end p-4 pb-0">
                    <Link
                      href="/vihars/addvihars"
                      style={{ marginBottom: "20px" }}
                      class="btn btn-primary"
                    >
                      <i class="ti ti-plus f-18"></i> Add vihar
                    </Link>
                  </div>
                  <div class="table-responsive">
                    <Table columns={columns} dataSource={gurus} pagination={{ pageSize: 7 }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="cust-modal"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header border-0 pb-0">
              <h5 class="mb-0">Product Details</h5>
              <a
                href="#"
                class="avtar avtar-s btn-link-danger btn-pc-default"
                data-bs-dismiss="modal"
              >
                <i class="ti ti-x f-20"></i>
              </a>
            </div>
            <div class="modal-body">
              <div class="row align-items-center">
                <div class="col-sm-4">
                  <div class="bg-light rounded position-relative">
                    <div class="text-center">
                      <div class="chat-avtar d-inline-flex mx-auto">
                        <img
                          class="img-fluid rounded"
                          src="../assets/images/application/img-prod-4.jpg"
                          alt="User image"
                        />
                      </div>
                    </div>
                    <div class="position-absolute end-0 top-0 p-3">
                      <span class="badge bg-success">In Stock</span>
                    </div>
                  </div>
                </div>
                <div class="col-sm-8">
                  <h5>Canon EOS 1500D 24.1 Digital</h5>
                  <p class="text-muted">
                    Image Enlargement: After shooting, you can enlarge
                    photographs of the objects for clear zoomed view. Change In
                    Aspect Ratio: Boldly crop the subject and save it with a
                    composition that has impact.
                  </p>
                  <div class="table-responsive">
                    <table class="table w-auto table-borderless">
                      <tbody>
                        <tr>
                          <td class="text-muted py-1">Categories</td>
                          <td class="py-1">Electronics, Camera</td>
                        </tr>
                        <tr>
                          <td class="text-muted py-1">Qty</td>
                          <td class="py-1">21</td>
                        </tr>
                        <tr>
                          <td class="text-muted py-1">Price</td>
                          <td class="py-1">
                            <h5 class="mb-0">$399</h5>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
