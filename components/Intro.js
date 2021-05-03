/*
 *
 * Title: Home page
 * Description: Home page
 * Author: Shah Arafat
 * Date: 01-05-2021
 *
 */
import Button from "@/common/Button";
import ComponentLayout from "@/common/ComponentLayout";
import React from "react";
import { FaFileDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Intro = () => {
  return (
    <ComponentLayout>
      <div>
        <h1 className="font-merriweather font-bold text-2xl sm:text-3xl md:text-5xl text-darkBlue leading-normal ">
          <span className="flex items-center">
            Hey there,{" "}
            <img
              src="/static/images/wave.png"
              className="h-14 wave-animation"
              alt="wave icon"
            />
          </span>
          {/* I'm <span className="text-pink-600">Developer</span>, Writer, */}
          I'm <span className="text-pink-600">Shah Arafat</span>
          <br/>
          Developer, Writer, nerd.
        </h1>
        <p className="font-openSans mt-6 font-semibold text-electroMagnetic dark:text-white">
          23 years old nerd, passionate by web development, travelling and
          computers.
        </p>

        <p className="font-openSans mt-4 font-semibold text-electroMagnetic dark:text-white">
          I write in Javascript, HTML, CSS. I am experienced in different <br />{" "}
          front end development tools and libraries.
        </p>
        {/* find me in */}
        <p className="font-openSans mt-4 font-semibold text-electroMagnetic dark:text-white">
          Find me on
        </p>
        <div className="flex items-center mt-2">
          <a
            href="https://github.com/shaharafat"
            target="_blank"
            className="text-pink-600 mr-2 text-lg"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shah-arafat/"
            target="_blank"
            className="text-pink-600 mx-2 text-lg"
          >
            <FaLinkedinIn />
          </a>
        </div>
        {/* resume download button */}
        <Button
          nextLink={false}
          colors={`bg-pink-600 hover:bg-pink-700 shadow-md`}
          href="https://drive.google.com/uc?export=download&id=1_-8UjAYletdRM8Uo-am7iYI5e7s-azV2"
        >
          <FaFileDownload className="inline-block mr-1" /> Download Resume
        </Button>
      </div>
    </ComponentLayout>
  );
};

export default Intro;
