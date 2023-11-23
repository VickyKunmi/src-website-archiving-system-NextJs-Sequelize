import {
  getOneEditorialCommittee,
  postEditorialCommittee,
  putEditorialCommittee,
  deleteEditorialCommittee,
} from "@/db/editorialCommitteeController";


export default async function handler(req, res){
  const { editorialCommitteeId } = req.query;
  const { method } = req;
  if (method === "GET") return getOneEditorialCommittee(req, res, editorialCommitteeId);
  if (method === "POST") return postEditorialCommittee(req, res);
  if (method === "PUT") return putEditorialCommittee(req, res);
  if (method === "DELETE") return deleteEditorialCommittee(req, res);
}