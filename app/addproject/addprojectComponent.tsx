"use client";

import React, { useState } from "react";
import { addProject } from "@/app/api";

const AddProjectComponent: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [members, setMembers] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const projectData = {
      name,
      description,
      members: members.split(",").map((member) => member.trim()),
    };

    try {

      await addProject(projectData);
      alert("Project added successfully!");  

      setName("");
      setDescription("");
      setMembers("");
    } catch (error) {
      setError("Failed to add project. Please try again.");
    }
  };

  return (
    <div className="flex flex-col ml-56 mt-40 p-4">
      <h1 className="text-2xl font-semibold text-black">Add a Project</h1>

      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="mt-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-[#0cc0df] rounded-[35px] mt-2 text-gray-700"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-[#0cc0df] rounded-[35px] mt-2 text-gray-700"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="members" className="block text-sm text-gray-700">
            Members (separate by commas)
          </label>
          <input
            id="members"
            type="text"
            value={members}
            onChange={(e) => setMembers(e.target.value)}
            className="w-full p-2 border border-[#0cc0df] rounded-[35px] mt-2 text-gray-700"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#0cc0df] text-white py-2 rounded-[35px] hover:bg-[#0a98b3]"
        >
          Save Project
        </button>
      </form>
    </div>
  );
};

export default AddProjectComponent;
