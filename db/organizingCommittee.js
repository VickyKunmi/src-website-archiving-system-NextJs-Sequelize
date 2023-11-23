import { models } from "./models";
const { OrganizingCommittee } = models;
//get controller
export async function getOrganizingCommittees(req, res) {
  try {
    const organizingCommittees = await OrganizingCommittee.findAll();
    if (organizingCommittees) {
      return await res.status(200).send(organizingCommittees);
    }
    return res.status(500).send({ error: "Oops! something wrong" });
  } catch (error) {
    res.status(500).send({ error: "Oops! something wrong" });
  }
}

//single committee
export async function getOneOrganizingCommittee(req, res, organizingCommitteeId) {
  try {
    if (organizingCommitteeId) {
      const organizingCommittee = await OrganizingCommittee.findAll({
        where: {
          id: organizingCommitteeId
        }
      });
      if (organizingCommittee) return res.status(200).send(organizingCommittee);
    }
    res.status(404).json({ error: "Organizing committee not selected" });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the organizing committee" });
  }
}

//post controller
export async function postOrganizingCommittee(req, res) {
  try {
    const { formData } = req.body;
    const result = await OrganizingCommittee.create(formData);
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
export async function putOrganizingCommittee(req, res) {
  try {
    const { models, organizingCommitteeId } = req.body;
    if (organizingCommitteeId) {
      const organizingCommittee = await OrganizingCommittee.findOne({
        where: { id: organizingCommitteeId }
      });
      if (organizingCommittee) {
        organizingCommittee.set(models);
        await organizingCommittee.save();
        return res
          .status(200)
          .send({ message: "Updated successfully", isUpdated: true });
      }
    }
    res
      .status(500)
      .json({ message: "Organizingcommittee not Selected...!", isUpdated: false });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while updating the data", isUpdated: false });
  }
}

//Delete controller
export async function deleteOrganizingCommittee(req, res) {
  try {
    const { organizingCommitteeId } = req.body;
    if (organizingCommitteeId) {
      const organizingCommittee = await OrganizingCommittee.findOne({
        where: { id: organizingCommitteeId }
      });
      if (organizingCommittee) {
        await organizingCommittee.destroy();
        return await res
          .status(200)
          .send({ message: "Deleted successfully", isDeleted: true });
      }
    }
    return res
      .status(404)
      .json({ message: "Organizing committee not selected", isDeleted: false });
  } catch (error) {
    res.status(404).json({ error: "Error while deleting the Organizing committe" });
  }
}
