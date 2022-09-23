import React, { useRef, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Link } from "react-router-dom";
import salad1 from "../../Images/greek-salad-png-21.png";
import "./SignUp.css";
import { AiFillEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);


  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);


  const [passwordShown, setPasswordShown] = useState(false);
  // Password toggle handler
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
 
      console.log(user)
    
  }
  return (
    <div className="signBg flex justify-center items-center py-10">
      <div className="lg:w-3/4  relative bg-accent rounded-[26px] mt-16 mx-3">
        <div className="grid lg:grid-cols-3 ">
          <div>
            <h2 className="lg:text-7xl text-5xl w-3/4  text-primary uppercase font-bold relative -top-5 lg:top-16 left-5 z-52 py-16 lg:py-0">
              EAT FRESH <br></br>FOOD
            </h2>
            <img
              src={salad1}
              alt=""
              className="lg:min-w-[380px] w-[220px] z-40 absolute lg:left-2 left-16 lg:top-72 top-28"
            />
          </div>

          <div className="min-h-fit lg:col-span-2 lg:px-16 rounded-[26px] shadow-2xl bg-base-100">
            <div className="card-body">
              <h2 className="text-2xl font-bold py-3">Create Account</h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid lg:grid-cols-1 gap-5"
              >
                {/* ============name input============ */}
                <input
                onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name*"
                  className="border-b-2 slate-700 outline-0 py-2"
                  {...register("fullName", {
                    maxLength: 20,
                    required: {
                      value: true,
                      message: "FullName is required",
                    },
                  })}
                />
                <p className="text-red-500 text-xs">
                  {errors.fullName?.message}
                </p>
                {/* ================email input==== */}
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
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


                {/* ================password input=========== */}
                <div className=" relative">
                  <input
                   name="password"
                  onChange={(e) => setPassword(e.target.value)}
                    type={passwordShown ? "text" : "password"}
                    className="border-b-2 w-full slate-700 outline-0 py-2"
                    placeholder="Password*"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                      pattern: {
                        value:
                          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
                        message:
                          "must contain at least 1 uppercase[A-Z], 1 lowercase[a-z], and 1 number",
                      },
                      minLength: {
                        value: 6,
                        message: "Must be at least 6 characters long",
                      },
                    })}
                  />
                  <AiFillEye
                    onClick={togglePassword}
                    className="absolute right-3 top-4 text-xl hover:text-primary"
                  />
                </div>
                <p className="text-red-500 text-xs">
                  {errors.password?.message}
                </p>
                {/* --===============confirm password============ */}
                <div className=" relative">
                  <input
                  name="confirm"
                  onChange={(e) => setConfirm(e.target.value)}
                    type={passwordShown ? "text" : "password"}
                    className="border-b-2 w-full slate-700 outline-0 py-2"
                    placeholder="Confirm Password*"
                    {...register("confirm", {
                      required: {
                        value: true,
                        message: "Confirm Password is required",
                      },
                      validate: value =>
                      value === password.current || "The passwords do not match"
                      
                    })}
                  />
                  <AiFillEye
                    onClick={togglePassword}
                    className="absolute right-3 top-4 text-xl hover:text-primary"
                  />
                </div>
                <p className="text-red-500 text-xs">
                  {errors.confirm?.message}
                </p>

                <div className="flex text-sm px-2">
                  <input type="checkbox" />
                  <p className="px-3">
                    I have read and agreed to the Terms of Service and Privacy
                    Policy
                  </p>
                </div>

                <input
                // onClick={() => createUserWithEmailAndPassword(name, email, password, confirm)}
                  type="submit"
                  value="Create Account"
                  className="bg-primary transition duration-150 ease-in-out hover:scale-[0.97] text-white py-3 rounded"
                />
              </form>
              <div class="divider my-0">OR</div>
              <div className="lg:flex justify-between text-center">
                <div className="flex justify-center">
                  <FcGoogle className="mx-3 text-xl" />
                  <a href="/" className="grow-0 hover:text-[#3b5998]">
                    {" "}
                    Sign Up with Google
                  </a>
                </div>
                <div className="flex justify-center">
                  <BsFacebook className="text-[#3b5998] mx-3 text-xl" />
                  <a href="/" className="grow-0 hover:text-[#3b5998]">
                    Sign Up with Facebook
                  </a>
                </div>
              </div>
              <p className="text-center py-5 text-slate-700">
                Already have an account?{" "}
                <Link to="/login">
                  <span className="text-primary">Log In</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
