import {
  getOrganizingCommittees,
  putOrganizingCommittee,
  deleteOrganizingCommittee,
  postOrganizingCommittee,
} from "@/db/organizingCommittee";


export default async function handler(req, res) {
    const { method } = req;
    switch (method) {
      case "GET":
        // get all committee
        getOrganizingCommittees(req, res);
        break;
      case "POST":
        postOrganizingCommittee(req, res);
        break;
      case "PUT":
        putOrganizingCommittee(req, res);
        break;
      default:
        deleteOrganizingCommittee(req, res);
        break;
    }
    
  }