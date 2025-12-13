import {userInstance} from "../Axios/axiosInstance"

  export const userSignup=(values)=>{
    console.log(values,"######");
    return userInstance.post("/signup",{...values});
  }

   export const userLogin=(values)=>{
    console.log(values,"######");
    return userInstance.post("/login",{...values});
  }