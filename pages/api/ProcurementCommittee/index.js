import {
  getProcurementCommittees,
  putProcurementCommittee,
  deleteProcurementCommittee,
  postProcurementCommittee,
} from "@/db/procurementCommittee";


export default async function handler(req, res) {
    const { method } = req;
    switch (method) {
      case "GET":
        // get all committee
        getProcurementCommittees(req, res);
        break;
      case "POST":
        postProcurementCommittee(req, res);
        break;
      case "PUT":
        putProcurementCommittee(req, res);
        break;
      default:
        deleteProcurementCommittee(req, res);
        break;
    }
    
  }