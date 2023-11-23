import {
  getExecutive,
  putExecutive,
  deleteExecutive,
  postExecutive
} from "../../../../db/executivesController";

export default async function handler(req, res) {
  const { executiveId } = req.query;
  console.log(executiveId, "api/getId");
  const { method } = req;
  if (method === "GET") return getExecutive(req, res, executiveId);
  if (method === "POST") return postExecutive(req, res);
  if (method === "PUT") return putExecutive(req, res);
  if (method === "DELETE") return deleteExecutive(req, res);
}
