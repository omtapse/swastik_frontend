"use client";
import Image from "next/image";
import { Html, Head, Main, NextScript } from "next/document";
import "@/styles/Template Styles/css/fonts/fontawesome.css";
import { useEffect,useState } from "react";
import Localstorage from "@/utills/storage/Localstorage";
// import { useRouter } from "next/navigation";
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
import { useParams, useRouter } from "next/navigation";
import Select from 'react-select'
import { Formik } from "formik";


export default function Home() {

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [fileList, setFileList] = useState([]);
  const [imageUrl, setImageUrl] = useState();
  const [pillar,setPillar] =useState([])
  const [vihar,setVihar] =useState([]);
  const [data,setData] = useState({})

  const fetchPillar = async() =>{
    const res =await routes.APIS.GET_PILLAR()
    console.log(">>>>>>>>>>>>>>>>>>>>>",res)
    if(res.message==="Pillars fetched successfully"){
      let data = res.pillars.map(pillar=>{ return {label: pillar.pillarTitle, value:pillar._id}})
      console.log("data===>",data)
      setPillar(data)
    }
  }

  const fetchVihar =async()=>{
    const res = await routes.APIS.GET_VIHAR();
    console.log("///////////////",res);
    if(res){
      let data = res.vihars.map(vihar=>{return{label:vihar.viharName,value:vihar._id}})
      console.log(">>>>>>>>",data);
      setVihar(data)
    }
    
  }

//   const [data, setData] = useState({
//     programImages:'',
//     programName: '',
//     programPrice: '',
//     programDuration: '',
//     programStatus: '',
//     programDate: ''
// });

const submitHandler = async (e) => {
    try {
        const { pName, pillarname, gurus, status, selectdate } = data;

        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${params.id}`, {
            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                programImages:'',programName: '', programPrice: '', programDuration: '', programStatus: '', programDate: ''
            })
        });
        console.log(params.id);

        console.log(res)
        if (res.status === 200) {
            console.log("Program edited successfully");
            navigate("/ViewProgram")
        } else {
            console.log("Failed to edit program");
        }
    } catch (error) {
        console.log("An error occurred:", error);
    }
}

const getChange = (e, name) => {
    if (name) {
        console.log(e, name)
        setData((prev) => ({
            ...prev,
            [name]: e
        }))
    } else {

        setData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

}




const getProgramById = async () => {
    try {

        const response = await fetch(`http://localhost:5000/getProgramById/${params.id}`, {
            method: "GET",

        });
        let data = await response.json();
        setData(data);

    } catch (error) {
        console.log("Error while fetching programs", error);
    }

}
// useEffect(() => {
    
// }, [])
useEffect(() => {
    getProgramById();
    console.log(data)
}, [data])




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
  const fetchData = async () => {
    let data = await routes.APIS.GET_PROGRAM_BY_ID(params.id)
    data = data.program
    setData(data)
    setImageUrl(data.image)
    // setFileList(data.programImage.map((item)=>({url:item})))
  }

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


  

//  const menuProps = {
//     items,
//     onClick: handleMenuClick,
//   };
  

  useEffect(()=>{
    console.log("fileList", params.id);
    if (params.id) {
      fetchData()
  }
},[])

  // useEffect(() => {
  //   document.addEventListener('DOMContentLoaded', function () {
  //     var genericExamples = document.querySelectorAll('[data-trigger]');
  //     for (i = 0; i < genericExamples.length; ++i) {
  //       var element = genericExamples[i];
  //       new Choices(element, {
  //         placeholderValue: 'This is a placeholder set in the config',
  //         searchPlaceholderValue: 'This is a search placeholder'
  //       });
  //     }

  //     var textRemove = new Choices(document.getElementById('choices-text-remove-button'), {
  //       delimiter: ',',
  //       editItems: true,
  //       maxItemCount: 5,
  //       removeItemButton: true
  //     });

  //     var text_Unique_Val = new Choices('#choices-text-unique-values', {
  //       paste: false,
  //       duplicateItemsAllowed: false,
  //       editItems: true
  //     });

  //     var text_i18n = new Choices('#choices-text-i18n', {
  //       paste: false,
  //       duplicateItemsAllowed: false,
  //       editItems: true,
  //       maxItemCount: 5,
  //       addItemText: function (value) {
  //         return 'Appuyez sur Entrée pour ajouter <b>"' + String(value) + '"</b>';
  //       },
  //       maxItemText: function (maxItemCount) {
  //         return String(maxItemCount) + 'valeurs peuvent être ajoutées';
  //       },
  //       uniqueItemText: 'Cette valeur est déjà présente'
  //     });

  //     var textEmailFilter = new Choices('#choices-text-email-filter', {
  //       editItems: true,
  //       addItemFilter: function (value) {
  //         if (!value) {
  //           return false;
  //         }

  //         const regex =
  //           /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //         const expression = new RegExp(regex.source, 'i');
  //         return expression.test(value);
  //       }
  //     }).setValue(['joe@bloggs.com']);

  //     var textDisabled = new Choices('#choices-text-disabled', {
  //       addItems: false,
  //       removeItems: false
  //     }).disable();

  //     var textPrependAppendVal = new Choices('#choices-text-prepend-append-value', {
  //       prependValue: 'item-',
  //       appendValue: '-' + Date.now()
  //     }).removeActiveItems();

  //     var textPresetVal = new Choices('#choices-text-preset-values', {
  //       items: [
  //         'Josh Johnson',
  //         {
  //           value: 'joe@bloggs.co.uk',
  //           label: 'Joe Bloggs',
  //           customProperties: {
  //             description: 'Joe Blogg is such a generic name'
  //           }
  //         }
  //       ]
  //     });

  //     var multipleDefault = new Choices(document.getElementById('choices-multiple-groups'));

  //     var multipleFetch = new Choices('#choices-multiple-remote-fetch', {
  //       placeholder: true,
  //       placeholderValue: 'Pick an Strokes record',
  //       maxItemCount: 5
  //     }).setChoices(function () {
  //       return fetch('https://api.discogs.com/artists/55980/releases?token=QBRmstCkwXEvCjTclCpumbtNwvVkEzGAdELXyRyW')
  //         .then(function (response) {
  //           return response.json();
  //         })
  //         .then(function (data) {
  //           return data.releases.map(function (release) {
  //             return {
  //               value: release.title,
  //               label: release.title
  //             };
  //           });
  //         });
  //     });

  //     var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
  //       removeItemButton: true
  //     });

  //     /* Use label on event */
  //     var choicesSelect = new Choices('#choices-multiple-labels', {
  //       removeItemButton: true,
  //       choices: [
  //         {
  //           value: 'One',
  //           label: 'Label One'
  //         },
  //         {
  //           value: 'Two',
  //           label: 'Label Two',
  //           disabled: true
  //         },
  //         {
  //           value: 'Three',
  //           label: 'Label Three'
  //         }
  //       ]
  //     }).setChoices(
  //       [
  //         {
  //           value: 'Four',
  //           label: 'Label Four',
  //           disabled: true
  //         },
  //         {
  //           value: 'Five',
  //           label: 'Label Five'
  //         },
  //         {
  //           value: 'Six',
  //           label: 'Label Six',
  //           selected: true
  //         }
  //       ],
  //       'value',
  //       'label',
  //       false
  //     );

  //     choicesSelect.passedElement.element.addEventListener('addItem', function (event) {
  //       document.getElementById('message').innerHTML =
  //         '<span class="badge bg-light-primary"> You just added "' + event.detail.label + '"</span>';
  //     });
  //     choicesSelect.passedElement.element.addEventListener('removeItem', function (event) {
  //       document.getElementById('message').innerHTML =
  //         '<span class="badge bg-light-danger"> You just removed "' + event.detail.label + '"</span>';
  //     });

  //     var singleFetch = new Choices('#choices-single-remote-fetch', {
  //       searchPlaceholderValue: 'Search for an Arctic Monkeys record'
  //     })
  //       .setChoices(function () {
  //         return fetch('https://api.discogs.com/artists/391170/releases?token=QBRmstCkwXEvCjTclCpumbtNwvVkEzGAdELXyRyW')
  //           .then(function (response) {
  //             return response.json();
  //           })
  //           .then(function (data) {
  //             return data.releases.map(function (release) {
  //               return {
  //                 label: release.title,
  //                 value: release.title
  //               };
  //             });
  //           });
  //       })
  //       .then(function (instance) {
  //         instance.setChoiceByValue('Fake Tales Of San Francisco');
  //       });

  //     var singleXhrRemove = new Choices('#choices-single-remove-xhr', {
  //       removeItemButton: true,
  //       searchPlaceholderValue: "Search for a Smiths' record"
  //     }).setChoices(function (callback) {
  //       return fetch('https://api.discogs.com/artists/83080/releases?token=QBRmstCkwXEvCjTclCpumbtNwvVkEzGAdELXyRyW')
  //         .then(function (res) {
  //           return res.json();
  //         })
  //         .then(function (data) {
  //           return data.releases.map(function (release) {
  //             return {
  //               label: release.title,
  //               value: release.title
  //             };
  //           });
  //         });
  //     });

  //     var singleNoSearch = new Choices('#choices-single-no-search', {
  //       searchEnabled: false,
  //       removeItemButton: true,
  //       choices: [
  //         {
  //           value: 'One',
  //           label: 'Label One'
  //         },
  //         {
  //           value: 'Two',
  //           label: 'Label Two',
  //           disabled: true
  //         },
  //         {
  //           value: 'Three',
  //           label: 'Label Three'
  //         }
  //       ]
  //     }).setChoices(
  //       [
  //         {
  //           value: 'Four',
  //           label: 'Label Four',
  //           disabled: true
  //         },
  //         {
  //           value: 'Five',
  //           label: 'Label Five'
  //         },
  //         {
  //           value: 'Six',
  //           label: 'Label Six',
  //           selected: true
  //         }
  //       ],
  //       'value',
  //       'label',
  //       false
  //     );

  //     var singlePresetOpts = new Choices('#choices-single-preset-options', {
  //       placeholder: true
  //     }).setChoices(
  //       [
  //         {
  //           label: 'Group one',
  //           id: 1,
  //           disabled: false,
  //           choices: [
  //             {
  //               value: 'Child One',
  //               label: 'Child One',
  //               selected: true
  //             },
  //             {
  //               value: 'Child Two',
  //               label: 'Child Two',
  //               disabled: true
  //             },
  //             {
  //               value: 'Child Three',
  //               label: 'Child Three'
  //             }
  //           ]
  //         },
  //         {
  //           label: 'Group two',
  //           id: 2,
  //           disabled: false,
  //           choices: [
  //             {
  //               value: 'Child Four',
  //               label: 'Child Four',
  //               disabled: true
  //             },
  //             {
  //               value: 'Child Five',
  //               label: 'Child Five'
  //             },
  //             {
  //               value: 'Child Six',
  //               label: 'Child Six'
  //             }
  //           ]
  //         }
  //       ],
  //       'value',
  //       'label'
  //     );

  //     var singleSelectedOpt = new Choices('#choices-single-selected-option', {
  //       searchFields: ['label', 'value', 'customProperties.description'],
  //       choices: [
  //         {
  //           value: 'One',
  //           label: 'Label One',
  //           selected: true
  //         },
  //         {
  //           value: 'Two',
  //           label: 'Label Two',
  //           disabled: true
  //         },
  //         {
  //           value: 'Three',
  //           label: 'Label Three',
  //           customProperties: {
  //             description: 'This option is fantastic'
  //           }
  //         }
  //       ]
  //     }).setChoiceByValue('Two');

  //     var customChoicesPropertiesViaDataAttributes = new Choices('#choices-with-custom-props-via-html', {
  //       searchFields: ['label', 'value', 'customProperties']
  //     });

  //     var singleNoSorting = new Choices('#choices-single-no-sorting', {
  //       shouldSort: false
  //     });

  //     var cities = new Choices(document.getElementById('cities'));
  //     var tubeStations = new Choices(document.getElementById('tube-stations')).disable();

  //     cities.passedElement.element.addEventListener('change', function (e) {
  //       if (e.detail.value === 'London') {
  //         tubeStations.enable();
  //       } else {
  //         tubeStations.disable();
  //       }
  //     });

  //     var customTemplates = new Choices(document.getElementById('choices-single-custom-templates'), {
  //       callbackOnCreateTemplates: function (strToEl) {
  //         var classNames = this.config.classNames;
  //         var itemSelectText = this.config.itemSelectText;
  //         return {
  //           item: function (classNames, data) {
  //             return strToEl(
  //               '\
  //                             <div\
  //                             class="' +
  //               String(classNames.item) +
  //               ' ' +
  //               String(data.highlighted ? classNames.highlightedState : classNames.itemSelectable) +
  //               '"\
  //                             data-item\
  //                             data-id="' +
  //               String(data.id) +
  //               '"\
  //                             data-value="' +
  //               String(data.value) +
  //               '"\
  //                             ' +
  //               String(data.active ? 'aria-selected="true"' : '') +
  //               '\
  //                             ' +
  //               String(data.disabled ? 'aria-disabled="true"' : '') +
  //               '\
  //                             >\
  //                             <span style="margin-right:10px;">🎉</span> ' +
  //               String(data.label) +
  //               '\
  //                             </div>\
  //                             '
  //             );
  //           },
  //           choice: function (classNames, data) {
  //             return strToEl(
  //               '\
  //                             <div\
  //                             class="' +
  //               String(classNames.item) +
  //               ' ' +    
  //               String(classNames.itemChoice) +
  //               ' ' +
  //               String(data.disabled ? classNames.itemDisabled : classNames.itemSelectable) +
  //               '"\
  //                             data-select-text="' +
  //               String(itemSelectText) +
  //               '"\
  //                             data-choice \
  //                             ' +
  //               String(data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable') +
  //               '\
  //                             data-id="' +
  //               String(data.id) +
  //               '"\
  //                             data-value="' +
  //               String(data.value) +
  //               '"\
  //                             ' +
  //               String(data.groupId > 0 ? 'role="treeitem"' : 'role="option"') +
  //               '\
  //                             >\
  //                             <span style="margin-right:10px;">👉🏽</span> ' +
  //               String(data.label) +
  //               '\
  //                             </div>\
  //                             '
  //             );
  //           }
  //         };
  //       }
  //     });

  //     var resetSimple = new Choices(document.getElementById('reset-simple'));

  //     var resetMultiple = new Choices('#reset-multiple', {
  //       removeItemButton: true
  //     });
  //   });

  // }, [])

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
                    <h2 class="mb-0">Update Program</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="row">
            <div class="col-lg-12">
              <div class="card">                
                <div class="card-body">
                {console.log(data)}
                  <Formik
                    initialValues={{
                      programName:data.programName,
                      programDuration: data.programDuration,
                      programStatus: data.programStatus,
                      programDetails: data.programDetails,
                      programPrice: data.programPrice,
                      programImages: data.programImages

                    }}
                    validate={(values) => {
                      console.log("values", values);
                      const errors = {};
                      if (values.programName === "") {
                        errors.programName = "Please Program name";
                      }
                      if (values.programDuration === "") {
                        errors.programDuration = "Please enter duration";
                      }
                      console.log(
                        "values.Testimonials",
                        values.Testimonials=== ""
                      );
                      if (values.programDetails === "") {
                        errors.programDetails = "Please enter program details";
                      }
                      if (values.programPrice === "") {
                        errors.programPrice = "Please enter price";
                      }
                      console.log("errors", errors);
                      return errors;
                    }}
                    onSubmit={async(values, { setSubmitting }) => {
                      console.log("HERE", values);
                      let data = {
                        programName: values.programName,
                        experties: values.experties,
                        testimonials: values.Testimonials,
                        about: values.about,
                        guruImage: imageUrl,
                        programImages: fileList.map((item) => item.url),
                      };
                      const responce = await routes.APIS.UPDATE_GURU(params.id,data)
                      if(responce.message === "Guru updated successfully"){
                        notification.success({
                          message: responce.message,
                        });
                        router.push("/gurus")
                      }
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
                        <label class="form-label">Program Name:</label>
                        <input type="email" class="form-control" placeholder="Enter full name" value={data.programName} onChange={getChange}/>
                        <small class="form-text text-muted">Please enter your full name</small>
                      </div>
                      <div class="col-lg-6">
                        <label class="form-label">Program Duration</label>
                        <input type="number" class="form-control" placeholder="Enter duration in days" value={data.programDuration} onChange={getChange}/>
                        <small class="form-text text-muted">Please Enter Duration </small>
                      </div>
                      <div class="col-lg-6">
                        <label class="form-label">Program Price</label>
                        <input type="number" class="form-control" placeholder="Enter Price in INR" value={data.programPrice} onChange={getChange}/>
                        <small class="form-text text-muted">Please Enter price </small>
                      </div>
                      <div class="form-group row">
                          <div class="col-lg-12">
                            <label class="form-label">About the program</label>
                            <div class="input-group search-form">
                              <Editor placeholder={"Write something..."}/>
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
                          <label class="form-label">Pillar:</label>
                          <Select
                            // defaultValue={[PillarOptions[2], PillarOptions[3]]}
                            isMulti
                            name="colors"
                            options={pillar}
                            className="basic-multi-select"
                            classNamePrefix="select"
                          />
                          {/* <div class="select_gurus">
                          <label class="form-label">Gurus:</label>
                          <Select options={gurus} onChange={(values) => setValues(values,)} />
                          </div> */}
        
                            {/* <Space wrap> 
                              <Dropdown menu={menuProps}>
                                <Button>
                                  <Space>
                                    Select Gurus
                                    <DownOutlined />
                                  </Space>
                                </Button>
                              </Dropdown>
                            </Space> */}
                          </div>
                        </div>    
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group row">
                        <label class="form-label">Vihar:</label>
                        <Select
                          // defaultValue={[ViharOptions[2], ViharOptions[3]]}
                          isMulti
                          name="colors"
                          options={vihar}
                          className="basic-multi-select"
                          classNamePrefix="select"
                        />
                        </div> 
                      </div>
                      <div class="date">
                        <Space direction="vertical" size={12}>
                          <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
                        </Space>
                      </div>
                    </div>
                   
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
