import { models } from "./models";
const { Associations } = models;
//get controller
export async function getAssociations(req, res) {
  try {
    const associations = await Associations.findAll();
    if (associations) {
      console.log(associations, "serverside");
      return await res.status(200).send(associations);
    }
    return res.status(500).send({ error: "Oops! something wrong" });
  } catch (error) {
    res.status(500).send({ error: "Oops! something wrong" });
  }
}

//single association
export async function getAssociation(req, res, associationId) {
  try {
    if (associationId) {
      const association = await Associations.findAll({
        where: {
          id: associationId
        }
      });
      if (association) return res.status(200).send(association);
    }
    res.status(404).json({ error: "Association not selected" });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the association" });
  }
}

//post controller
export async function postAssociation(req, res) {
  try {
    const { formData } = req.body;
    console.log(formData, "HELLO SERVER");
    const result = await Associations.create(formData);
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
export async function putAssociation(req, res) {
  try {
    const { models, associationId } = req.body;
    console.log(models, associationId, "association");
    if (associationId) {
      const association = await Associations.findOne({
        where: { id: associationId }
      });
      if (association) {
        association.set(models);
        await association.save();
        return res
          .status(200)
          .send({ message: "Updated successfully", isUpdated: true });
      }
    }
    res
      .status(500)
      .json({ message: "Association not Selected...!", isUpdated: false });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while updating the data", isUpdated: false });
  }
}

//Delete controller
export async function deleteAssociation(req, res) {
  try {
    const { associationId } = req.body;
    if (associationId) {
      const association = await Associations.findOne({
        where: { id: associationId }
      });
      if (association) {
        await association.destroy();
        return await res
          .status(200)
          .send({ message: "Deleted successfully", isDeleted: true });
      }
    }
    return res
      .status(404)
      .json({ message: "Association not selected", isDeleted: false });
  } catch (error) {
    res.status(404).json({ error: "Error while deleting the executive" });
  }
}
