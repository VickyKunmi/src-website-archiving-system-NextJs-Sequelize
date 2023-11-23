import {
  getOneEstateCommittee,
  postEstateCommittee,
  putEstateCommittee,
  deleteEstateCommittee,
} from "@/db/estateCommitteeController";


export default async function handler(req, res){
    const { estateCommitteeId } = req.query;
    const { method } = req;
    if (method === "GET") return getOneEstateCommittee(req, res, estateCommitteeId);
    if (method === "POST") return postEstateCommittee(req, res);
    if (method === "PUT") return putEstateCommittee(req, res);
    if (method === "DELETE") return deleteEstateCommittee(req, res);
  }