import { models } from "./models";
const { EstateCommittee } = models;
//get controller
export async function getEstateCommittees(req, res) {
  try {
    const estateCommittees = await EstateCommittee.findAll();
    if (estateCommittees) {
      return await res.status(200).send(estateCommittees);
    }
    return res.status(500).send({ error: "Oops! something wrong" });
  } catch (error) {
    res.status(500).send({ error: "Oops! something wrong" });
  }
}

//single committee
export async function getOneEstateCommittee(req, res, estateCommitteeId) {
  try {
    if (estateCommitteeId) {
      const estateCommittee = await EstateCommittee.findAll({
        where: {
          id: estateCommitteeId
        }
      });
      if (estateCommittee) return res.status(200).send(estateCommittee);
    }
    res.status(404).json({ error: "estate committee not selected" });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the estate committee" });
  }
}

//post controller
export async function postEstateCommittee(req, res) {
  try {
    const { formData } = req.body;
    const result = await EstateCommittee.create(formData);
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
export async function putEstateCommittee(req, res) {
  try {
    const { models, estateCommitteeId } = req.body;
    if (estateCommitteeId) {
      const estateCommittee = await EstateCommittee.findOne({
        where: { id: estateCommitteeId }
      });
      if (estateCommittee) {
        estateCommittee.set(models);
        await estateCommittee.save();
        return res
          .status(200)
          .send({ message: "Updated successfully", isUpdated: true });
      }
    }
    res
      .status(500)
      .json({ message: "Estate committee not Selected...!", isUpdated: false });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while updating the data", isUpdated: false });
  }
}

//Delete controller
export async function deleteEstateCommittee(req, res) {
  try {
    const { estateCommitteeId } = req.body;
    if (estateCommitteeId) {
      const estateCommittee = await EstateCommittee.findOne({
        where: { id: estateCommitteeId }
      });
      if (estateCommittee) {
        await estateCommittee.destroy();
        return await res
          .status(200)
          .send({ message: "Deleted successfully", isDeleted: true });
      }
    }
    return res
      .status(404)
      .json({ message: "estate committee not selected", isDeleted: false });
  } catch (error) {
    res.status(404).json({ error: "Error while deleting the estate committe" });
  }
}
