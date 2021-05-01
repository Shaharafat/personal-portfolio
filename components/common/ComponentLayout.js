/*
 *
 * Title: Component layout
 * Description: some common styles for component getting duplicated. so creating this.
 * Author: Shah Arafat
 * Date: 01-05-2021
 *
 */
import React from "react";

const ComponentLayout = ({ children, id = "/" }) => {
  return (
    <section
      id={id}
      className="h-min-nav content-area grid items-center bg-white dark:bg-purpleDark"
    >
      {children}
    </section>
  );
};

export default ComponentLayout;
