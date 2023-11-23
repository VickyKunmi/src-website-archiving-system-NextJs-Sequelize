import {
  getContacts,
  postContact,
  deleteContact,
  putContact,
} from "@/db/contactController";

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      // get all contact
      getContacts(req, res);
      break;
    case "POST":
      postContact(req, res);
      break;
    case "PUT":
      putContact(req, res);
      break;
    default:
      deleteContact(req, res);
      break;
  }
}
