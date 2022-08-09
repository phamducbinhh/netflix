import React from "react";
import { NavLink } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../Firebase/FireBase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSubmitForm = async (values) => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      console.log(user);
      toast.success("Sign up success", {
        pauseOnHover: false,
        delay: 0,
      });
      await updateProfile(auth.currentUser, {
        displayName: values.name,
      });
      // them vào cloud firestore database
      const colRef = collection(db, "users");
      await addDoc(colRef, {
        name: values.name,
        email: values.email,
        password: values.password,
      });
      navigate("/");
    } catch (error) {
      toast.error(error.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  };
  return (
    <div className="p-4">
      <div className="flex items-center justify-end text-white">
        <NavLink to={"/"} className="font-bold hover:text-secondary">
          Sign In
        </NavLink>
        <NavLink
          to={"/signup"}
          className="p-2 ml-2 transition duration-300 rounded-md bg-slate-500 hover:bg-secondary"
        >
          Sign Up
        </NavLink>
      </div>
      <div className="w-full py-10">
        <div className="max-w-[450px] h-[500px] mx-auto bg-slate-800 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <div className="text-3xl font-bold">Sign Up</div>
            <form
              action=""
              className="flex flex-col w-full py-4"
              onSubmit={handleSubmit(handleSubmitForm)}
            >
              <input
                type="text"
                name="name"
                className="p-3 my-2 bg-gray-700 rounded-sm outline-none"
                placeholder="Username"
                {...register("name", {
                  required: true,
                  pattern: /^[a-zA-Z0-9_]{3,15}$/,
                  minLength: 6,
                })}
              />
              {errors.name?.type === "required" && (
                <p className="text-xs text-red-500">
                  Không được để trống Username
                </p>
              )}
              {errors.name?.type === "minLength" && (
                <p className="text-xs text-red-500">
                  Không được nhỏ hơn 6 ký tự
                </p>
              )}
              {errors.name?.type === "pattern" && (
                <p className="text-xs text-red-500">Username không hợp lệ</p>
              )}

              <input
                type="text"
                name="email"
                className="p-3 my-2 bg-gray-700 rounded-sm outline-none"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
              />
              {errors.email?.type === "required" && (
                <p className="text-xs text-red-500">
                  Không được để trống Email
                </p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="text-xs text-red-500">
                  Email không đúng định dạng
                </p>
              )}
              <input
                type="password"
                name="password"
                className="p-3 my-2 bg-gray-700 rounded-sm outline-none"
                placeholder="Password"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password?.type === "required" && (
                <p className="text-xs text-red-500">
                  Không được để trống Password
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-xs text-red-500">
                  Không được nhỏ hơn 6 ký tự
                </p>
              )}
              <button className="py-3 my-6 font-bold transition-all duration-300 rounded bg-slate-500 hover:bg-secondary">
                Sign Up
              </button>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <p>
                  {" "}
                  <input type="checkbox" name="" id="" className="mr-2" />
                  Remember me
                </p>
                <p>Need Help ?</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
