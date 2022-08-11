import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import salad2 from "../../Images/Salad-PNG-Background-Image.png";
import "./Login.css";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="loginBg flex justify-center items-center">
      <div className="lg:w-3/4  relative bg-accent rounded-[26px] mt-16">
        <div className="grid lg:grid-cols-3 ">
          <div className="">
            <h2 className="lg:text-7xl text-5xl text-primary uppercase font-bold relative -top-5 lg:top-16 left-5 z-52 py-16 lg:py-0">Eat <br></br>Healthy</h2>
            <img
              src={salad2}
              alt=""
              className="w-[480px] z-50 absolute lg:-left-10 top-32 lg:top-48"
            />
          </div>

          <div className="min-h-fit col-span-2 lg:px-16 rounded-[26px] shadow-2xl bg-base-100">
            <div className="card-body">
              <h2 className="text-2xl font-bold py-3">Login</h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-5"
              >
                <input
                  type="email"
                  className="border-b-2 slate-700 outline-0 py-2"
                  placeholder="Email Address"
                  {...register("email", { required: true })}
                />

                <input
                  type="password"
                  className="border-b-2 slate-700 outline-0 py-2"
                  placeholder="Password"
                  {...register("password", { min: 6, max: 99, required: true })}
                />
                <input
                  type="submit"
                  value="Login"
                  className="bg-primary text-white py-3 rounded"
                />
              </form>
              <div class="divider my-0">OR</div>
              <div className="lg:flex justify-between text-center">
                <p>Login with Google</p>
                <p>Login with Facebook</p>
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
