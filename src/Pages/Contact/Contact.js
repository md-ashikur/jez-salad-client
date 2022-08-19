import React from "react";
import { useForm } from "react-hook-form";

import "./Contact.css";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="contactBg flex justify-center items-center lg:py-16 relative">
      <div className="lg:w-3/4  relative mt-16">
        <div className="lg:grid lg:grid-cols-3  ">
          <div className="shadow-2xl bg-primary p-10 text-white rounded drop-shadow-lg">
            <h3 className="text-xl font-bold"> Get in Touch</h3>
            <p className="text-xs my-3">
              We love to here from you. Our friendly team is always here to chat
            </p>
            <h3 className="text-md font-bold">Chat with us</h3>
            <p className="text-xs my-3">Our friendly team is here to help.</p>
            <p className="mb-3">mdashik.contact@gmail.com</p>

            <h3 className="text-md font-bold">Office</h3>
            <p className="text-xs my-3">Come say hello at our office</p>
            <p className="text-sm my-3">Bogura-5800, Bangladesh</p>

            <h3 className="text-md font-bold">Phone</h3>
            <p className="text-xs my-3">Mon-Fri from 8am to 5pm</p>
            <p className="text-sm ">+880 1705-433694</p>
          </div>

          <div className="min-h-fit col-span-2 lg:px-5 bg-accent lg:bg-transparent shadow-2xl">
            <div className="card-body">
              <h2 className="text-2xl font-bold py-3">Contact</h2>
              <p>
                You can reach us any time via
                <span className="text-primary"><a href="www.mdashik.contact@gmail.com"> mdashik.contact@gmail.com</a></span>
              </p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-5"
              >
                <div className="grid lg:grid-cols-2 gap-5">
                <input
                placeholder="First Name"
                className="border-b-2 slate-700 outline-0 py-2 px-2"
                  {...register("fullName", { required: true, maxLength: 20 })}
                />
                <input
                placeholder="Last Name"
                className="border-b-2 slate-700 outline-0 py-2 px-2"
                  {...register("fullName", { required: true, maxLength: 20 })}
                />
                </div>
                <input
                  type="email"
                  className="border-b-2 slate-700 outline-0 py-2 px-2"
                  placeholder="Email Address"
                  {...register("email", { required: true })}
                />
                <textarea rows="5" className="border-b-2 slate-700 outline-0 py-2 px-2"
                  placeholder="Leave us a message here"></textarea>

                <input
                  type="submit"
                  value="Get Started"
                  className="bg-primary text-white py-3 rounded"
                />
              </form>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
