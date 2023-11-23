import {
 getOneFinanceCommittee,
 postFinanceCommittee,
 putFinanceCommittee,
 deleteFinanceCommittee
} from "@/db/financeCommitteeController";


export default async function handler(req, res){
    const { financeCommitteeId } = req.query;
    const { method } = req;
    if (method === "GET") return getOneFinanceCommittee(req, res, financeCommitteeId);
    if (method === "POST") return postFinanceCommittee(req, res);
    if (method === "PUT") return putFinanceCommittee(req, res);
    if (method === "DELETE") return deleteFinanceCommittee(req, res);
  }