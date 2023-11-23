import {
  getOneReligiousCommittee,
  postReligiousCommittee,
  putReligiousCommittee,
  deleteReligiousCommittee,
} from "@/db/religiousCommitteeController";


export default async function handler(req, res){
    const { religiousCommitteeId } = req.query;
    const { method } = req;
    if (method === "GET") return getOneReligiousCommittee(req, res, religiousCommitteeId);
    if (method === "POST") return postReligiousCommittee(req, res);
    if (method === "PUT") return putReligiousCommittee(req, res);
    if (method === "DELETE") return deleteReligiousCommittee(req, res);
  }