import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { userSignup } from "../Services/userApi";
import { use } from "react";

export default function Register() {
  const navigate = useNavigate();

  // Initial Values
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  // Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // onSubmit
  const onSubmit = (values) => {
    console.log("Register Values:", values);
    userSignup(values).then((res) => {
      console.log(res.data);
      navigate("/"); // redirect to login
    }
    ).catch((err)=>{
      console.log(err);
    }
    
    );
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

        <form onSubmit={formik.handleSubmit}>
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full mb-1 px-4 py-2 border rounded-lg"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-500 text-sm mb-2 ml-4">{formik.errors.name}</p>
          )}

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full mb-1 px-4 py-2 border rounded-lg"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm mb-2 ml-4">{formik.errors.email}</p>
          )}

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full mb-1 px-4 py-2 border rounded-lg"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-sm mb-2 ml-4">{formik.errors.password}</p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 mt-3"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link className="text-blue-600" to="/">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
