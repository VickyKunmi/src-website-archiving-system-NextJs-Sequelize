import {
    getProject,
    postProject,
    putProject,
    deleteProject,
} from "../../../../db/projectController";


export default async function handler(req, res){
    // const { projectId } = req.query;

    const { method } = req;
    if (method === "GET") return getProject(req, res);
    if (method === "POST") return postProject(req, res);
    if (method === "PUT") return putProject(req, res);
    if (method === "DELETE") return deleteProject(req, res);
}