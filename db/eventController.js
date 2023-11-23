import { models } from "./models";
const { Events } = models;
//get controller
export async function getEvents(req, res) {
  try {
    const events = await Events.findAll();
    if (events) {
      console.log(events, "serverside");
      return await res.status(200).send(events);
    }
    return res.status(500).send({ error: "Oops! something wrong" });
  } catch (error) {
    res.status(500).send({ error: "Oops! something wrong" });
  }
}

//single event
export async function getOneEvent(req, res) {
  const {eventId} = req.query;
  try {
    if (eventId) {
      const eventdata = await Events.findOne({
        where: {
          id: eventId
        }
      });
      if (eventdata) return res.status(200).send(eventdata);
    }
    // res.status(404).json({ error: "Event not selected" });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the event" });
  }
}

//post controller
export async function postEvent(req, res) {
  try {
    const { formData } = req.body;
    // console.log(formData, "HELLO SERVER");
    const result = await Events.create(formData);
    if (result)
      return res
        .status(200)
        .send({ message: "Saved successfully", isSaved: true });
    if (!result)
      return res
        .status(500)
        .send({ message: "ooppss something went wrong!", isSaved: false });
  } catch (error) {
    return res.status(404).json({ error });
  }
}

//put controller
export async function putEvent(req, res) {
  try {
    const { models, eventId } = req.body;
    // console.log(models, eventId, "event");
    if (eventId) {
      const event = await Events.findOne({
        where: { id: eventId }
      });
      if (event) {
        event.set(models);
        await event.save();
        return res
          .status(200)
          .send({ message: "Updated successfully", isUpdated: true });
      }
    }
    res
      .status(500)
      .json({ message: "News not Selected...!", isUpdated: false });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while updating the data", isUpdated: false });
  }
}

//Delete controller
export async function deleteEvent(req, res) {
  try {
    const { eventId } = req.body;
    if (eventId) {
      const event = await Events.findOne({
        where: { id: eventId }
      });
      if (event) {
        await event.destroy();
        return await res
          .status(200)
          .send({ message: "Deleted successfully", isDeleted: true });
      }
    }
    return res
      .status(404)
      .json({ message: "Event not selected", isDeleted: false });
  } catch (error) {
    res.status(404).json({ error: "Error while deleting the event" });
  }
}
