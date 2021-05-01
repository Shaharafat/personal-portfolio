/*
 *
 * Title: About Me
 * Description: This component contains and image and some details about me.
 * Author: Shah Arafat
 * Date: 01-05-2021
 *
 */
import ComponentLayout from "@/common/ComponentLayout";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <ComponentLayout id="about">
      <div className="px-0 md:px-8 lg:px-12 xl:px-24 grid gap-5 grid-cols-1 md:grid-cols-2 md:justify-between md:items-center md:w-full">
        <div>
          <h2 className="text-pink-600 text-3xl font-merriweather font-bold">
            About
          </h2>
          <p className="mt-4 text-lg font-openSans leading-normal text-electroMagnetic dark:text-white">
            I am{" "}
            <a href="https:github.com/shaharafat" className="text-pink-600">
              Shah Arafat
            </a>
            . A Passionate Front-end developer from Bangladesh. My
            responsibility is to create responsive and scalable front-end
            applications using React JS. I love to explore new technologies
            related to the web. I have a bad habit that, when I am working, if I
            get stuck with something, I can't even sleep before solving the
            issue. Besides all of this, I like to teach people and I have four
            years of experience in teaching. That's why I can explain things
            in a very comfortable way. I am available to work with you if it
            suits my interest.
          </p>
        </div>
        <div className="px-12">
          <Image
            src="/static/images/shaharafat.png"
            width={300}
            height={300}
            alt="Shah Arafat"
            className="rounded-md shadow-md transform scale-100 hover:scale-105 transition-transform duration-1000"
          />
        </div>
      </div>
    </ComponentLayout>
  );
};

export default About;
