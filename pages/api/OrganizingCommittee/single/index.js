import {
  getOneOrganizingCommittee,
  postOrganizingCommittee,
  putOrganizingCommittee,
  deleteOrganizingCommittee,
} from "@/db/organizingCommittee";

export default async function handler(req, res) {
    const {organizingCommitteeId} = req.query;
    const {method} = req;

    if (method === "GET") return getOneOrganizingCommittee(req, res, organizingCommitteeId);
    if (method === "POST") return postOrganizingCommittee(req, res);
    if (method === "PUT") return putOrganizingCommittee(req, res);
    if (method === "DELETE") return deleteOrganizingCommittee(req, res);
}