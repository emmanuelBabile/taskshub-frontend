"use client";

import React, { useState, useEffect } from "react";
import { fetchProjects } from "@/app/api";
import { Project } from "@/app/types";
import { EyeIcon, PencilIcon, PlusIcon } from "@heroicons/react/24/outline"; 

import { useRouter } from "next/navigation"; 

const ProjectsComponent: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const getProjects = async () => {
      try {
        const fetchedProjects = await fetchProjects();
        setProjects(fetchedProjects);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };

    getProjects();
  }, []);


  return (
    <div className="flex flex-col ml-56 mt-40 p-4">

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-black">Projects</h1>
        <button
          onClick={() => router.push("/addproject")} 
          className="flex items-center bg-[#0cc0df] text-white px-4 py-2 rounded-md hover:bg-[#0ab1c6] transition duration-200"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Add a project
        </button>
      </div>

      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b text-left text-black">Name</th>
            <th className="px-4 py-2 border-b text-left text-black">Description</th>
            <th className="px-4 py-2 border-b text-left text-black">Members</th>
            <th className="px-4 py-2 border-b text-left text-black">Details</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td className="px-4 py-2 border-b text-black">{project.name}</td>
              <td className="px-4 py-2 border-b text-black">{project.description}</td>
              <td className="px-4 py-2 border-b text-black">
                {project.members.join(", ")}
              </td>
              <td className="px-4 py-2 border-b flex items-center space-x-2">
                {/* Eye Icon for project details */}
                <EyeIcon
                  className="h-6 w-6 text-black cursor-pointer"
                  onClick={() => router.push(`/projectdetail/${project.id}`)}
                />
                {/* Pencil Icon for project editing */}
                <PencilIcon
                  className="h-6 w-6 text-black cursor-pointer"
                  onClick={() => router.push(`/editproject/${project.id}`)} 
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsComponent;
