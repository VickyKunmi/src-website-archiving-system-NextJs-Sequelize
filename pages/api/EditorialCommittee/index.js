import {
  getEditorialCommittees,
  putEditorialCommittee,
  deleteEditorialCommittee,
  postEditorialCommittee,
} from "@/db/editorialCommitteeController";


export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      // get all committee
      getEditorialCommittees(req, res);
      break;
    case "POST":
      postEditorialCommittee(req, res);
      break;
    case "PUT":
      putEditorialCommittee(req, res);
      break;
    default:
      deleteEditorialCommittee(req, res);
      break;
  }
  
}
