import {
  getExecutives,
  postExecutive,
  putExecutive,
  deleteExecutive
} from "../../../db/executivesController";

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      // get all executives
      getExecutives(req, res);
      break;
    case "POST":
      postExecutive(req, res);
      break;
    case "PUT":
      putExecutive(req, res);
      break;
    default:
      deleteExecutive(req, res);
      break;
  }
  
}
