import {
  getReligiousCommittees,
  putReligiousCommittee,
  deleteReligiousCommittee,
  postReligiousCommittee,
} from "@/db/religiousCommitteeController";


export default async function handler(req, res) {
    const { method } = req;
    switch (method) {
      case "GET":
        // get all committee
        getReligiousCommittees(req, res);
        break;
      case "POST":
        postReligiousCommittee(req, res);
        break;
      case "PUT":
        putReligiousCommittee(req, res);
        break;
      default:
        deleteReligiousCommittee(req, res);
        break;
    }
    
  }