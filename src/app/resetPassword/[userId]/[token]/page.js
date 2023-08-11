"use client";
import { routes } from "@/utills/routes";
import { notification } from "antd";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const params = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validatePassword = () => {
    if (password !== confirmPassword) {
      notification.error({
        message: "Password does not match",
      });
      return false;
    }
    else if(password.length < 8){
      notification.error({
        message: "Password must be 8 characters long",
      });
      return false;
    }
    return true;
  }

  const handleResetPassword = async () => {
    if(!validatePassword()) return;
    try {
      console.log(params)
      let message = await routes.APIS.RESET_PASSWORD({
        password,
        token: params.token,
        userId: params.userId,
      });
      if (message.message === "Password changed successfully") {
        notification.success({
          message: "Password Updated Successfully",
        });
        router.push("/login");
      }
    }catch (error) {
      console.log("err", error);
      notification.error({
        message: "Link is expired or invalid",
      });
    }
  }

  return (
    <>
      <div class="auth-main">
        <div class="auth-wrapper v2">
          <div class="auth-sidecontent">
            <img
              src="/assets/images/authentication/img-auth-sideimg.jpg"
              alt="images"
              class="img-fluid img-auth-side"
            />
          </div>
          <div class="auth-form">
            <div class="card my-5">
              <div class="card-body">
                <a href="#">
                  <img
                    src="/assets/images/logo-dark.svg"
                    class="mb-4 img-fluid"
                    alt="img"
                  />
                </a>
                <div class="mb-4">
                  <h3 class="mb-2">
                    <b>Reset Password</b>
                  </h3>
                  <p class="text-muted">Please choose your new password</p>
                </div>
                <div class="form-group mb-3">
                  <label class="form-label">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div class="form-group mb-3">
                  <label class="form-label">Confirm Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="floatingInput1"
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div class="d-grid mt-4">
                  <button type="button" onClick={handleResetPassword} class="btn btn-primary">
                    Reset Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
