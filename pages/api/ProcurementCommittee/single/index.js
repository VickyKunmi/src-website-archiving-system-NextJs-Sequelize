import {
  getOneProcurenmentCommittee,
  postProcurementCommittee,
  putProcurementCommittee,
  deleteProcurementCommittee,
} from "@/db/procurementCommittee";


export default async function handler(req, res){
    const { procurementCommitteeId } = req.query;
    const { method } = req;
    if (method === "GET") return getOneProcurenmentCommittee(req, res, procurementCommitteeId);
    if (method === "POST") return postProcurementCommittee(req, res);
    if (method === "PUT") return putProcurementCommittee(req, res);
    if (method === "DELETE") return deleteProcurementCommittee(req, res);
  }