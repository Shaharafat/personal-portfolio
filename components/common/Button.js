/*
 *
 * Title: Resuable Button
 * Description: Reusable Button component
 * Author: Shah Arafat
 * Date: 01-05-2021
 *
 */
import React from "react";

const Button = ({ href, colors, type, children, nextLink }) => {
  return nextLink ? (
    <NextLink href={`${href}`}>
      <a
        className={`px-4 py-2 mt-4 text-lg text-semibold font-openSans text-white dark:text-white flex w-max items-center ${colors} rounded-sm`}
      >
        {children}
      </a>
    </NextLink>
  ) : (
    <a
      href={href}
      type={type}
      target="_blank"
      className={`px-4 py-2 mt-4 text-lg text-semibold font-openSans text-white dark:text-white flex w-max items-center ${colors} rounded-sm`}
    >
      {children}
    </a>
  );
};

export default Button;
