import {
  getOneEvent,
  postEvent,
  putEvent,
  deleteEvent,
} from "@/db/eventController";


export default async function handler(req, res) {
    const { eventId } = req.query;
    const { method } = req;
    if (method === "GET") return getOneEvent(req, res, eventId);
    if (method === "POST") return postEvent(req, res);
    if (method === "PUT") return putEvent(req, res);
    if (method === "DELETE") return deleteEvent(req, res);
  }