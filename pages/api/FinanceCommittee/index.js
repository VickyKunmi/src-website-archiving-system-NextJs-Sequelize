import {
  getFinanceCommittees,
  putFinanceCommittee,
  deleteFinanceCommittee,
  postFinanceCommittee,
} from "@/db/financeCommitteeController";


export default async function handler(req, res) {
    const { method } = req;
    switch (method) {
      case "GET":
        // get all committee
        getFinanceCommittees(req, res);
        break;
      case "POST":
        postFinanceCommittee(req, res);
        break;
      case "PUT":
        putFinanceCommittee(req, res);
        break;
      default:
        deleteFinanceCommittee(req, res);
        break;
    }
    
  }