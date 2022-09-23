import React, { useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import salad2 from "../../Images/Salad-PNG-Background-Image.png";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye } from 'react-icons/ai';
import { BsFacebook } from "react-icons/bs";
import "./Login.css";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  if (user) {
    console.log(user);
  }
  return (
    <div className="loginBg flex justify-center items-center">
      <div className="lg:w-3/4  relative bg-accent rounded-[26px] mt-16">
        <div className="grid lg:grid-cols-3 ">
          <div>
            <h2 className="lg:text-7xl text-5xl text-primary uppercase font-bold relative -top-5 lg:top-16 left-5 z-52 py-16 lg:py-0">
              STAY <br></br>Healthy
            </h2>
            <img
              src={salad2}
              alt=""
              className="w-[480px] z-40 absolute lg:-left-10 top-32 lg:top-48"
            />
          </div>

          <div className="min-h-fit col-span-2 lg:px-16 rounded-[26px] shadow-2xl bg-base-100">
            <div className="card-body">
              <h2 className="text-2xl font-bold py-3">Login</h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-2"
              >
                <input
                  type="email"
                  className="border-b-2 slate-700 outline-0 py-2"
                  placeholder="Email Address*"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email Address is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide valid Email",
                    },
                  })}
                />
                <p className="text-red-500 text-xs">{errors.email?.message}</p>
                
            
               <div className=" relative" >
               <input
                  type={passwordShown ? "text" : "password"}
                  className="border-b-2 w-full slate-700 outline-0 py-2"
                  placeholder="Password*"
                  {...register("password", { 
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    pattern: {
                      value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
                      message: "must contain at least 1 uppercase[A-Z], 1 lowercase[a-z], and 1 number",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be at least 6 characters long",
                    },
                   })}
                /><AiFillEye onClick={togglePassword} className="absolute right-3 top-4 text-xl hover:text-primary" />
              </div>
                 <p className="text-red-500 text-xs">{errors.password?.message}</p>
                
                 
                <input
                  type="submit"
                  value="Login"
                  className="bg-primary transition duration-150 ease-in-out hover:scale-[0.97] text-white py-3 rounded"
                />
                <a href="/" className="text-center hover:text-[#3b5998]">
                  Forgot Password?
                </a>
              </form>

              <div class="divider my-0">OR</div>
              <div className="lg:flex lg:justify-between text-center">
                <div className="flex justify-center">
                  <FcGoogle className="mx-3 text-xl" />
                  <a
                    href="/"
                    className="grow-0 hover:text-[#3b5998]"
                    onClick={() => signInWithGoogle()}
                  >
                    Continue with Google
                  </a>
                </div>
                <div className="flex justify-center">
                  <BsFacebook className="text-[#3b5998] mx-3 text-xl" />
                  <a href="/" className="grow-0 hover:text-[#3b5998]">
                    Continue with Facebook
                  </a>
                </div>
              </div>
              <p className="text-center py-5 text-slate-700">
                Don't have an account?
                <Link to="/signUp">
                  <span className="text-primary"> Sign Up</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
