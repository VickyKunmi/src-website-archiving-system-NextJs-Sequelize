import {
  getJudiciaryCommittees,
  postJudiciaryCommittee,
  putJudiciaryCommittee,
  deleteJudiciaryCommittee,
} from "@/db/judiciaryCommitteeController";


export default async function handler(req, res) {
    const { method } = req;
    switch (method) {
      case "GET":
        // get all committee
        getJudiciaryCommittees(req, res);
        break;
      case "POST":
        postJudiciaryCommittee(req, res);
        break;
      case "PUT":
        putJudiciaryCommittee(req, res);
        break;
      default:
        deleteJudiciaryCommittee(req, res);
        break;
    }
    
  }
  