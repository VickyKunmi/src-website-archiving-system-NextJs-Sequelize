import {
  getEstateCommittees,
  putEstateCommittee,
  deleteEstateCommittee,
  postEstateCommittee,
} from "@/db/estateCommitteeController";


export default async function handler(req, res) {
    const { method } = req;
    switch (method) {
      case "GET":
        // get all committee
        getEstateCommittees(req, res);
        break;
      case "POST":
        postEstateCommittee(req, res);
        break;
      case "PUT":
        putEstateCommittee(req, res);
        break;
      default:
        deleteEstateCommittee(req, res);
        break;
    }
    
  }