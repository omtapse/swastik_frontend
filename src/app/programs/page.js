"use client";
import Image from "next/image";
import { Html, Head, Main, NextScript } from "next/document";
import "@/styles/Template Styles/css/fonts/fontawesome.css";
import { useEffect } from "react";
import Localstorage from "@/utills/storage/Localstorage";
import { useRouter } from "next/navigation";
import Sidebar from "@/Components/Sidebar";
import Header from "@/Components/Header";
import Link from "next/link";

export default function Home() {
  const data = [
    {
      id: 1,
      img:'/assets/images/application/img-prod-1.jpg',
      name: "Empower Program",
      shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat",
      status: "active",
      price: "$98000",
      duration: "6 months",
      date: "12/12/2021",
      pillar:'love,health',
      Action:<p>View</p>
    },
    {
      id: 2,
      img:'../assets/images/application/img-prod-2.jpg',
      name: "Empower Program",
      shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat",
      status: "active",
      price: "$98000",
      duration: "6 months",
      date: "12/12/2021",
      pillar:'love,health',
      Action:<p>View</p>
    },
    {
      id: 3,
      img:'../assets/images/application/img-prod-3.jpg',
      name: "Empower Program",
      shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat",
      status: "ended",
      price: "$98000",
      duration: "6 months",
      date: "12/12/2021",
      pillar:'love,health',
      Action:<p>View</p>
    },
    {
      id: 4,
      img:'../assets/images/application/img-prod-4.jpg',
      name: "Empower Program",
      shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat",
      status: "ended",
      price: "$98000",
      duration: "6 months",
      pillar:'love,health',
      date: "12/12/2021",
      Action:<p>View</p>
    },
    {
      id: 5,
      img:'../assets/images/application/img-prod-1.jpg',
      name: "Empower Program",
      shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat",
      status: "ended",
      price: "$98000",
      duration: "6 months",
      date: "12/12/2021",
      pillar:'love,health',
      Action:<p>View</p>
    },
   
  ]



  const router = useRouter();

  // useEffect(() => {
  //   if (!Localstorage.JWT_TOKEN.get()) {
  //     router.push('/login')
  //   }else{
  //     router.push('/')
  //   }
  // }, [Localstorage.JWT_TOKEN.get()])

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
                <li class="breadcrumb-item"><a href="../navigation/index.html">Home</a></li>
                <li class="breadcrumb-item"><a href="javascript: void(0)">E-commerce</a></li>
                <li class="breadcrumb-item" aria-current="page">Products list</li>
              </ul>
            </div>
            <div class="col-md-12">
              <div class="page-header-title">
                <h2 class="mb-0">Products list</h2>
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
                <Link href="/programs/addprograms" style={{marginBottom:'20px'}} class="btn btn-primary">
                  <i class="ti ti-plus f-18"></i> Add Product
                </Link>
              </div>
              <div class="table-responsive">
                <table class="table table-hover" id="pc-dt-simple">
                  <thead>
                    <tr>
                      <th class="text-end">#</th>
                      <th>Program Name</th>
                      <th>Pillar</th>
                      <th>Program Date</th>
                      <th class="text-end">Price</th>
                      {/* <th class="text-end">Qty</th> */}
                      <th>Status</th>
                      <th class="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.map((item) => {
                        return <tr>
                          <td class="text-end">{item.id}</td>
                          <td>
                          <div class="row">
                          <div class="col-auto pe-0">
                            <img src={item.img} alt="user-image"
                              class="wid-40 rounded"/>
                          </div>
                          <div class="col">
                            <h6 class="mb-1">{item.name}</h6>
                            <p class="text-muted f-12 mb-0" style={{width:'15rem',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{item.shortDescription}</p>
                          </div>
                        </div>
                          </td>
                          <td>{item.pillar}</td>
                          <td>{item.date}</td>
                          <td class="text-end">{item.price}</td>
                          <td><span class="badge bg-light-success  f-12">{item.status}</span> </td>
                          <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="ecom_product-add.html" class="avtar avtar-xs btn-link-success btn-pc-default">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                        </tr>
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="cust-modal" data-bs-keyboard="false" tabindex="-1"
    aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header border-0 pb-0">
          <h5 class="mb-0">Product Details</h5>
          <a href="#" class="avtar avtar-s btn-link-danger btn-pc-default" data-bs-dismiss="modal">
            <i class="ti ti-x f-20"></i>
          </a>
        </div>
        <div class="modal-body">
          <div class="row align-items-center">
            <div class="col-sm-4">
              <div class="bg-light rounded position-relative">
                <div class="text-center">
                  <div class="chat-avtar d-inline-flex mx-auto">
                    <img class="img-fluid rounded" src="../assets/images/application/img-prod-4.jpg"
                      alt="User image" />
                  </div>
                </div>
                <div class="position-absolute end-0 top-0 p-3">
                  <span class="badge bg-success">In Stock</span>
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <h5>Canon EOS 1500D 24.1 Digital</h5>
              <p class="text-muted">Image Enlargement: After shooting, you can enlarge photographs of the objects for clear zoomed view. Change In Aspect Ratio: Boldly crop the subject and save it with a composition that has impact.</p>
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
                      <td class="py-1"><h5 class="mb-0">$399</h5></td>
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
