import {
    getProjects,
    postProject,
    putProject,
    deleteProject
} from "../../../db/projectController.js";

export default async function handler(req, res) {
    const { method } = req;
    switch (method) {
      case "GET":
        getProjects(req, res);
        break;
      case "POST":
        postProject(req, res);
        break;
      case "PUT":
        putProject(req, res);
        break;
      default:
        deleteProject(req, res);
        break;
    }
    
  }