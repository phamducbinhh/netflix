import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/FireBase";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuth } from "../Context/ContextApi";

const SignIn = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useAuth();
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      navigate("/home");
    }
  }, [navigate]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = async (values) => {
    try {
      const myUser = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      setUserInfo(myUser);
      toast.success("Sign in success", {
        pauseOnHover: false,
        delay: 0,
      });
      navigate("/home");
      localStorage.setItem("auth", true);
    } catch (error) {
      toast.error("Tài khoản không tồn tại", {
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
          className="p-2 ml-2 transition duration-300 rounded-md outline-none bg-slate-500 hover:bg-secondary"
        >
          Sign Up
        </NavLink>
      </div>
      <div className="w-full py-10 ">
        <div className="max-w-[450px] h-[500px] mx-auto bg-slate-800 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <div className="text-3xl font-bold">Sign In</div>
            <form
              action=""
              className="flex flex-col w-full py-4"
              onSubmit={handleSubmit(handleSignIn)}
            >
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
                Sign In
              </button>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <p>
                  {" "}
                  <input type="checkbox" name="" id="" className="mr-2" />
                  Remember me
                </p>
                <p>Need Help ?</p>
              </div>
              <p className="py-8">
                <span className="mr-2 text-sm text-gray-600">
                  Create to account ?
                </span>
                <NavLink
                  to={"/signup"}
                  className="text-md hover:text-slate-400"
                >
                  Sign Up
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
