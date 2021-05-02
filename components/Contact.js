/*
 *
 * Title: Contact Form
 * Description: Contact from where client can mail the user.
 * Author: Shah Arafat
 * Date: 02-05-2021
 *
 */
import ComponentLayout from "@/common/ComponentLayout";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const Contact = () => {
  // validation schema
  const contactSchema = yup.object().shape({
    name: yup.string().min(3).max(50).required(),
    email: yup.string().email().required(),
    message: yup.string().min(20).max(500).required(),
  });

  // hook form config
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(contactSchema),
  });

  // this will execute when form submits
  const sendmail = () => {
    console.log("sent");
  };

  return (
    <ComponentLayout>
      <div className="py-6">
        <h1 className="text-3xl text-pink-600 font-merriweather font-bold text-center">
          Contact Me
        </h1>
        {/* form */}
        <form
          className="bg-purpleDarkUltra rounded-md p-3 mt-6"
          onSubmit={handleSubmit(sendmail)}
        >
          <div className="grid gap-2 md:gap-3 lg:gap-4 grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-white dark:text-white">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="px-1 py-2 bg-gray-100  dark:bg-electroMagnetic focus:outline-none"
                placeholder="Type your name"
                {...register("name")}
              />
              <p className="text-sm text-red-600">{errors.name?.message}</p>
            </div>
            <div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-white dark:text-white">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="px-1 py-2 bg-gray-100  dark:bg-electroMagnetic focus:outline-none"
                  placeholder="Type your email"
                  {...register("email")}
                />
                <p className="text-sm text-red-600">{errors.email?.message}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="message" className="text-white dark:text-white">
              Message
            </label>
            <textarea
              type="text"
              id="message"
              className="px-1 py-2 bg-gray-100 dark:bg-electroMagnetic  focus:outline-none"
              rows="10"
              placeholder="Type message"
              {...register("message")}
            />
            <p className="text-sm text-red-600">{errors.message?.message}</p>
          </div>
          {/* submit button */}
          <button
            className={`px-4 py-2 mt-4 text-lg text-semibold font-openSans text-white dark:text-white flex w-max items-center bg-pink-600 hover:bg-pink-700 cursor-pointer rounded-sm`}
            type="submit"
          >
            Send mail
          </button>
        </form>
      </div>
    </ComponentLayout>
  );
};

export default Contact;
