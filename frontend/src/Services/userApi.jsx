import {userInstance} from "../Axios/axiosInstance"

// export const userLogin = (values) => {
//     console.log(values,"!!!!!")
//     return userInstance.post("/login", { ...values });
//   };


  export const userSignup=(values)=>{
    console.log(values,"######");
    return userInstance.post("/Signup",{...values});
  }