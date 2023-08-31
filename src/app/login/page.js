'use client'
import { routes } from "@/utills/routes";
import { useState } from "react";
import Localstorage from "@/utills/storage/Localstorage";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter()
  const [data , setData] = useState({
    email:"",
    password:""
  })


  const handleLogin =async () =>{
    console.log("login",data)
    try{
      let message = await routes.APIS.ADMIN_LOGIN(data)
      if(message.message ==='Login Successfull'){
        Localstorage.JWT_TOKEN.set(message.token)
        Localstorage.ROLE.set(message.role)
        console.log("here",message)
        router.push('/')
      }
    }catch(err){
      console.log("err",err)
    }
  }

  const googleAuth = () => {
		window.open(
			`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google/callback`,
			"_self"
		);
	};


  return (
    <>
      <div className="auth-main">
        <div className="auth-wrapper v2">
          <div className="auth-sidecontent">
            <img
              src="../assets/images/authentication/img-auth-sideimg.jpg"
              alt="images"
              className="img-fluid img-auth-side"
            />
          </div>
          <div className="auth-form">
            <div className="card my-5">
              <div className="card-body">
                <div className="text-center">
                  <a href="#">
                    <img src="../assets/images/logo-dark.svg" alt="img" />
                  </a>
                  <div className="d-grid my-3">
                    <button
                      type="button"
                      className="btn mt-2 btn-light-primary bg-light text-muted"
                    >
                      <img
                        src="../assets/images/authentication/facebook.svg"
                        alt="img"
                      />{" "}
                      <span>Sign In with Facebook</span>
                    </button>
                    <button
                      type="button"
                      className="btn mt-2 btn-light-primary bg-light text-muted"
                    >
                      <img
                        src="../assets/images/authentication/twitter.svg"
                        alt="img"
                      />{" "}
                      <span> Sign In with Twitter</span>
                    </button>
                    <button
                      type="button"
                      className="btn mt-2 btn-light-primary bg-light text-muted"
                      onClick={googleAuth}
                    >
                      <img
                        src="../assets/images/authentication/google.svg"
                        alt="img"
                      />{" "}
                      <span> Sign In with Google</span>
                    </button>
                  </div>
                </div>
                <div className="saprator my-3">
                  <span>OR</span>
                </div>
                <h4 className="text-center f-w-500 mb-3">Login with your email</h4>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Email Address"
                    onChange={(e)=>setData({...data,email:e.target.value})}
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingInput1"
                    placeholder="Password"
                    onChange={(e)=>setData({...data,password:e.target.value})}
                  />
                </div>
                <div className="d-flex mt-1 justify-content-between align-items-center">
                  {/* <div className="form-check">
                    <input
                      className="form-check-input input-primary"
                      type="checkbox"
                      id="customCheckc1"
                      checked=""
                    />
                    <label
                      className="form-check-label text-muted"
                      for="customCheckc1"
                    >
                      Remember me?
                    </label>
                  </div> */}
                  <h6 className="text-secondary f-w-400 mb-0 link-primary" style={{cursor:'pointer'}} onClick={e=>router.push('/forgetPassword')}>Forgot Password?</h6>
                </div>
                <div className="d-grid mt-4">
                  <button onClick={handleLogin} type="button" className="btn btn-primary">
                    Login
                  </button>
                </div>
                <div className="d-flex justify-content-between align-items-end mt-4">
                  <h6 className="f-w-500 mb-0">Don't have an Account?</h6>
                  <a href="#" className="link-primary">
                    Create Account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
