import {
  getOneJudiciaryCommittee,
  putJudiciaryCommittee,
  deleteJudiciaryCommittee,
  postJudiciaryCommittee,
} from "@/db/judiciaryCommitteeController";


export default async function handler(req, res){
    const { judiciaryCommitteeId } = req.query;
    const { method } = req;
    if (method === "GET") return getOneJudiciaryCommittee(req, res, judiciaryCommitteeId);
    if (method === "POST") return postJudiciaryCommittee(req, res);
    if (method === "PUT") return putJudiciaryCommittee(req, res);
    if (method === "DELETE") return deleteJudiciaryCommittee(req, res);
}