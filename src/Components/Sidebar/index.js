import Link from "next/link";
import styles from "./styles.module.css";

const Sidebar = () => {
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

  return (
    <>
      <nav className="pc-sidebar">
        <div className="navbar-wrapper">
          <div className="m-header">
            <a href="#" className="b-brand text-primary">
              <img src="/assets/images/logo-dark.svg" />
              <span className="badge bg-light-success rounded-pill ms-2 theme-version">
                v9.0
              </span>
            </a>
          </div>
          <div className={`navbar-content ${styles.scrollbar}`}>
            <div className="card pc-user-card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <img
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("click");
                      }}
                      src="/assets/images/user/avatar-1.jpg"
                      alt="user-image"
                      className="user-avtar wid-45 rounded-circle"
                    />
                  </div>
                  <div className="flex-grow-1 ms-3 me-2">
                    <h6 className="mb-0">Jonh Smith</h6>
                    <small>Administrator</small>
                  </div>
                  <a
                    className="btn btn-icon btn-link-secondary avtar"
                    data-bs-toggle="collapse"
                    href="#pc_sidebar_userlink"
                  >
                    <svg className="pc-icon">
                      {/* <use xlinkHref="#custom-sort-outline"></use> */}
                    </svg>
                  </a>
                </div>
                <div
                  className="collapse pc-user-links"
                  id="pc_sidebar_userlink"
                >
                  <div className="pt-3">
                    <a href="#!">
                      <i className="ti ti-user"></i>
                      <span>My Account</span>
                    </a>
                    <a href="#!">
                      <i className="ti ti-settings"></i>
                      <span>Settings</span>
                    </a>
                    <a href="#!">
                      <i className="ti ti-lock"></i>
                      <span>Lock Screen</span>
                    </a>
                    <a href="#!">
                      <i className="ti ti-power"></i>
                      <span>Logout</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <ul className="pc-navbar">
              <li className="pc-item pc-caption">
                <label>Navigation</label>
              </li>
              <li onClick={(e) => barOnClick(e)} className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-status-up"></use>
                    </svg>
                  </span>
                  <span className="pc-mtext">Dashboard</span>
                  <span className="pc-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </span>
                  <span className="pc-badge">2</span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a className="pc-link" href="index.html">
                      Default
                    </a>
                  </li>
                  <li className="pc-item">
                    <a className="pc-link" href="analytics.html">
                      Analytics
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-document"></use>
                    </svg>
                  </span>
                  <span className="pc-mtext">Layouts</span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right"></i>
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a className="pc-link" href="../demo/layout-vertical.html">
                      Vertical
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../demo/layout-horizontal.html"
                    >
                      Horizontal
                    </a>
                  </li>
                  <li className="pc-item">
                    <a className="pc-link" href="../demo/layout-compact.html">
                      Compact
                    </a>
                  </li>
                  <li className="pc-item">
                    <a className="pc-link" href="../demo/layout-tab.html">
                      Tab
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pc-item pc-caption">
                <label>Widget</label>
                <svg className="pc-icon">
                  <use xlinkHref="#custom-presentation-chart"></use>
                </svg>
              </li>
              <li className="pc-item">
                <Link href="/programs" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <path
                        d="M16.42 7.95012C18.86 10.3901 18.86 14.3501 16.42 16.7901C13.98 19.2301 10.02 19.2301 7.58 16.7901C5.14 14.3501 5.14 10.3901 7.58 7.95012C10.02 5.51012 13.98 5.51012 16.42 7.95012Z"
                        fill="currentcolor"
                      />
                      <path
                        opacity="0.4"
                        d="M8.24906 22.3899C8.15906 22.3899 8.05906 22.3699 7.96906 22.3399C5.71906 21.4399 3.89905 19.8499 2.67905 17.7499C1.49905 15.6999 1.02905 13.3799 1.33905 11.0199C1.38905 10.6099 1.77905 10.3199 2.17905 10.3699C2.58905 10.4199 2.87904 10.7999 2.82904 11.2099C2.56904 13.2299 2.96907 15.2299 3.97907 16.9899C5.01907 18.7899 6.58905 20.1599 8.51905 20.9299C8.89905 21.0899 9.08906 21.5198 8.93906 21.9098C8.82906 22.2098 8.53906 22.3899 8.24906 22.3899Z"
                        fill="currentcolor"
                      />
                      <path
                        opacity="0.4"
                        d="M5.84961 5.22986C5.62961 5.22986 5.40961 5.12988 5.25961 4.93988C4.99961 4.60988 5.05962 4.13989 5.38962 3.88989C7.29962 2.39989 9.57961 1.60986 11.9996 1.60986C14.3596 1.60986 16.6096 2.36988 18.4996 3.80988C18.8296 4.05988 18.8896 4.52986 18.6396 4.85986C18.3896 5.18986 17.9196 5.24988 17.5896 4.99988C15.9696 3.75988 14.0396 3.10986 11.9996 3.10986C9.91961 3.10986 7.9496 3.78989 6.3096 5.06989C6.1696 5.17989 6.00961 5.22986 5.84961 5.22986Z"
                        fill="currentcolor"
                      />
                      <path
                        opacity="0.4"
                        d="M15.7507 22.3901C15.4507 22.3901 15.1707 22.2101 15.0507 21.9201C14.9007 21.5401 15.0807 21.1001 15.4707 20.9401C17.4007 20.1601 18.9707 18.8001 20.0107 17.0001C21.0307 15.2401 21.4307 13.2401 21.1607 11.2201C21.1107 10.8101 21.4007 10.4301 21.8107 10.3801C22.2107 10.3301 22.6007 10.6201 22.6507 11.0301C22.9507 13.3801 22.4907 15.7101 21.3107 17.7601C20.1007 19.8601 18.2707 21.4401 16.0207 22.3501C15.9407 22.3701 15.8507 22.3901 15.7507 22.3901Z"
                        fill="currentcolor"
                      />
                    </svg>
                  </span>
                  <span className="pc-mtext">Programs</span>
                </Link>
              </li>
              <li className="pc-item">
                <Link href="/gurus" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <path
                        opacity="0.4"
                        d="M22 7.81V16.19C22 19 20.71 20.93 18.44 21.66C17.78 21.89 17.02 22 16.19 22H7.81C6.98 22 6.22 21.89 5.56 21.66C3.29 20.93 2 19 2 16.19V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M18.4406 21.66C17.7806 21.89 17.0206 22 16.1906 22H7.81055C6.98055 22 6.22055 21.89 5.56055 21.66C5.91055 19.02 8.67055 16.97 12.0005 16.97C15.3305 16.97 18.0906 19.02 18.4406 21.66Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M15.5799 11.58C15.5799 13.56 13.9799 15.17 11.9999 15.17C10.0199 15.17 8.41992 13.56 8.41992 11.58C8.41992 9.60002 10.0199 8 11.9999 8C13.9799 8 15.5799 9.60002 15.5799 11.58Z"
                        fill="currentcolor"
                      />
                    </svg>
                  </span>
                  <span className="pc-mtext">gurus</span>
                </Link>
              </li>
              <li className="pc-item">
                <Link href="/pillars" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <path
                        opacity="0.4"
                        d="M22 7.81V16.19C22 19 20.71 20.93 18.44 21.66C17.78 21.89 17.02 22 16.19 22H7.81C6.98 22 6.22 21.89 5.56 21.66C3.29 20.93 2 19 2 16.19V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M18.4406 21.66C17.7806 21.89 17.0206 22 16.1906 22H7.81055C6.98055 22 6.22055 21.89 5.56055 21.66C5.91055 19.02 8.67055 16.97 12.0005 16.97C15.3305 16.97 18.0906 19.02 18.4406 21.66Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M15.5799 11.58C15.5799 13.56 13.9799 15.17 11.9999 15.17C10.0199 15.17 8.41992 13.56 8.41992 11.58C8.41992 9.60002 10.0199 8 11.9999 8C13.9799 8 15.5799 9.60002 15.5799 11.58Z"
                        fill="currentcolor"
                      />
                    </svg>
                  </span>
                  <span className="pc-mtext">Pillars</span>
                </Link>
              </li>
              <li className="pc-item">
                <a href="../widget/w_data.html" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-fatrows"></use>
                    </svg>
                  </span>
                  <span className="pc-mtext">Data</span>
                </a>
              </li>
              <li className="pc-item">
                <a href="../widget/w_chart.html" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-presentation-chart"></use>
                    </svg>
                  </span>
                  <span className="pc-mtext">Chart</span>
                </a>
              </li>
              <li className="pc-item pc-caption">
                <label>UI Components</label>
                <svg className="pc-icon">
                  <use xlinkHref="#custom-box-1"></use>
                </svg>
              </li>
              <li className="pc-item">
                <a
                  href="../elements/bc_alert.html"
                  className="pc-link"
                  target="_blank"
                >
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-box-1"></use>
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext">Components</span>
                </a>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-mouse-circle"></use>
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext">Icons</span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right"></i>
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a className="pc-link" href="../elements/icon-feather.html">
                      Feather
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../elements/icon-fontawesome.html"
                    >
                      Font Awesome 5
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../elements/icon-material.html"
                    >
                      Material
                    </a>
                  </li>
                  <li className="pc-item">
                    <a className="pc-link" href="../elements/icon-tabler.html">
                      Tabler
                    </a>
                  </li>
                  <li className="pc-item">
                    <a className="pc-link" href="../elements/icon-custom.html">
                      Custom
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pc-item pc-caption">
                <label>Forms</label>
                <svg className="pc-icon">
                  <use xlinkHref="#custom-element-plus"></use>
                </svg>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-element-plus"></use>
                    </svg>
                  </span>
                  <span className="pc-mtext">Forms Elements</span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right"></i>
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a className="pc-link" href="../forms/form_elements.html">
                      Form Basic
                    </a>
                  </li>
                  <li className="pc-item">
                    <a className="pc-link" href="../forms/form_floating.html">
                      Form Floating
                    </a>
                  </li>
                  <li className="pc-item">
                    <a className="pc-link" href="../forms/form2_basic.html">
                      Form Options
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../forms/form2_input_group.html"
                    >
                      Input Groups
                    </a>
                  </li>
                  <li className="pc-item">
                    <a className="pc-link" href="../forms/form2_checkbox.html">
                      Checkbox
                    </a>
                  </li>
                  <li className="pc-item">
                    <a className="pc-link" href="../forms/form2_radio.html">
                      Radio
                    </a>
                  </li>
                  <li className="pc-item">
                    <a className="pc-link" href="../forms/form2_switch.html">
                      Switch
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../forms/form2_megaoption.html"
                    >
                      Mega option
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-cpu-charge"></use>
                    </svg>
                  </span>
                  <span className="pc-mtext">Forms Plugins</span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right"></i>
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item pc-hasmenu">
                    <a className="pc-link" href="#">
                      Date
                      <span className="pc-arrow">
                        <i data-feather="chevron-right"></i>
                      </span>
                    </a>
                    <ul className="pc-submenu">
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          href="../forms/form2_datepicker.html"
                        >
                          Datepicker
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          href="../forms/form2_daterangepicker.html"
                        >
                          Date Range Picker
                        </a>{" "}
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          href="../forms/form2_timepicker.html"
                        >
                          Timepicker
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="pc-item pc-hasmenu">
                    <a className="pc-link" href="#">
                      Select
                      <span className="pc-arrow">
                        <i data-feather="chevron-right"></i>
                      </span>
                    </a>
                    <ul className="pc-submenu">
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          href="../forms/form2_choices.html"
                        >
                          Choices js
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="pc-item">
                    <a className="pc-link" href="../forms/form2_recaptcha.html">
                      Google reCaptcha
                    </a>
                  </li>
                  <li className="pc-item">
                    <a className="pc-link" href="../forms/form2_inputmask.html">
                      Input Masks
                    </a>
                  </li>
                  <li className="pc-item">
                    <a className="pc-link" href="../forms/form2_clipboard.html">
                      Clipboard
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../forms/form2_nouislider.html"
                    >
                      Nouislider
                    </a>
                  </li>
                  <li className="pc-item">
                    <a className="pc-link" href="../forms/form2_switchjs.html">
                      Bootstrap Switch
                    </a>
                  </li>
                  <li className="pc-item">
                    <a className="pc-link" href="../forms/form2_typeahead.html">
                      Typeahead
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-text-block"></use>
                    </svg>
                  </span>
                  <span className="pc-mtext">Text Editors</span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right"></i>
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a className="pc-link" href="../forms/form2_tinymce.html">
                      Tinymce
                    </a>
                  </li>
                  <li className="pc-item">
                    <a className="pc-link" href="../forms/form2_quill.html">
                      Quill
                    </a>
                  </li>
                  <li className="pc-item pc-hasmenu">
                    <a className="pc-link" href="#">
                      CK editor
                      <span className="pc-arrow">
                        <i data-feather="chevron-right"></i>
                      </span>
                    </a>
                    <ul className="pc-submenu">
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          href="../forms/editor-classic.html"
                        >
                          classic
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          href="../forms/editor-document.html"
                        >
                          Document
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          href="../forms/editor-inline.html"
                        >
                          Inline
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          href="../forms/editor-balloon.html"
                        >
                          Balloon
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="pc-item">
                    <a className="pc-link" href="../forms/form2_markdown.html">
                      Markdown
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-row-vertical"></use>
                    </svg>
                  </span>
                  <span className="pc-mtext">Form Layouts</span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right"></i>
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../forms/form2_lay-default.html"
                    >
                      Layouts
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../forms/form2_lay-multicolumn.html"
                    >
                      Multicolumn
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../forms/form2_lay-actionbars.html"
                    >
                      Actionbars
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../forms/form2_lay-stickyactionbars.html"
                    >
                      Sticky Action bars
                    </a>{" "}
                  </li>
                </ul>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-document-upload"></use>
                    </svg>
                  </span>
                  <span className="pc-mtext">File upload</span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right"></i>
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a className="pc-link" href="../forms/file-upload.html">
                      Dropzone
                    </a>
                  </li>
                  <li className="pc-item">
                    <a className="pc-link" href="../forms/form2_flu-uppy.html">
                      Uppy
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pc-item">
                <a href="../forms/form-validation.html" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-password-check"></use>
                    </svg>
                  </span>
                  <span className="pc-mtext">Form Validation</span>
                </a>
              </li>
              <li className="pc-item">
                <a href="../forms/image_crop.html" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-crop"></use>
                    </svg>
                  </span>
                  <span className="pc-mtext">Image cropper</span>
                </a>
              </li>
              <li className="pc-item pc-caption">
                <label>table</label>
                <svg className="pc-icon">
                  <use xlinkHref="#custom-text-align-justify-center"></use>
                </svg>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-text-align-justify-center"></use>
                    </svg>
                  </span>
                  <span className="pc-mtext">Bootstrap Table</span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right"></i>
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a className="pc-link" href="../table/tbl_bootstrap.html">
                      Basic table
                    </a>
                  </li>
                  <li className="pc-item">
                    <a className="pc-link" href="../table/tbl_sizing.html">
                      Sizing table
                    </a>
                  </li>
                  <li className="pc-item">
                    <a className="pc-link" href="../table/tbl_border.html">
                      Border table
                    </a>
                  </li>
                  <li className="pc-item">
                    <a className="pc-link" href="../table/tbl_styling.html">
                      Styling table
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-keyboard"></use>
                    </svg>
                  </span>
                  <span className="pc-mtext">Vanilla Table</span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right"></i>
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a className="pc-link" href="../table/tbl_dt-simple.html">
                      Basic initialization
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/tbl_dt-dynamic-import.html"
                    >
                      Dynamic Import
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/tbl_dt-render-column-cells.html"
                    >
                      Render Column Cells
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/tbl_dt-column-manipulation.html"
                    >
                      Column Manipulation
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/tbl_dt-datetime-sorting.html"
                    >
                      Datetime Sorting
                    </a>
                  </li>
                  <li className="pc-item">
                    <a className="pc-link" href="../table/tbl_dt-methods.html">
                      Methods
                    </a>
                  </li>
                  <li className="pc-item">
                    <a className="pc-link" href="../table/tbl_dt-add-rows.html">
                      Add Rows
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/tbl_dt-fetch-api.html"
                    >
                      Fetch API
                    </a>
                  </li>
                  <li className="pc-item">
                    <a className="pc-link" href="../table/tbl_dt-filters.html">
                      Filters
                    </a>
                  </li>
                  <li className="pc-item">
                    <a className="pc-link" href="../table/tbl_dt-export.html">
                      Export
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-graph"></use>
                    </svg>
                  </span>
                  <span className="pc-mtext">Data table</span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right"></i>
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a className="pc-link" href="../table/dt_advance.html">
                      Advance initialization
                    </a>
                  </li>
                  <li className="pc-item">
                    <a className="pc-link" href="../table/dt_styling.html">
                      Styling
                    </a>
                  </li>
                  <li className="pc-item">
                    <a className="pc-link" href="../table/dt_api.html">
                      API
                    </a>
                  </li>
                  <li className="pc-item">
                    <a className="pc-link" href="../table/dt_plugin.html">
                      Plug-in
                    </a>
                  </li>
                  <li className="pc-item">
                    <a className="pc-link" href="../table/dt_sources.html">
                      Data sources
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-add-item"></use>
                    </svg>
                  </span>
                  <span className="pc-mtext">DT extensions</span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right"></i>
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a className="pc-link" href="../table/dt_ext_autofill.html">
                      Autofill
                    </a>
                  </li>
                  <li className="pc-item pc-hasmenu">
                    <a href="#!" className="pc-link">
                      Button
                      <span className="pc-arrow">
                        <i data-feather="chevron-right"></i>
                      </span>
                    </a>
                    <ul className="pc-submenu">
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          href="../table/dt_ext_basic_buttons.html"
                        >
                          Basic button
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          href="../table/dt_ext_export_buttons.html"
                        >
                          Data export
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/dt_ext_col_reorder.html"
                    >
                      Col reorder
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/dt_ext_fixed_columns.html"
                    >
                      Fixed columns
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/dt_ext_fixed_header.html"
                    >
                      Fixed header
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/dt_ext_key_table.html"
                    >
                      Key table
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/dt_ext_responsive.html"
                    >
                      Responsive
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/dt_ext_row_reorder.html"
                    >
                      Row reorder
                    </a>
                  </li>
                  <li className="pc-item">
                    <a className="pc-link" href="../table/dt_ext_scroller.html">
                      Scroller
                    </a>
                  </li>
                  <li className="pc-item">
                    <a className="pc-link" href="../table/dt_ext_select.html">
                      Select table
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pc-item pc-caption">
                <label>Charts</label>
                <svg className="pc-icon">
                  <use xlinkHref="#custom-graph"></use>
                </svg>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-graph"></use>
                    </svg>
                  </span>
                  <span className="pc-mtext">Charts</span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right"></i>
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a className="pc-link" href="../chart/chart-apex.html">
                      Apex Chart
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pc-item pc-caption">
                <label>Application</label>
                <svg className="pc-icon">
                  <use xlinkHref="#custom-shopping-bag"></use>
                </svg>
              </li>
              <li className="pc-item">
                <a href="../application/calendar.html" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-calendar-1"></use>
                    </svg>
                  </span>
                  <span className="pc-mtext">Calendar</span>
                </a>
              </li>
              <li className="pc-item">
                <a href="../application/chat.html" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-message-2"></use>
                    </svg>
                  </span>
                  <span className="pc-mtext">Chat</span>
                </a>
              </li>
              <li className="pc-item">
                <a
                  href="../application/cust_customer_list.html"
                  className="pc-link"
                >
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-notification-status"></use>
                    </svg>
                  </span>
                  <span className="pc-mtext">Customer</span>
                </a>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-shopping-bag"></use>
                    </svg>
                  </span>
                  <span className="pc-mtext">E-commerce</span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right"></i>
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../application/ecom_product.html"
                    >
                      Product
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../application/ecom_product-details.html"
                    >
                      Product details
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../application/ecom_product-list.html"
                    >
                      Product List
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../application/ecom_product-add.html"
                    >
                      Add New Product
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../application/ecom_checkout.html"
                    >
                      Checkout
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pc-item">
                <a href="../application/file-manager.html" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-document-filter"></use>
                    </svg>
                  </span>
                  <span className="pc-mtext">File manager</span>
                </a>
              </li>
              <li className="pc-item">
                <a href="../application/mail.html" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-direct-inbox"></use>
                    </svg>
                  </span>
                  <span className="pc-mtext">Mail</span>
                </a>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-user-square"></use>
                    </svg>
                  </span>
                  <span className="pc-mtext">Users</span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right"></i>
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../application/account-profile.html"
                    >
                      Account Profile
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../application/social-media.html"
                    >
                      Social media
                    </a>
                  </li>
                </ul>
              </li>

              <li className="pc-item pc-caption">
                <label>Pages</label>
                <svg className="pc-icon">
                  <use xlinkHref="#custom-flag"></use>
                </svg>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-shield"></use>
                    </svg>
                  </span>
                  <span className="pc-mtext">Authentication</span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right"></i>
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item pc-hasmenu">
                    <a href="#!" className="pc-link">
                      Authentication 1
                      <span className="pc-arrow">
                        <i data-feather="chevron-right"></i>
                      </span>
                    </a>
                    <ul className="pc-submenu">
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          target="_blank"
                          href="../pages/login-v1.html"
                        >
                          Login
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          target="_blank"
                          href="../pages/register-v1.html"
                        >
                          Register
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          target="_blank"
                          href="../pages/forgot-password-v1.html"
                        >
                          Forgot Password
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          target="_blank"
                          href="../pages/check-mail-v1.html"
                        >
                          check mail
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          target="_blank"
                          href="../pages/reset-password-v1.html"
                        >
                          reset password
                        </a>{" "}
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          target="_blank"
                          href="../pages/code-verification-v1.html"
                        >
                          code verification
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="pc-item pc-hasmenu">
                    <a href="#!" className="pc-link">
                      Authentication 2
                      <span className="pc-arrow">
                        <i data-feather="chevron-right"></i>
                      </span>
                    </a>
                    <ul className="pc-submenu">
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          target="_blank"
                          href="../pages/login-v2.html"
                        >
                          Login
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          target="_blank"
                          href="../pages/register-v2.html"
                        >
                          Register
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          target="_blank"
                          href="../pages/forgot-password-v2.html"
                        >
                          Forgot password
                        </a>{" "}
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          target="_blank"
                          href="../pages/check-mail-v2.html"
                        >
                          check mail
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          target="_blank"
                          href="../pages/reset-password-v2.html"
                        >
                          reset password
                        </a>{" "}
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          target="_blank"
                          href="../pages/code-verification-v2.html"
                        >
                          code verification
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="pc-item">
                    <a
                      href="../pages/login-v3.html"
                      target="_blank"
                      className="pc-link"
                    >
                      Authentication 3
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-flag"></use>
                    </svg>
                  </span>
                  <span className="pc-mtext">Maintenance</span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right"></i>
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      target="_blank"
                      href="../pages/error-404.html"
                    >
                      Error 404
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      target="_blank"
                      href="../pages/error-500.html"
                    >
                      Error 500
                    </a>
                  </li>
                  <li className="pc-item pc-hasmenu">
                    <a href="#!" className="pc-link">
                      Under construction
                      <span className="pc-arrow">
                        <i data-feather="chevron-right"></i>
                      </span>
                    </a>
                    <ul className="pc-submenu">
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          target="_blank"
                          href="../pages/under-construction-v1.html"
                        >
                          Under Construction 1
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          target="_blank"
                          href="../pages/under-construction-v2.html"
                        >
                          Under Construction 2
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="pc-item pc-hasmenu">
                    <a href="#!" className="pc-link">
                      Coming soon
                      <span className="pc-arrow">
                        <i data-feather="chevron-right"></i>
                      </span>
                    </a>
                    <ul className="pc-submenu">
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          target="_blank"
                          href="../pages/coming-soon-v1.html"
                        >
                          Coming soon 1
                        </a>{" "}
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          target="_blank"
                          href="../pages/coming-soon-v2.html"
                        >
                          Coming soon 2
                        </a>{" "}
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="pc-item">
                <a
                  href="../pages/contact-us.html"
                  className="pc-link"
                  target="_blank"
                >
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-24-support"></use>
                    </svg>
                  </span>
                  <span className="pc-mtext">Contact us</span>
                </a>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-dollar-square"></use>
                    </svg>
                  </span>
                  <span className="pc-mtext">Price</span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right"></i>
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a className="pc-link" href="../pages/price-v1.html">
                      Price 1
                    </a>
                  </li>
                  <li className="pc-item">
                    <a className="pc-link" href="../pages/price-v2.html">
                      Price 2
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pc-item">
                <a
                  href="../pages/landing.html"
                  className="pc-link"
                  target="_blank"
                >
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-airplane"></use>
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext">Landing</span>
                </a>
              </li>

              <li className="pc-item pc-caption">
                <label>Other</label>
                <svg className="pc-icon">
                  <use xlinkHref="#custom-notification-status"></use>
                </svg>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-level"></use>
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext">Menu levels</span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right"></i>
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a className="pc-link" href="#!">
                      Level 2.1
                    </a>
                  </li>
                  <li className="pc-item pc-hasmenu">
                    <a href="#!" className="pc-link">
                      Level 2.2
                      <span className="pc-arrow">
                        <i data-feather="chevron-right"></i>
                      </span>
                    </a>
                    <ul className="pc-submenu">
                      <li className="pc-item">
                        <a className="pc-link" href="#!">
                          Level 3.1
                        </a>
                      </li>
                      <li className="pc-item">
                        <a className="pc-link" href="#!">
                          Level 3.2
                        </a>
                      </li>
                      <li className="pc-item pc-hasmenu">
                        <a href="#!" className="pc-link">
                          Level 3.3
                          <span className="pc-arrow">
                            <i data-feather="chevron-right"></i>
                          </span>
                        </a>
                        <ul className="pc-submenu">
                          <li className="pc-item">
                            <a className="pc-link" href="#!">
                              Level 4.1
                            </a>
                          </li>
                          <li className="pc-item">
                            <a className="pc-link" href="#!">
                              Level 4.2
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="pc-item pc-hasmenu">
                    <a href="#!" className="pc-link">
                      Level 2.3
                      <span className="pc-arrow">
                        <i data-feather="chevron-right"></i>
                      </span>
                    </a>
                    <ul className="pc-submenu">
                      <li className="pc-item">
                        <a className="pc-link" href="#!">
                          Level 3.1
                        </a>
                      </li>
                      <li className="pc-item">
                        <a className="pc-link" href="#!">
                          Level 3.2
                        </a>
                      </li>
                      <li className="pc-item pc-hasmenu">
                        <a href="#!" className="pc-link">
                          Level 3.3
                          <span className="pc-arrow">
                            <i data-feather="chevron-right"></i>
                          </span>
                        </a>
                        <ul className="pc-submenu">
                          <li className="pc-item">
                            <a className="pc-link" href="#!">
                              Level 4.1
                            </a>
                          </li>
                          <li className="pc-item">
                            <a className="pc-link" href="#!">
                              Level 4.2
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="pc-item">
                <a href="../other/sample-page.html" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-notification-status"></use>
                    </svg>
                  </span>
                  <span className="pc-mtext">Sample page</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
