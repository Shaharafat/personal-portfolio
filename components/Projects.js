/*
 *
 * Title: All projects
 * Description: all projects list
 * Author: Shah Arafat
 * Date: 02-05-2021
 *
 */
import ComponentLayout from "@/common/ComponentLayout";
import React from "react";
import { projectsData } from "../data";
import SingleProject from "./SingleProject";

const Projects = () => {
  return (
    <ComponentLayout id="projects">
      <div className="py-12">
        <h1 className="text-3xl text-pink-600 font-merriweather font-bold text-center">Projects</h1>
        {/* all projects */}
        <div className=" grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-6">
          {projectsData.map((project) => (
            <SingleProject project={project} />
          ))}
        </div>
      </div>
    </ComponentLayout>
  );
};

export default Projects;
