import { models } from "./models";
const { EditorialCommittee } = models;
//get controller
export async function getEditorialCommittees(req, res) {
  try {
    const editorialCommittees = await EditorialCommittee.findAll();
    if (editorialCommittees) {
      return await res.status(200).send(editorialCommittees);
    }
    return res.status(500).send({ error: "Oops! something wrong" });
  } catch (error) {
    res.status(500).send({ error: "Oops! something wrong" });
  }
}

//single committee
export async function getOneEditorialCommittee(req, res, editorialCommitteeId) {
  try {
    if (editorialCommitteeId) {
      const editorialCommittee = await EditorialCommittee.findAll({
        where: {
          id: editorialCommitteeId
        }
      });
      if (editorialCommittee) return res.status(200).send(editorialCommittee);
    }
    res.status(404).json({ error: "editorial committee not selected" });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the editorial committee" });
  }
}

//post controller
export async function postEditorialCommittee(req, res) {
  try {
    const { formData } = req.body;
    // console.log(formData, "HELLO SERVER");
    const result = await EditorialCommittee.create(formData);
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
export async function putEditorialCommittee(req, res) {
  try {
    const { models, editorialCommitteeId } = req.body;
    if (editorialCommitteeId) {
      const editorialCommittee = await EditorialCommittee.findOne({
        where: { id: editorialCommitteeId }
      });
      if (editorialCommittee) {
        editorialCommittee.set(models);
        await editorialCommittee.save();
        return res
          .status(200)
          .send({ message: "Updated successfully", isUpdated: true });
      }
    }
    res
      .status(500)
      .json({ message: "Editorial committee not Selected...!", isUpdated: false });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while updating the data", isUpdated: false });
  }
}

//Delete controller
export async function deleteEditorialCommittee(req, res) {
  try {
    const { editorialCommitteeId } = req.body;
    if (editorialCommitteeId) {
      const editorialCommittee = await EditorialCommittee.findOne({
        where: { id:editorialCommitteeId }
      });
      if (editorialCommittee) {
        await editorialCommittee.destroy();
        return await res
          .status(200)
          .send({ message: "Deleted successfully", isDeleted: true });
      }
    }
    return res
      .status(404)
      .json({ message: "Editorial committee not selected", isDeleted: false });
  } catch (error) {
    res.status(404).json({ error: "Error while deleting the editorial committe" });
  }
}
