/*
 *
 * Title: Home page
 * Description: Home page
 * Author: Shah Arafat
 * Date: 01-05-2021
 *
 */
import React from "react";
import { FaFileDownload } from "react-icons/fa";
import Button from "./common/Button";
import ComponentLayout from "./common/ComponentLayout";

const Intro = () => {
  return (
    <ComponentLayout>
      <div>
        <h1 className="font-merriweather font-bold text-5xl text-darkBlue leading-normal ">
          Hey there,
          <br />
          I'm <span className="text-pink-600">Developer</span>, Writer,
          <br />
          nerd.
        </h1>
        <p className="font-openSans mt-6 font-semibold text-electroMagnetic dark:text-white">
          23 years old nerd, passionate by web development, travelling and
          computers.
        </p>

        <p className="font-openSans mt-4 font-semibold text-electroMagnetic dark:text-white">
          I write in Javascript, HTML, CSS. I am experienced in different <br />{" "}
          front end development tools and libraries.
        </p>
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
