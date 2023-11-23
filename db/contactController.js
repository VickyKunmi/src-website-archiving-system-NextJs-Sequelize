import { models } from "./models";
const { Contacts } = models;
//get controller
export async function getContacts(req, res) {
  try {
    const contacts = await Contacts.findAll();
    if (contacts) {
      console.log(contacts, "serverside");
      return await res.status(200).send(contacts);
    }
    return res.status(500).send({ error: "Oops! something wrong" });
  } catch (error) {
    res.status(500).send({ error: "Oops! something wrong" });
  }
}

//single contact
export async function getContact(req, res, contactId) {
  try {
    if (contactId) {
      const contact = await Contacts.findAll({
        where: {
          id: contactId
        }
      });
      if (contact) return res.status(200).send(contact);
    }
    res.status(404).json({ error: "Contact not selected" });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the contact" });
  }
}

//post controller
export async function postContact(req, res) {
  try {
    const { formData } = req.body;
    console.log(formData, "HELLO SERVER");
    const result = await Contacts.create(formData);
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
export async function putContact(req, res) {
  try {
    const { models, contactId } = req.body;
    console.log(models, contactId, "contact");
    if (contactId) {
      const contact = await Contacts.findOne({
        where: { id: contactId }
      });
      if (contact) {
        contact.set(models);
        await contact.save();
        return res
          .status(200)
          .send({ message: "Updated successfully", isUpdated: true });
      }
    }
    res
      .status(500)
      .json({ message: "Contact not Selected...!", isUpdated: false });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while updating the data", isUpdated: false });
  }
}

//Delete controller
export async function deleteContact(req, res) {
  try {
    const { contactId } = req.body;
    if (contactId) {
      const contact = await Contacts.findOne({
        where: { id: contactId }
      });
      if (contact) {
        await contact.destroy();
        return await res
          .status(200)
          .send({ message: "Deleted successfully", isDeleted: true });
      }
    }
    return res
      .status(404)
      .json({ message: "Contact not selected", isDeleted: false });
  } catch (error) {
    res.status(404).json({ error: "Error while deleting the contact" });
  }
}
