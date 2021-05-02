/*
 *
 * Title: blog page
 * Description: blog page
 * Author: Shah Arafat
 * Date: 02-05-2021
 *
 */
import ComponentLayout from "@/components/common/ComponentLayout";
import Container from "@/components/Container";
import React from "react";

const blog = () => {
  const meta = {
    title: "Blog | Shah Arafat",
  };

  return (
    <Container {...meta}>
      <ComponentLayout>
        <div className="grid items-center">
          <p className="text-center font-openSans text-3xl text-darkBlue">
            Coming soon...
          </p>
        </div>
      </ComponentLayout>
    </Container>
  );
};

export default blog;
