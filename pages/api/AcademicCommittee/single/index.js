import {
  getOneAcademicCommittee,
  putAcademicCommittee,
  deleteAcademicCommittee,
  postAcademicCommittee,
} from "@/db/academicCommitteeController";

export default async function handler(req, res){
    const { academicCommitteeId } = req.query;
    // console.log(academiCommitteeId, "api/getId");
    const { method } = req;
    if (method === "GET") return getOneAcademicCommittee(req, res, academicCommitteeId);
    if (method === "POST") return postAcademicCommittee(req, res);
    if (method === "PUT") return putAcademicCommittee(req, res);
    if (method === "DELETE") return deleteAcademicCommittee(req, res);
}