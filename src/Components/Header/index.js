import styles from "./styles.module.css";

const Header = () => {
  const barOnClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.currentTarget.classList);
    if (e.currentTarget.classList.contains("pc-trigger")) {
      console.log("remove");
      e.currentTarget.classList.remove("pc-trigger");
      return;
    } else {
      console.log("add");
      e.currentTarget.classList.add("pc-trigger");
      return;
    }
  };

  const handleSidebar = (e) => {
    if(document.querySelector('.pc-sidebar').classList.contains('pc-sidebar-hide')){
      document.querySelector('.pc-sidebar').classList.remove('pc-sidebar-hide')
    }else{
      document.querySelector('.pc-sidebar').classList.add('pc-sidebar-hide') 
    }
  }

  const handleShowSearch = (e) => {
    if(document.querySelector('#serachTextBox').classList.contains('show')){
      document.querySelector('.pc-h-item').classList.remove('show')
    }else{
      document.querySelector('.pc-h-item').classList.add('show') 
    }
  }

  const handleOpenSettings = (e) => {
    if(document.querySelector('#settingDropDown').classList.contains('show')){
      document.querySelector('#settingDropDown').classList.remove('show')
    }else{
      document.querySelector('#settingDropDown').classList.add('show') 
    }
  }

  return (
    <>
      <header class="pc-header" style={{ padding: 0 }}>
        <div
          class="header-wrapper"
          style={{ justifyContent: "space-between", width: "100%" }}
        >
          <div class="me-auto pc-mob-drp">
            <ul class="list-unstyled">
              <li class="pc-h-item pc-sidebar-collapse" onClick={handleSidebar}>
                <div class="pc-head-link ms-0" id="sidebar-hide" >
                  <i class="ti ti-menu-2"></i>
                </div>
              </li>
              <li class="pc-h-item pc-sidebar-popup">
                <div class="pc-head-link ms-0" id="mobile-collapse" >
                  <i class="ti ti-menu-2"></i>
                </div>
              </li>
              <li class="dropdown pc-h-item">
                <div
                  class="pc-head-link dropdown-toggle arrow-none m-0 trig-drp-search"
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-haspopup="false"
                  aria-expanded="false"
                  onClick={handleShowSearch}
                >
                  <svg class="pc-icon">
                    <path
                      d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                      fill="currentcolor"
                    />
                    <path
                      d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z"
                      fill="currentcolor"
                    />
                  </svg>
                </div>
                <div id="serachTextBox" class="dropdown-menu pc-h-dropdown drp-search">
                  <form class="px-3 py-2">
                    <input
                      type="search"
                      class="form-control border-0 shadow-none"
                      placeholder="Search here. . ."
                    />
                  </form>
                </div>
              </li>
            </ul>
          </div>
          <div class="ms-auto">
            <ul class="list-unstyled">
              <li class="dropdown pc-h-item">
                <a
                  class="pc-head-link dropdown-toggle arrow-none me-0"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  <svg class="pc-icon">
                    <path
                      d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z"
                      fill="currentcolor"
                    />
                    <path
                      d="M12 22.96C11.45 22.96 11 22.55 11 22V21.92C11 21.37 11.45 20.92 12 20.92C12.55 20.92 13 21.37 13 21.92C13 22.47 12.55 22.96 12 22.96ZM19.14 20.14C18.88 20.14 18.63 20.04 18.43 19.85L18.3 19.72C17.91 19.33 17.91 18.7 18.3 18.31C18.69 17.92 19.32 17.92 19.71 18.31L19.84 18.44C20.23 18.83 20.23 19.46 19.84 19.85C19.65 20.04 19.4 20.14 19.14 20.14ZM4.86 20.14C4.6 20.14 4.35 20.04 4.15 19.85C3.76 19.46 3.76 18.83 4.15 18.44L4.28 18.31C4.67 17.92 5.3 17.92 5.69 18.31C6.08 18.7 6.08 19.33 5.69 19.72L5.56 19.85C5.37 20.04 5.11 20.14 4.86 20.14ZM22 13H21.92C21.37 13 20.92 12.55 20.92 12C20.92 11.45 21.37 11 21.92 11C22.47 11 22.96 11.45 22.96 12C22.96 12.55 22.55 13 22 13ZM2.08 13H2C1.45 13 1 12.55 1 12C1 11.45 1.45 11 2 11C2.55 11 3.04 11.45 3.04 12C3.04 12.55 2.63 13 2.08 13ZM19.01 5.99C18.75 5.99 18.5 5.89 18.3 5.7C17.91 5.31 17.91 4.68 18.3 4.29L18.43 4.16C18.82 3.77 19.45 3.77 19.84 4.16C20.23 4.55 20.23 5.18 19.84 5.57L19.71 5.7C19.52 5.89 19.27 5.99 19.01 5.99ZM4.99 5.99C4.73 5.99 4.48 5.89 4.28 5.7L4.15 5.56C3.76 5.17 3.76 4.54 4.15 4.15C4.54 3.76 5.17 3.76 5.56 4.15L5.69 4.28C6.08 4.67 6.08 5.3 5.69 5.69C5.5 5.89 5.24 5.99 4.99 5.99ZM12 3.04C11.45 3.04 11 2.63 11 2.08V2C11 1.45 11.45 1 12 1C12.55 1 13 1.45 13 2C13 2.55 12.55 3.04 12 3.04Z"
                      fill="currentcolor"
                    />
                  </svg>
                </a>
                <div class="dropdown-menu dropdown-menu-end pc-h-dropdown">
                  <a
                    href="#!"
                    class="dropdown-item"
                    onclick="layout_change('dark')"
                  >
                    <svg class="pc-icon">
                      <use xlinkHref="#custom-moon"></use>
                    </svg>
                    <span>Dark</span>
                  </a>
                  <a
                    href="#!"
                    class="dropdown-item"
                    onclick="layout_change('light')"
                  >
                    <svg class="pc-icon">
                      <path
                        d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M12 22.96C11.45 22.96 11 22.55 11 22V21.92C11 21.37 11.45 20.92 12 20.92C12.55 20.92 13 21.37 13 21.92C13 22.47 12.55 22.96 12 22.96ZM19.14 20.14C18.88 20.14 18.63 20.04 18.43 19.85L18.3 19.72C17.91 19.33 17.91 18.7 18.3 18.31C18.69 17.92 19.32 17.92 19.71 18.31L19.84 18.44C20.23 18.83 20.23 19.46 19.84 19.85C19.65 20.04 19.4 20.14 19.14 20.14ZM4.86 20.14C4.6 20.14 4.35 20.04 4.15 19.85C3.76 19.46 3.76 18.83 4.15 18.44L4.28 18.31C4.67 17.92 5.3 17.92 5.69 18.31C6.08 18.7 6.08 19.33 5.69 19.72L5.56 19.85C5.37 20.04 5.11 20.14 4.86 20.14ZM22 13H21.92C21.37 13 20.92 12.55 20.92 12C20.92 11.45 21.37 11 21.92 11C22.47 11 22.96 11.45 22.96 12C22.96 12.55 22.55 13 22 13ZM2.08 13H2C1.45 13 1 12.55 1 12C1 11.45 1.45 11 2 11C2.55 11 3.04 11.45 3.04 12C3.04 12.55 2.63 13 2.08 13ZM19.01 5.99C18.75 5.99 18.5 5.89 18.3 5.7C17.91 5.31 17.91 4.68 18.3 4.29L18.43 4.16C18.82 3.77 19.45 3.77 19.84 4.16C20.23 4.55 20.23 5.18 19.84 5.57L19.71 5.7C19.52 5.89 19.27 5.99 19.01 5.99ZM4.99 5.99C4.73 5.99 4.48 5.89 4.28 5.7L4.15 5.56C3.76 5.17 3.76 4.54 4.15 4.15C4.54 3.76 5.17 3.76 5.56 4.15L5.69 4.28C6.08 4.67 6.08 5.3 5.69 5.69C5.5 5.89 5.24 5.99 4.99 5.99ZM12 3.04C11.45 3.04 11 2.63 11 2.08V2C11 1.45 11.45 1 12 1C12.55 1 13 1.45 13 2C13 2.55 12.55 3.04 12 3.04Z"
                        fill="currentcolor"
                      />
                    </svg>
                    <span>Light</span>
                  </a>
                  <a
                    href="#!"
                    class="dropdown-item"
                    onclick="layout_change_default()"
                  >
                    <svg class="pc-icon">
                      <path
                        opacity="0.4"
                        d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25Z"
                        fill="currentcolor"
                      />
                    </svg>
                    <span>Default</span>
                  </a>
                </div>
              </li>
              <li class="dropdown pc-h-item">
                <div
                  class="pc-head-link dropdown-toggle arrow-none me-0"
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-haspopup="false"
                  onClick={handleOpenSettings}
                  aria-expanded="false"
                >
                  <svg class="pc-icon">
                    <path
                      opacity="0.4"
                      d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
                      fill="currentcolor"
                    />
                    <path
                      d="M12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25Z"
                      fill="currentcolor"
                    />
                  </svg>
                </div>
                <div id='settingDropDown' class="dropdown-menu dropdown-menu-end pc-h-dropdown">
                  <a href="#!" class="dropdown-item">
                    <i class="ti ti-user"></i>
                    <span>My Account</span>
                  </a>
                  <a href="#!" class="dropdown-item">
                    <i class="ti ti-settings"></i>
                    <span>Settings</span>
                  </a>
                  <a href="#!" class="dropdown-item">
                    <i class="ti ti-headset"></i>
                    <span>Support</span>
                  </a>
                  <a href="#!" class="dropdown-item">
                    <i class="ti ti-lock"></i>
                    <span>Lock Screen</span>
                  </a>
                  <a href="#!" class="dropdown-item">
                    <i class="ti ti-power"></i>
                    <span>Logout</span>
                  </a>
                </div>
              </li>
              <li class="pc-h-item">
                <a
                  href="#"
                  class="pc-head-link me-0"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#announcement"
                  aria-controls="announcement"
                >
                  <svg class="pc-icon">
                    <path
                      d="M12.0005 3.66992V20.3299L11.2005 21.2399C10.0905 22.4999 9.1805 22.1599 9.1805 20.4799V13.2799H6.0905C4.6905 13.2799 4.3005 12.4199 5.2305 11.3699L12.0005 3.66992Z"
                      fill="currentcolor"
                    />
                    <path
                      opacity="0.4"
                      d="M18.77 12.6299L12 20.3299V3.6699L12.8 2.7599C13.91 1.4999 14.82 1.8399 14.82 3.5199V10.7199H17.91C19.31 10.7199 19.7 11.5799 18.77 12.6299Z"
                      fill="currentcolor"
                    />
                  </svg>
                </a>
              </li>
              <li class="dropdown pc-h-item">
                <a
                  class="pc-head-link dropdown-toggle arrow-none me-0"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  <svg class="pc-icon">
                    <path
                      d="M19.3399 14.49L18.3399 12.83C18.1299 12.46 17.9399 11.76 17.9399 11.35V8.82C17.9399 6.47 16.5599 4.44 14.5699 3.49C14.0499 2.57 13.0899 2 11.9899 2C10.8999 2 9.91994 2.59 9.39994 3.52C7.44994 4.49 6.09994 6.5 6.09994 8.82V11.35C6.09994 11.76 5.90994 12.46 5.69994 12.82L4.68994 14.49C4.28994 15.16 4.19994 15.9 4.44994 16.58C4.68994 17.25 5.25994 17.77 5.99994 18.02C7.93994 18.68 9.97994 19 12.0199 19C14.0599 19 16.0999 18.68 18.0399 18.03C18.7399 17.8 19.2799 17.27 19.5399 16.58C19.7999 15.89 19.7299 15.13 19.3399 14.49Z"
                      fill="currentcolor"
                    />
                    <path
                      d="M14.8297 20.01C14.4097 21.17 13.2997 22 11.9997 22C11.2097 22 10.4297 21.68 9.87969 21.11C9.55969 20.81 9.31969 20.41 9.17969 20C9.30969 20.02 9.43969 20.03 9.57969 20.05C9.80969 20.08 10.0497 20.11 10.2897 20.13C10.8597 20.18 11.4397 20.21 12.0197 20.21C12.5897 20.21 13.1597 20.18 13.7197 20.13C13.9297 20.11 14.1397 20.1 14.3397 20.07C14.4997 20.05 14.6597 20.03 14.8297 20.01Z"
                      fill="currentcolor"
                    />
                  </svg>
                  <span class="badge bg-success pc-h-badge">3</span>
                </a>
                <div class="dropdown-menu dropdown-notification dropdown-menu-end pc-h-dropdown">
                  <div class="dropdown-header d-flex align-items-center justify-content-between">
                    <h5 class="m-0">Notifications</h5>
                    <a href="#!" class="btn btn-link btn-sm">
                      Mark all read
                    </a>
                  </div>
                  <div
                    class="dropdown-body text-wrap header-notification-scroll position-relative"
                    style={{ maxHeight: "calc(100vh - 215px)" }}
                  >
                    <p class="text-span">Today</p>
                    <div class="card mb-2">
                      <div class="card-body">
                        <div class="d-flex">
                          <div class="flex-shrink-0">
                            <svg class="pc-icon text-primary">
                              <use xlinkHref="#custom-layer"></use>
                            </svg>
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <span class="float-end text-sm text-muted">
                              2 min ago
                            </span>
                            <h5 class="text-body mb-2">UI/UX Design</h5>
                            <p class="mb-0">
                              Lorem Ipsum has been the industry's standard dummy
                              text ever since the 1500s, when an unknown printer
                              took a galley of type and scrambled it to make a
                              type
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card mb-2">
                      <div class="card-body">
                        <div class="d-flex">
                          <div class="flex-shrink-0">
                            <svg class="pc-icon text-primary">
                              <use xlinkHref="#custom-sms"></use>
                            </svg>
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <span class="float-end text-sm text-muted">
                              1 hour ago
                            </span>
                            <h5 class="text-body mb-2">Message</h5>
                            <p class="mb-0">
                              Lorem Ipsum has been the industry's standard dummy
                              text ever since the 1500.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p class="text-span">Yesterday</p>
                    <div class="card mb-2">
                      <div class="card-body">
                        <div class="d-flex">
                          <div class="flex-shrink-0">
                            <svg class="pc-icon text-primary">
                              <use xlinkHref="#custom-document-text"></use>
                            </svg>
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <span class="float-end text-sm text-muted">
                              2 hour ago
                            </span>
                            <h5 class="text-body mb-2">Forms</h5>
                            <p class="mb-0">
                              Lorem Ipsum has been the industry's standard dummy
                              text ever since the 1500s, when an unknown printer
                              took a galley of type and scrambled it to make a
                              type
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card mb-2">
                      <div class="card-body">
                        <div class="d-flex">
                          <div class="flex-shrink-0">
                            <svg class="pc-icon text-primary">
                              <use xlinkHref="#custom-user-bold"></use>
                            </svg>
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <span class="float-end text-sm text-muted">
                              12 hour ago
                            </span>
                            <h5 class="text-body mb-2">Challenge invitation</h5>
                            <p class="mb-2">
                              <span class="text-dark">Jonny aber</span> invites
                              to join the challenge
                            </p>
                            <button class="btn btn-sm btn-outline-secondary me-2">
                              Decline
                            </button>
                            <button class="btn btn-sm btn-primary">
                              Accept
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card mb-2">
                      <div class="card-body">
                        <div class="d-flex">
                          <div class="flex-shrink-0">
                            <svg class="pc-icon text-primary">
                              <use xlinkHref="#custom-security-safe"></use>
                            </svg>
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <span class="float-end text-sm text-muted">
                              5 hour ago
                            </span>
                            <h5 class="text-body mb-2">Security</h5>
                            <p class="mb-0">
                              Lorem Ipsum has been the industry's standard dummy
                              text ever since the 1500s, when an unknown printer
                              took a galley of type and scrambled it to make a
                              type
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="text-center py-2">
                    <a href="#!" class="link-danger">
                      Clear all Notifications
                    </a>
                  </div>
                </div>
              </li>
              <li class="dropdown pc-h-item header-user-profile">
                <a
                  class="pc-head-link dropdown-toggle arrow-none me-0"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="false"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  <img
                    src="../assets/images/user/avatar-2.jpg"
                    alt="user-image"
                    class="user-avtar"
                  />
                </a>
                <div class="dropdown-menu dropdown-user-profile dropdown-menu-end pc-h-dropdown">
                  <div class="dropdown-header d-flex align-items-center justify-content-between">
                    <h5 class="m-0">Profile</h5>
                  </div>
                  <div class="dropdown-body">
                    <div
                      class="profile-notification-scroll position-relative"
                      style={{ maxHeight: "calc(100vh - 225px)" }}
                    >
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0">
                          <img
                            src="../assets/images/user/avatar-2.jpg"
                            alt="user-image"
                            class="user-avtar wid-35"
                          />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-1">Carson Darrin 🖖</h6>
                          <span>carson.darrin@company.io</span>
                        </div>
                      </div>
                      <hr class="border-secondary border-opacity-50" />
                      <div class="card">
                        <div class="card-body py-3">
                          <div class="d-flex align-items-center justify-content-between">
                            <h5 class="mb-0 d-inline-flex align-items-center">
                              <svg class="pc-icon text-muted me-2">
                                <use xlinkHref="#custom-notification-outline"></use>
                              </svg>
                              Notification
                            </h5>
                            <div class="form-check form-switch form-check-reverse m-0">
                              <input
                                class="form-check-input f-18"
                                type="checkbox"
                                role="switch"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <p class="text-span">Manage</p>
                      <a href="#" class="dropdown-item">
                        <span>
                          {/* <svg class="pc-icon text-muted me-2">
                            <use xlinkHref="#custom-setting-outline"></use>
                          </svg> */}
                          <img
                            class="pc-icon text-muted me-2"
                            src="/assets/images/settings.png"
                          />
                          <span>Settings</span>
                        </span>
                      </a>
                      <a href="#" class="dropdown-item">
                        <span>
                          <svg class="pc-icon text-muted me-2">
                            <use xlinkHref="#custom-share-bold"></use>
                          </svg>
                          <span>Share</span>
                        </span>
                      </a>
                      <a href="#" class="dropdown-item">
                        <span>
                          <svg class="pc-icon text-muted me-2">
                            <use xlinkHref="#custom-lock-outline"></use>
                          </svg>
                          <span>Change Password</span>
                        </span>
                      </a>
                      <hr class="border-secondary border-opacity-50" />
                      <p class="text-span">Team</p>
                      <a href="#" class="dropdown-item">
                        <span>
                          <svg class="pc-icon text-muted me-2">
                            <use xlinkHref="#custom-profile-2user-outline"></use>
                          </svg>
                          <span>UI Design team</span>
                        </span>
                        <div class="user-group">
                          <img
                            src="../assets/images/user/avatar-1.jpg"
                            alt="user-image"
                            class="avtar"
                          />
                          <span class="avtar bg-danger text-white">K</span>
                          <span class="avtar bg-success text-white">
                            <svg class="pc-icon m-0">
                              <use xlinkHref="#custom-user"></use>
                            </svg>
                          </span>
                          <span class="avtar bg-light-primary text-primary">
                            +2
                          </span>
                        </div>
                      </a>
                      <a href="#" class="dropdown-item">
                        <span>
                          <svg class="pc-icon text-muted me-2">
                            <use xlinkHref="#custom-profile-2user-outline"></use>
                          </svg>
                          <span>Friends Groups</span>
                        </span>
                        <div class="user-group">
                          <img
                            src="../assets/images/user/avatar-1.jpg"
                            alt="user-image"
                            class="avtar"
                          />
                          <span class="avtar bg-danger text-white">K</span>
                          <span class="avtar bg-success text-white">
                            <svg class="pc-icon m-0">
                              <use xlinkHref="#custom-user"></use>
                            </svg>
                          </span>
                        </div>
                      </a>
                      <a href="#" class="dropdown-item">
                        <span>
                          <svg class="pc-icon text-muted me-2">
                            <use xlinkHref="#custom-add-outline"></use>
                          </svg>
                          <span>Add new</span>
                        </span>
                        <div class="user-group">
                          <span class="avtar bg-primary text-white">
                            <svg class="pc-icon m-0">
                              <use xlinkHref="#custom-add-outline"></use>
                            </svg>
                          </span>
                        </div>
                      </a>
                      <hr class="border-secondary border-opacity-50" />
                      <div class="d-grid mb-3">
                        <button class="btn btn-primary">
                          <svg class="pc-icon me-2">
                            <use xlinkHref="#custom-logout-1-outline"></use>
                          </svg>
                          Logout
                        </button>
                      </div>
                      <div
                        class="card border-0 shadow-none drp-upgrade-card mb-0"
                        style={{
                          backgroundImage: `url(/assets/images/layout/img-profile-card.jpg)`,
                        }}
                      >
                        <div class="card-body">
                          <div class="user-group">
                            <img
                              src="../assets/images/user/avatar-1.jpg"
                              alt="user-image"
                              class="avtar"
                            />
                            <img
                              src="../assets/images/user/avatar-2.jpg"
                              alt="user-image"
                              class="avtar"
                            />
                            <img
                              src="../assets/images/user/avatar-3.jpg"
                              alt="user-image"
                              class="avtar"
                            />
                            <img
                              src="../assets/images/user/avatar-4.jpg"
                              alt="user-image"
                              class="avtar"
                            />
                            <img
                              src="../assets/images/user/avatar-5.jpg"
                              alt="user-image"
                              class="avtar"
                            />
                            <span class="avtar bg-light-primary text-primary">
                              +20
                            </span>
                          </div>
                          <h3 class="my-3 text-dark">
                            245.3k <small class="text-muted">Followers</small>
                          </h3>
                          <div class="btn btn btn-warning">
                            <svg class="pc-icon me-2">
                              <use xlinkHref="#custom-logout-1-outline"></use>
                            </svg>
                            Upgrade to Business
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
