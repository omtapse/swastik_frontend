import { notification } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
    const admin = useSelector((state) => state.adminReducer);
    useEffect(()=>{
    },[admin])
    if (!admin.adminEmail) {
    // user is not authenticated
    notification.error({
        message : "Session Expired" ,
        placement : "top"
    })
    return <Navigate to="/auth/login" />;
  }
  console.log("HERE")
  return children;
};
