/*
 *
 * Title: Single Project layout
 * Description: Single Project layout
 * Author: Shah Arafat
 * Date: 02-05-2021
 *
 */
import Image from "next/image";
import React from "react";
import { FaExternalLinkAlt, FaGithubAlt } from "react-icons/fa";

const SingleProject = ({
  project: { name, projectDetails, image, tags, live, code },
}) => {
  return (
    <div className="p-3 rounded-md grid bg-white dark:bg-purpleDarkUltra shadow-lg">
      {/* project image */}
      <Image
        src={image}
        height={350}
        width={500}
        layout="intrinsic"
        className="transform scale-100 hover:scale-110 duration-1000 transition-transform"
      />
      <h1 className="font-openSans text-xl mt-2 font-semibold text-electroMagnetic dark:text-white">
        {name}
      </h1>
      <p className="mt-2 font-openSans leading-normal text-electroMagnetic dark:text-white">
        {projectDetails.substr(0, 150)}
      </p>
      {/* project tags */}
      <div className="flex mt-4 flex-wrap items-center">
        {tags.map((tag, index) => (
          <p
            key={index}
            className="font-openSans text-sm font-semibold px-2 bg-gray-200 mx-1 my-1 dark:bg-darkBlue rounded-full"
          >
            {tag}
          </p>
        ))}
      </div>
      {/* download and live site icons */}
      <div className="mt-4 flex justify-end items-center ">
        <a href={live} target="_blank">
          <FaExternalLinkAlt className="mx-2 text-pink-600 text-xl hover:text-pink-700" />
        </a>
        <a href={code} target="_blank">
          <FaGithubAlt className="mx-2 text-pink-600 text-xl hover:text-pink-700" />
        </a>
      </div>
    </div>
  );
};

export default SingleProject;
