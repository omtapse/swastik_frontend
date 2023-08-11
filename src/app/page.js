"use client";
import Image from "next/image";
import Sidebar from "../Components/Sidebar";
import { Html, Head, Main, NextScript } from "next/document";
import "@/styles/Template Styles/css/fonts/fontawesome.css";
import { useEffect } from "react";
import Localstorage from "@/utills/storage/Localstorage";
import { useRouter } from "next/navigation";
import Header from "@/Components/Header";

export default function Home() {
  const data = [
    {
      id: 1,
      img:'../assets/images/widget/img-prod-1.jpg',
      name: "Empower Program",
      status: "active",
      price: "$98000",
      duration: "6 months",
      date: "12/12/2021",
      Action:<p>View</p>
    },
    {
      id: 2,
      img:'../assets/images/widget/img-prod-2.jpg',
      name: "Empower Program",
      status: "active",
      price: "$98000",
      duration: "6 months",
      date: "12/12/2021",
      Action:<p>View</p>
    },
    {
      id: 2,
      img:'../assets/images/widget/img-prod-3.jpg',
      name: "Empower Program",
      status: "ended",
      price: "$98000",
      duration: "6 months",
      date: "12/12/2021",
      Action:<p>View</p>
    },
    {
      id: 2,
      img:'../assets/images/widget/img-prod-4.jpg',
      name: "Empower Program",
      status: "ended",
      price: "$98000",
      duration: "6 months",
      date: "12/12/2021",
      Action:<p>View</p>
    },
    {
      id: 2,
      img:'../assets/images/widget/img-prod-1.jpg',
      name: "Empower Program",
      status: "ended",
      price: "$98000",
      duration: "6 months",
      date: "12/12/2021",
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
                    <li class="breadcrumb-item">
                      <a href="../navigation/index.html">Home</a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="javascript: void(0)">Dashboard</a>
                    </li>
                    <li class="breadcrumb-item" aria-current="page">
                      Home
                    </li>
                  </ul>
                </div>
                <div class="col-md-12">
                  <div class="page-header-title">
                    <h2 class="mb-0">Home</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xl-8 col-md-12">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex align-items-center justify-content-between mb-3">
                    <h5 class="mb-0">Programs</h5>
                    <select class="form-select w-auto">
                      <option>Today</option>
                      <option>Weekly</option>
                      <option selected="">Monthly</option>
                    </select>
                  </div>
                  <div class="table-responsive">
                    <table class="table table-hover" id="pc-dt-simple">
                      <thead>
                        <tr>
                          <th>Program</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th class="text-end">Price</th>
                          <th>Duration</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          data.map((item) => {
                            return (
                              <tr>
                                <td>
                                  <div class="row align-items-center">
                                    <div class="col-auto pe-0">
                                      <img
                                        src={item.img} 
                                        alt="user-image"
                                        class="wid-55 hei-55 rounded"
                                      />
                                    </div>
                                    <div class="col">
                                      <h6 class="mb-2">
                                        <span class="text-truncate w-100">
                                          {item.name}
                                        </span>
                                      </h6>
                                    </div>
                                  </div>
                                </td>
                                <td class="f-w-600">{item.date}</td>
                                <td>
                                  <span class={item.status=="active"?"badge bg-success":"badge bg-danger"} >
                                    {item.status}
                                  </span>
                                </td>
                                <td class="text-end f-w-600">{item.price}</td>
                                <td class="f-w-600">{item.duration}</td>
                                <td class="f-w-600">{item.Action}</td>
                                </tr>
                            )
                          })
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-12">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex align-items-center justify-content-between mb-3">
                    <h5 class="mb-0">Monthly Revenue</h5>
                    <div class="dropdown">
                      <a
                        class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none"
                        href="#"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="ti ti-dots-vertical f-18"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#">
                          Today
                        </a>
                        <a class="dropdown-item" href="#">
                          Weekly
                        </a>
                        <a class="dropdown-item" href="#">
                          Monthly
                        </a>
                      </div>
                    </div>
                  </div>
                  <h5 class="mb-1">
                    $746.5k{" "}
                    <small class="text-success f-w-400">
                      +20.6 <i class="ti ti-arrow-up"></i>
                    </small>
                  </h5>
                  <p class="text-muted mb-0">Past 30 days</p>
                </div>
                <div class="table-body card-body pt-0">
                  <div class="table-responsive">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Customer</th>
                          <th class="text-end">Plan</th>
                          <th class="text-end">MRR</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center text-muted">
                              <div class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                <i class="ti ti-arrow-down f-16"></i>
                              </div>
                              <span class="text-truncate w-100">Logicoma</span>
                            </div>
                          </td>
                          <td class="text-end">
                            <span class="badge bg-light-success">Team</span>
                          </td>
                          <td class="text-end f-w-600">
                            <span class="text-danger">-$72</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center text-muted">
                              <div class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                <i class="ti ti-star f-16"></i>
                              </div>
                              <span class="text-truncate w-100">UAC</span>
                            </div>
                          </td>
                          <td class="text-end">
                            <span class="badge bg-light-success">Team</span>
                          </td>
                          <td class="text-end f-w-600">
                            <span>$199</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center text-muted">
                              <div class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                <i class="ti ti-wallet f-16"></i>
                              </div>
                              <span class="text-truncate w-100">Biffco</span>
                            </div>
                          </td>
                          <td class="text-end">
                            <span class="badge bg-light-success">Team</span>
                          </td>
                          <td class="text-end f-w-600">
                            <span class="text-danger">-$72</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center text-muted">
                              <div class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                <i class="ti ti-arrow-down f-16"></i>
                              </div>
                              <span class="text-truncate w-100">
                                Matsumura shworks
                              </span>
                            </div>
                          </td>
                          <td class="text-end">
                            <span class="badge bg-light-success">Team</span>
                          </td>
                          <td class="text-end f-w-600">
                            <span class="text-danger">-$72</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center text-muted">
                              <div class="avtar avtar-xs bg-light-secondary flex-shrink-0 me-2">
                                <i class="ti ti-wallet f-16"></i>
                              </div>
                              <span class="text-truncate w-100">Biffco</span>
                            </div>
                          </td>
                          <td class="text-end">
                            <span class="badge bg-light-success">Team</span>
                          </td>
                          <td class="text-end f-w-600">
                            <span class="text-danger">-$72</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-12">
              <div class="card">
                <div class="card-body pb-0">
                  <div class="d-flex align-items-center justify-content-between">
                    <h5 class="mb-0">My Task</h5>
                    <div class="dropdown">
                      <a
                        class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none"
                        href="#"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="ti ti-dots-vertical f-18"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#">
                          Today
                        </a>
                        <a class="dropdown-item" href="#">
                          Weekly
                        </a>
                        <a class="dropdown-item" href="#">
                          Monthly
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <ul class="list-group list-group-flush border-top-0">
                  <li class="list-group-item">
                    <div class="d-flex align-items-start">
                      <div class="flex-grow-1 me-2">
                        <h6 class="mb-0">Follow up client for feedback</h6>
                        <p class="my-1">
                          <i class="ti ti-archive"></i> Sending report
                        </p>
                        <span class="badge bg-danger rounded-pill">
                          00 : 15
                        </span>
                      </div>
                      <div class="flex-shrink-0">
                        <a href="#" class="avtar avtar-s btn-link-secondary">
                          <i class="ti ti-circle-check text-success f-18"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="d-flex align-items-start">
                      <div class="flex-grow-1 me-2">
                        <h6 class="mb-0">Follow up client for feedback</h6>
                        <p class="my-1">
                          <i class="ti ti-folder"></i> Received report
                        </p>
                        <span class="badge bg-success rounded-pill">
                          00 : 30
                        </span>
                      </div>
                      <div class="flex-shrink-0">
                        <a href="#" class="avtar avtar-s btn-link-secondary">
                          <i class="ti ti-circle-check f-18"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="d-flex align-items-start">
                      <div class="flex-grow-1 me-2">
                        <h6 class="mb-0">Follow up client for feedback</h6>
                        <p class="my-1">
                          <i class="ti ti-archive"></i> Sending report
                        </p>
                        <span class="badge bg-danger rounded-pill">
                          00 : 15
                        </span>
                      </div>
                      <div class="flex-shrink-0">
                        <a href="#" class="avtar avtar-s btn-link-secondary">
                          <i class="ti ti-circle-check f-18"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="card">
                <div class="card-header">
                  <div class="d-flex align-items-start">
                    <div class="flex-shrink-0">
                      <div class="avtar avtar-s bg-light-danger">
                        <i class="ti ti-brand-google f-18"></i>
                      </div>
                    </div>
                    <div class="flex-grow-1 mx-3">
                      <p class="mb-0">Google LLC</p>
                      <h6 class="mb-0">Sr. UI designer</h6>
                    </div>
                    <div class="flex-shrink-0">
                      <a href="#" class="avtar avtar-s btn-link-secondary">
                        <i class="ti ti-bookmarks f-18"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <h6>Description</h6>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley.
                  </p>
                  <ul class="list-inline pt-2">
                    <li class="list-inline-item">
                      <span class="bg-body rounded fs-6 p-2 border text-body">
                        Fulltime
                      </span>
                    </li>
                    <li class="list-inline-item">
                      <span class="bg-body rounded fs-6 p-2 border text-body">
                        Remote
                      </span>
                    </li>
                    <li class="list-inline-item">
                      <span class="bg-body rounded fs-6 p-2 border text-body">
                        Hourly
                      </span>
                    </li>
                  </ul>
                  <div class="d-flex align-items-center justify-content-between mt-4">
                    <ul class="list-inline mb-0 me-2">
                      <li class="list-inline-item">
                        <i class="text-muted ti ti-map-pin"></i>{" "}
                        Pennsylvania,USA
                      </li>
                      <li class="list-inline-item">
                        <i class="text-muted ti ti-clock"></i> 2 days ago
                      </li>
                    </ul>
                    <button class="btn btn-primary">Apply</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="card">
                <div class="card-body pb-0">
                  <div class="d-flex align-items-center justify-content-between">
                    <h5 class="mb-0">Team members</h5>
                    <div class="dropdown">
                      <a
                        class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none"
                        href="#"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="ti ti-dots-vertical f-18"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#">
                          Today
                        </a>
                        <a class="dropdown-item" href="#">
                          Weekly
                        </a>
                        <a class="dropdown-item" href="#">
                          Monthly
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <ul class="list-group list-group-flush border-top-0">
                  <li class="list-group-item">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <img
                          src="../assets/images/user/avatar-1.jpg"
                          alt="user-image"
                          class="user-avtar rounded wid-50 hie-50"
                        />
                      </div>
                      <div class="flex-grow-1 mx-2">
                        <h6 class="mb-1">David Jones</h6>
                        <p class="mb-0">Project Leader</p>
                      </div>
                      <div class="flex-shrink-0">
                        <p class="text-muted mb-0">5 min ago</p>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <img
                          src="../assets/images/user/avatar-3.jpg"
                          alt="user-image"
                          class="user-avtar rounded wid-50 hie-50"
                        />
                      </div>
                      <div class="flex-grow-1 mx-2">
                        <h6 class="mb-1">Robert Smith</h6>
                        <p class="mb-0">HR Manager</p>
                      </div>
                      <div class="flex-shrink-0">
                        <p class="text-muted mb-0">Yesterday</p>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <img
                          src="../assets/images/user/avatar-5.jpg"
                          alt="user-image"
                          class="user-avtar rounded wid-50 hie-50"
                        />
                      </div>
                      <div class="flex-grow-1 mx-2">
                        <h6 class="mb-1">John larry</h6>
                        <p class="mb-0">Developer</p>
                      </div>
                      <div class="flex-shrink-0">
                        <p class="text-muted mb-0">1 hour ago</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-xl-6 col-md-12">
              <div class="card table-card">
                <div class="card-header d-flex align-items-center justify-content-between">
                  <h5>Recent Tickets</h5>
                  <a href="#" class="link-primary">
                    View all
                  </a>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-hover table-borderless mb-0">
                      <thead>
                        <tr>
                          <th>Subject</th>
                          <th>Department</th>
                          <th>Date</th>
                          <th class="text-end">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Website down for one week</td>
                          <td>Support</td>
                          <td>Today 2:00</td>
                          <td class="text-end">
                            <label class="badge bg-light-success">open</label>
                          </td>
                        </tr>
                        <tr>
                          <td>Loosing control on server</td>
                          <td>Support</td>
                          <td>Yesterday</td>
                          <td class="text-end">
                            <label class="badge bg-light-primary">
                              progress
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>Authorizations keys</td>
                          <td>Support</td>
                          <td>27, Aug</td>
                          <td class="text-end">
                            <label class="badge bg-light-danger">closed</label>
                          </td>
                        </tr>
                        <tr>
                          <td>Restoring default settings</td>
                          <td>Support</td>
                          <td>Today 9:00</td>
                          <td class="text-end">
                            <label class="badge bg-light-success">open</label>
                          </td>
                        </tr>
                        <tr>
                          <td>Loosing control on server</td>
                          <td>Support</td>
                          <td>Yesterday</td>
                          <td class="text-end">
                            <label class="badge bg-light-primary">
                              progress
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>Restoring default settings</td>
                          <td>Support</td>
                          <td>Today 9:00</td>
                          <td class="text-end">
                            <label class="badge bg-light-success">open</label>
                          </td>
                        </tr>
                        <tr>
                          <td>Loosing control on server</td>
                          <td>Support</td>
                          <td>Yesterday</td>
                          <td class="text-end">
                            <label class="badge bg-light-primary">
                              progress
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>Authorizations keys</td>
                          <td>Support</td>
                          <td>27, Aug</td>
                          <td class="text-end">
                            <label class="badge bg-light-danger">closed</label>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-md-12">
              <div class="card">
                <div class="card-body border-bottom pb-0">
                  <div class="d-flex align-items-center justify-content-between">
                    <h5 class="mb-0">Transactions</h5>
                    <div class="dropdown">
                      <a
                        class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none"
                        href="#"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="ti ti-dots-vertical f-18"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#">
                          Today
                        </a>
                        <a class="dropdown-item" href="#">
                          Weekly
                        </a>
                        <a class="dropdown-item" href="#">
                          Monthly
                        </a>
                      </div>
                    </div>
                  </div>
                  <ul
                    class="nav nav-tabs analytics-tab"
                    id="myTab"
                    role="tablist"
                  >
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="analytics-tab-1"
                        data-bs-toggle="tab"
                        data-bs-target="#analytics-tab-1-pane"
                        type="button"
                        role="tab"
                        aria-controls="analytics-tab-1-pane"
                        aria-selected="true"
                      >
                        All Transaction
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="analytics-tab-2"
                        data-bs-toggle="tab"
                        data-bs-target="#analytics-tab-2-pane"
                        type="button"
                        role="tab"
                        aria-controls="analytics-tab-2-pane"
                        aria-selected="false"
                      >
                        Success
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="analytics-tab-3"
                        data-bs-toggle="tab"
                        data-bs-target="#analytics-tab-3-pane"
                        type="button"
                        role="tab"
                        aria-controls="analytics-tab-3-pane"
                        aria-selected="false"
                      >
                        Pending
                      </button>
                    </li>
                  </ul>
                </div>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="analytics-tab-1-pane"
                    role="tabpanel"
                    aria-labelledby="analytics-tab-1"
                    tabindex="0"
                  >
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <div class="avtar avtar-s border"> AI </div>
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <div class="row g-1">
                              <div class="col-6">
                                <h6 class="mb-0">Apple Inc.</h6>
                                <p class="text-muted mb-0">
                                  <small>#ABLE-PRO-T00232</small>
                                </p>
                              </div>
                              <div class="col-6 text-end">
                                <h6 class="mb-1">$210,000</h6>
                                <p class="text-danger mb-0">
                                  <i class="ti ti-arrow-down-left"></i> 10.6%
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <div
                              class="avtar avtar-s border"
                              data-bs-toggle="tooltip"
                              data-bs-title="10,000 Tracks"
                            >
                              <span>SM</span>
                            </div>
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <div class="row g-1">
                              <div class="col-6">
                                <h6 class="mb-0">Spotify Music</h6>
                                <p class="text-muted mb-0">
                                  <small>#ABLE-PRO-T10232</small>
                                </p>
                              </div>
                              <div class="col-6 text-end">
                                <h6 class="mb-1">- 10,000</h6>
                                <p class="text-success mb-0">
                                  <i class="ti ti-arrow-up-right"></i> 30.6%
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <div
                              class="avtar avtar-s border bg-light-primary"
                              data-bs-toggle="tooltip"
                              data-bs-title="143 Posts"
                            >
                              <span>MD</span>
                            </div>
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <div class="row g-1">
                              <div class="col-6">
                                <h6 class="mb-0">Medium</h6>
                                <p class="text-muted mb-0">
                                  <small>06:30 pm</small>
                                </p>
                              </div>
                              <div class="col-6 text-end">
                                <h6 class="mb-1">-26</h6>
                                <p class="text-warning mb-0">
                                  <i class="ti ti-arrows-left-right"></i> 5%
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <div
                              class="avtar avtar-s border"
                              data-bs-toggle="tooltip"
                              data-bs-title="143 Posts"
                            >
                              <span>U</span>{" "}
                            </div>
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <div class="row g-1">
                              <div class="col-6">
                                <h6 class="mb-0">Uber</h6>
                                <p class="text-muted mb-0">
                                  <small>08:40 pm</small>
                                </p>
                              </div>
                              <div class="col-6 text-end">
                                <h6 class="mb-1">+210,000</h6>
                                <p class="text-success mb-0">
                                  <i class="ti ti-arrow-up-right"></i> 10.6%
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <div
                              class="avtar avtar-s border bg-light-warning"
                              data-bs-toggle="tooltip"
                              data-bs-title="143 Posts"
                            >
                              <span>OC</span>
                            </div>
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <div class="row g-1">
                              <div class="col-6">
                                <h6 class="mb-0">Ola Cabs</h6>
                                <p class="text-muted mb-0">
                                  <small>07:40 pm</small>
                                </p>
                              </div>
                              <div class="col-6 text-end">
                                <h6 class="mb-1">+210,000</h6>
                                <p class="text-success mb-0">
                                  <i class="ti ti-arrow-up-right"></i> 10.6%
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="analytics-tab-2-pane"
                    role="tabpanel"
                    aria-labelledby="analytics-tab-2"
                    tabindex="0"
                  >
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <div
                              class="avtar avtar-s border"
                              data-bs-toggle="tooltip"
                              data-bs-title="143 Posts"
                            >
                              <span>U</span>{" "}
                            </div>
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <div class="row g-1">
                              <div class="col-6">
                                <h6 class="mb-0">Uber</h6>
                                <p class="text-muted mb-0">
                                  <small>08:40 pm</small>
                                </p>
                              </div>
                              <div class="col-6 text-end">
                                <h6 class="mb-1">+210,000</h6>
                                <p class="text-success mb-0">
                                  <i class="ti ti-arrow-up-right"></i> 10.6%
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <div
                              class="avtar avtar-s border bg-light-warning"
                              data-bs-toggle="tooltip"
                              data-bs-title="143 Posts"
                            >
                              <span>OC</span>
                            </div>
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <div class="row g-1">
                              <div class="col-6">
                                <h6 class="mb-0">Ola Cabs</h6>
                                <p class="text-muted mb-0">
                                  <small>07:40 pm</small>
                                </p>
                              </div>
                              <div class="col-6 text-end">
                                <h6 class="mb-1">+210,000</h6>
                                <p class="text-success mb-0">
                                  <i class="ti ti-arrow-up-right"></i> 10.6%
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <div class="avtar avtar-s border"> AI </div>
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <div class="row g-1">
                              <div class="col-6">
                                <h6 class="mb-0">Apple Inc.</h6>
                                <p class="text-muted mb-0">
                                  <small>#ABLE-PRO-T00232</small>
                                </p>
                              </div>
                              <div class="col-6 text-end">
                                <h6 class="mb-1">$210,000</h6>
                                <p class="text-danger mb-0">
                                  <i class="ti ti-arrow-down-left"></i> 10.6%
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <div
                              class="avtar avtar-s border"
                              data-bs-toggle="tooltip"
                              data-bs-title="10,000 Tracks"
                            >
                              <span>SM</span>
                            </div>
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <div class="row g-1">
                              <div class="col-6">
                                <h6 class="mb-0">Spotify Music</h6>
                                <p class="text-muted mb-0">
                                  <small>#ABLE-PRO-T10232</small>
                                </p>
                              </div>
                              <div class="col-6 text-end">
                                <h6 class="mb-1">- 10,000</h6>
                                <p class="text-success mb-0">
                                  <i class="ti ti-arrow-up-right"></i> 30.6%
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <div
                              class="avtar avtar-s border bg-light-primary"
                              data-bs-toggle="tooltip"
                              data-bs-title="143 Posts"
                            >
                              <span>MD</span>
                            </div>
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <div class="row g-1">
                              <div class="col-6">
                                <h6 class="mb-0">Medium</h6>
                                <p class="text-muted mb-0">
                                  <small>06:30 pm</small>
                                </p>
                              </div>
                              <div class="col-6 text-end">
                                <h6 class="mb-1">-26</h6>
                                <p class="text-warning mb-0">
                                  <i class="ti ti-arrows-left-right"></i> 5%
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="analytics-tab-3-pane"
                    role="tabpanel"
                    aria-labelledby="analytics-tab-3"
                    tabindex="0"
                  >
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <div
                              class="avtar avtar-s border"
                              data-bs-toggle="tooltip"
                              data-bs-title="10,000 Tracks"
                            >
                              <span>SM</span>
                            </div>
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <div class="row g-1">
                              <div class="col-6">
                                <h6 class="mb-0">Spotify Music</h6>
                                <p class="text-muted mb-0">
                                  <small>#ABLE-PRO-T10232</small>
                                </p>
                              </div>
                              <div class="col-6 text-end">
                                <h6 class="mb-1">- 10,000</h6>
                                <p class="text-success mb-0">
                                  <i class="ti ti-arrow-up-right"></i> 30.6%
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <div
                              class="avtar avtar-s border bg-light-primary"
                              data-bs-toggle="tooltip"
                              data-bs-title="143 Posts"
                            >
                              <span>MD</span>
                            </div>
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <div class="row g-1">
                              <div class="col-6">
                                <h6 class="mb-0">Medium</h6>
                                <p class="text-muted mb-0">
                                  <small>06:30 pm</small>
                                </p>
                              </div>
                              <div class="col-6 text-end">
                                <h6 class="mb-1">-26</h6>
                                <p class="text-warning mb-0">
                                  <i class="ti ti-arrows-left-right"></i> 5%
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <div
                              class="avtar avtar-s border"
                              data-bs-toggle="tooltip"
                              data-bs-title="143 Posts"
                            >
                              <span>U</span>{" "}
                            </div>
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <div class="row g-1">
                              <div class="col-6">
                                <h6 class="mb-0">Uber</h6>
                                <p class="text-muted mb-0">
                                  <small>08:40 pm</small>
                                </p>
                              </div>
                              <div class="col-6 text-end">
                                <h6 class="mb-1">+210,000</h6>
                                <p class="text-success mb-0">
                                  <i class="ti ti-arrow-up-right"></i> 10.6%
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <div class="avtar avtar-s border"> AI </div>
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <div class="row g-1">
                              <div class="col-6">
                                <h6 class="mb-0">Apple Inc.</h6>
                                <p class="text-muted mb-0">
                                  <small>#ABLE-PRO-T00232</small>
                                </p>
                              </div>
                              <div class="col-6 text-end">
                                <h6 class="mb-1">$210,000</h6>
                                <p class="text-danger mb-0">
                                  <i class="ti ti-arrow-down-left"></i> 10.6%
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <div
                              class="avtar avtar-s border bg-light-warning"
                              data-bs-toggle="tooltip"
                              data-bs-title="143 Posts"
                            >
                              <span>OC</span>
                            </div>
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <div class="row g-1">
                              <div class="col-6">
                                <h6 class="mb-0">Ola Cabs</h6>
                                <p class="text-muted mb-0">
                                  <small>07:40 pm</small>
                                </p>
                              </div>
                              <div class="col-6 text-end">
                                <h6 class="mb-1">+210,000</h6>
                                <p class="text-success mb-0">
                                  <i class="ti ti-arrow-up-right"></i> 10.6%
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="row g-2">
                    <div class="col-md-6">
                      <div class="d-grid">
                        <button class="btn btn-outline-secondary d-grid">
                          <span class="text-truncate w-100">
                            View all Transaction History
                          </span>
                        </button>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="d-grid">
                        <button class="btn btn-primary d-grid">
                          <span class="text-truncate w-100">
                            Create new Transaction
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="card">
                <div class="card-body pb-0">
                  <div class="d-flex align-items-center justify-content-between mb-3">
                    <h5 class="mb-0">Payment History</h5>
                    <a class="avtar avtar-s btn-link-secondary">
                      <i class="ti ti-plus f-18"></i>
                    </a>
                  </div>
                </div>
                <ul class="list-group list-group-flush border-top-0">
                  <li class="list-group-item">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <div class="avtar avtar-s bg-light-secondary">
                          <img
                            src="../assets/images/widget/img-paypal.png"
                            alt="img"
                            class="img-fluid"
                          />
                        </div>
                      </div>
                      <div class="flex-grow-1 mx-2">
                        <p class="mb-1">Paypal</p>
                        <h6 class="mb-0">
                          +210,000 <small class="text-success">+ 30.6%</small>
                        </h6>
                      </div>
                      <div class="flex-shrink-0">
                        <div class="dropdown">
                          <a
                            class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="ti ti-dots-vertical f-18"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#">
                              Name
                            </a>
                            <a class="dropdown-item" href="#">
                              Date
                            </a>
                            <a class="dropdown-item" href="#">
                              Ratting
                            </a>
                            <a class="dropdown-item" href="#">
                              Unread
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <div class="avtar avtar-s bg-light-secondary">
                          <img
                            src="../assets/images/widget/img-gpay.png"
                            alt="img"
                            class="img-fluid"
                          />
                        </div>
                      </div>
                      <div class="flex-grow-1 mx-2">
                        <p class="mb-1">Gpay</p>
                        <h6 class="mb-0">
                          -$2,000 <small class="text-danger">- 30.6%</small>
                        </h6>
                      </div>
                      <div class="flex-shrink-0">
                        <div class="dropdown">
                          <a
                            class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="ti ti-dots-vertical f-18"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#">
                              Name
                            </a>
                            <a class="dropdown-item" href="#">
                              Date
                            </a>
                            <a class="dropdown-item" href="#">
                              Ratting
                            </a>
                            <a class="dropdown-item" href="#">
                              Unread
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <div class="avtar avtar-s bg-light-secondary">
                          <img
                            src="../assets/images/widget/img-phonepay.png"
                            alt="img"
                            class="img-fluid"
                          />
                        </div>
                      </div>
                      <div class="flex-grow-1 mx-2">
                        <p class="mb-1">Phone Pay</p>
                        <h6 class="mb-0">
                          -$2,000 <small class="text-danger">- 30.6%</small>
                        </h6>
                      </div>
                      <div class="flex-shrink-0">
                        <div class="dropdown">
                          <a
                            class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="ti ti-dots-vertical f-18"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#">
                              Name
                            </a>
                            <a class="dropdown-item" href="#">
                              Date
                            </a>
                            <a class="dropdown-item" href="#">
                              Ratting
                            </a>
                            <a class="dropdown-item" href="#">
                              Unread
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="card-footer">
                  <div class="d-grid">
                    <button class="btn btn-outline-secondary">View all</button>
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
