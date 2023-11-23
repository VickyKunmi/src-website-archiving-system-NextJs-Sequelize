import {
  getEvents,
  postEvent,
  putEvent,
  deleteEvent,
} from "@/db/eventController";

export default async function handler(req, res){
    const { method } = req;
  switch (method) {
    case "GET":
      // get all events
      getEvents(req, res);
      break;
    case "POST":
      postEvent(req, res);
      break;
    case "PUT":
      putEvent(req, res);
      break;
    default:
      deleteEvent(req, res);
      break;
  }
}