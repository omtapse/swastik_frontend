"use client"
import { routes } from "@/utills/routes"
import { notification } from "antd"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Home(){
    const router = useRouter()
    const [email,setEmail] = useState('')

    const validateEmail = (email) =>{
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const handleResetPassword =async() =>{
        if(validateEmail(email)){
            try {
                const res = await routes.APIS.GENERATE_RESET_PASSWORD_LINK({email})
                notification.success({message:res.message})
                router.push('/login')
            } catch (error) {
                notification.error({message:error.message})
            }

        }else{
            notification.warning({message:"Please enter valid email"})
        }
    }

    return (
        <>
        <div class="auth-main">
    <div class="auth-wrapper v2">
      <div class="auth-sidecontent">
        <img src="../assets/images/authentication/img-auth-sideimg.jpg" alt="images"
          class="img-fluid img-auth-side" />
      </div>
      <div class="auth-form">
        <div class="card my-5">
          <div class="card-body">
            <a href="#"><img src="../assets/images/logo-dark.svg" class="mb-4 img-fluid" alt="img" /></a>
            <div class="d-flex justify-content-between align-items-end mb-4">
              <h3 class="mb-0"><b>Forgot Password</b></h3>
              <p onClick={()=>router.push('/login')} style={{cursor:'pointer'}} class="link-primary" >Back to Login</p>
            </div>
            <div class="form-group mb-3">
              <label class="form-label">Email Address</label>
              <input onChange={e=>setEmail(e.target.value)} type="email" class="form-control" id="floatingInput" placeholder="Email Address" />
            </div>
            <p class="mt-4 text-sm text-muted">Do not forgot to check SPAM box.</p>
            <div class="d-grid mt-3">
              <button type="button" onClick={handleResetPassword} class="btn btn-primary">Send Password Reset Email</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
    )
}