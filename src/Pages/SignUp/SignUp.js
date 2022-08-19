import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import salad1 from "../../Images/greek-salad-png-21.png";
import "./SignUp.css";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="signBg flex justify-center items-center py-10">
      <div className="lg:w-3/4  relative bg-accent rounded-[26px] mt-16 mx-3">
        <div className="grid lg:grid-cols-3 ">
          <div>
          <h2 className="lg:text-7xl text-5xl w-3/4  text-primary uppercase font-bold relative -top-5 lg:top-16 left-5 z-52 py-16 lg:py-0">
              EAT FRESH  <br></br>FOOD</h2>
            <img
              src={salad1}
              alt=""
              className="lg:min-w-[380px] w-[220px] z-40 absolute lg:left-2 left-16 lg:top-72 top-28"
            />
          </div>

          <div className="min-h-fit lg:col-span-2 lg:px-16 rounded-[26px] shadow-2xl bg-base-100">
            <div className="card-body">
              <h2 className="text-2xl font-bold py-3">Create Account</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="grid lg:grid-cols-1 gap-5">
                <input
                placeholder="Full Name"
                className="border-b-2 slate-700 outline-0 py-2"
                  {...register("fullName", { required: true, maxLength: 20 })}
                />
                <input
                 type="email"
                 className="border-b-2 slate-700 outline-0 py-2"
                 placeholder="Email Address" {...register("email", { required: true })} 
                 />
                
                <input
                  type="password"
                  className="border-b-2 slate-700 outline-0 py-2"
                  placeholder="Password"
                  {...register("password", { min: 6, max: 99, required: true })}
                />

                <input
                  type="password"
                  className="border-b-2 slate-700 outline-0 py-2"
                  placeholder="Confirm Password"
                  {...register("confirmPassword", { min: 6, max: 99, required: true })}
                />

              <div className="flex text-sm px-2">
              <input type="checkbox"/>
                <p className="px-3">I have read and agreed to the Terms of Service and Privacy Policy</p>
              </div>
                
                <input type="submit" value="Create Account" className="bg-primary text-white py-3 rounded" />
              </form>
              <div class="divider my-0">OR</div>
              <div className="lg:flex justify-between text-center">
            <p>Signup with Google</p>
            <p>Signup with Facebook</p>

              </div>
              <p className="text-center py-5 text-slate-700">Already have an account? <Link to="/login"><span className="text-primary">Log In</span></Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
