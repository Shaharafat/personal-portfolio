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
import emailjs from "emailjs-com";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // validation schema
  const contactSchema = yup.object().shape({
    name: yup.string().min(3).max(50).required(),
    email: yup.string().email().required(),
    subject: yup.string().min(5).max(100).required(),
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
  const sendmail = async (data) => {
    setLoading(true);
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_USERID
      );
      setLoading(false);
      setSuccess("Email sent successfully.");
    } catch (error) {
      console.log(error.text);
      setLoading(false);
      setError("Email sent failed. Try again later!");
    }
  };

  return (
    <ComponentLayout id="contact">
      <div className="py-6">
        <h1 className="text-3xl text-pink-600 font-merriweather font-bold text-center">
          Contact Me
        </h1>
        {/* form */}
        <form
          className="bg-purpleDarkUltra rounded-md p-3 mt-6"
          onSubmit={handleSubmit(sendmail)}
          autoComplete="off"
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
                  type="email"
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
            <label htmlFor="email" className="text-white dark:text-white">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="px-1 py-2 bg-gray-100  dark:bg-electroMagnetic focus:outline-none"
              placeholder="Type your email"
              {...register("subject")}
            />
            <p className="text-sm text-red-600">{errors.subject?.message}</p>
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
          <div className="flex flex-col lg:flex-row lg:items-center">
            <button
              className={`px-4 py-2 mt-4 mr-3 text-lg text-semibold font-openSans text-white dark:text-white flex w-max items-center bg-pink-600 hover:bg-pink-700 disabled:bg-opacity-50 cursor-pointer rounded-sm`}
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Image
                    src="/static/icon/buttonLoading.svg"
                    width={25}
                    height={25}
                    className="animate-spin pr-1"
                  />{" "}
                  Sending..{" "}
                </>
              ) : (
                "Send mail"
              )}
            </button>
            {/* success and error message */}
            {success && (
              <p className="text-green-700 mt-4 flex-grow  bg-green-300 px-2 py-1 ring ring-green-400 rounded-sm">
                {success}
              </p>
            )}
            {error && (
              <p className="text-red-700 mt-4 flex-grow bg-red-300 px-2 py-1 ring ring-red-400 rounded-sm">
                {error}
              </p>
            )}
          </div>
        </form>
      </div>
    </ComponentLayout>
  );
};

export default Contact;
