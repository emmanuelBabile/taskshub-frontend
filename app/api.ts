import axios from "axios";
import { Project } from "./types";

const PROJECTS_API_URL = "http://localhost:8000/api/projects/";

export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const response = await axios.get(PROJECTS_API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching projects", error);
    throw new Error("Failed to fetch projects");
  }
};

export const addProject = async (project: { name: string; description: string; members: string[] }) => {
  try {
    const response = await axios.post(PROJECTS_API_URL, project);
    return response.data;
  } catch (error) {
    console.error("Error adding project", error);
    throw new Error("Failed to add project");
  }
};