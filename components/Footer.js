/*
 *
 * Title: Footer
 * Description: Footer
 * Author: Shah Arafat
 * Date: 03-05-2021
 *
 */
import React from "react";
import { FaArrowUp, FaHeart } from "react-icons/fa";

const Footer = () => {
  // go top smoothly
  const goTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="content-area border-t border-gray-300 dark:border-gray-800 py-6 flex flex-row justify-between items-center ">
      <p className="text-lg  dark:text-white text-electroMagnetic">
        Made with <FaHeart className="inline-block text-red-600" /> by{" "}
        <a
          href="https://github.com/shaharafat"
          target="_blank"
          className="font-bold text-lg"
        >
          Shah Arafat
        </a>{" "}
      </p>
      <button
        onClick={goTop}
        className="px-3 py-3 bg-green-500 hover:bg-green-600 rounded-sm focus:outline-none"
      >
        <FaArrowUp className="text-white" />
      </button>
    </footer>
  );
};

export default Footer;
