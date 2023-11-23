import {
  getContact,
  postContact,
  putContact,
  deleteContact,
} from "@/db/contactController";

export default async function handler(req, res) {
  const { contactId } = req.query;
  console.log(contactId, "api/getId");
  const { method } = req;
  
  if (method === "GET") return getContact(req, res, contactId);
  if (method === "POST") return postContact(req, res);
  if (method === "PUT") return putContact(req, res);
  if (method === "DELETE") return deleteContact(req, res);
}
