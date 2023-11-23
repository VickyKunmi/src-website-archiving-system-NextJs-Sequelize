import {
  getAcademicCommittees,
  postAcademicCommittee,
  putAcademicCommittee,
  deleteAcademicCommittee,
} from "@/db/academicCommitteeController";


export default async function handler(req, res) {
    const { method } = req;
    switch (method) {
      case "GET":
        // get all committee
        getAcademicCommittees(req, res);
        break;
      case "POST":
        postAcademicCommittee(req, res);
        break;
      case "PUT":
        putAcademicCommittee(req, res);
        break;
      default:
        deleteAcademicCommittee(req, res);
        break;
    }
    
  }
  