import {
  getAssociation,
  putAssociation,
  deleteAssociation,
  postAssociation,
} from "../../../../db/associationsController";

export default async function handler(req, res){
    const { associationId } = req.query;
    console.log(associationId, "api/getId");
    const { method } = req;
    if (method === "GET") return getAssociation(req, res, associationId);
    if (method === "POST") return postAssociation(req, res);
    if (method === "PUT") return putAssociation(req, res);
    if (method === "DELETE") return deleteAssociation(req, res);
}