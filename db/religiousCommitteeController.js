import { models } from "./models";
const { ReligiousCommittee } = models;
//get controller
export async function getReligiousCommittees(req, res) {
  try {
    const religiousCommittees = await ReligiousCommittee.findAll();
    if (religiousCommittees) {
      return await res.status(200).send(religiousCommittees);
    }
    return res.status(500).send({ error: "Oops! something wrong" });
  } catch (error) {
    res.status(500).send({ error: "Oops! something wrong" });
  }
}

//single committee
export async function getOneReligiousCommittee(req, res, religiousCommitteeId) {
  try {
    if (religiousCommitteeId) {
      const religiousCommittee = await ReligiousCommittee.findAll({
        where: {
          id: religiousCommitteeId
        }
      });
      if (religiousCommittee) return res.status(200).send(religiousCommittee);
    }
    res.status(404).json({ error: "religious committee not selected" });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the religious committee" });
  }
}

//post controller
export async function postReligiousCommittee(req, res) {
  try {
    const { formData } = req.body;
    const result = await ReligiousCommittee.create(formData);
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
export async function putReligiousCommittee(req, res) {
  try {
    const { models, religiousCommitteeId } = req.body;
    if (religiousCommitteeId) {
      const religiousCommittee = await ReligiousCommittee.findOne({
        where: { id: religiousCommitteeId }
      });
      if (religiousCommittee) {
        religiousCommittee.set(models);
        await religiousCommittee.save();
        return res
          .status(200)
          .send({ message: "Updated successfully", isUpdated: true });
      }
    }
    res
      .status(500)
      .json({ message: "religious committee not Selected...!", isUpdated: false });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while updating the data", isUpdated: false });
  }
}

//Delete controller
export async function deleteReligiousCommittee(req, res) {
  try {
    const { religiousCommitteeId } = req.body;
    if (religiousCommitteeId) {
      const religiousCommittee = await ReligiousCommittee.findOne({
        where: { id: religiousCommitteeId }
      });
      if (religiousCommittee) {
        await religiousCommittee.destroy();
        return await res
          .status(200)
          .send({ message: "Deleted successfully", isDeleted: true });
      }
    }
    return res
      .status(404)
      .json({ message: "religious committee not selected", isDeleted: false });
  } catch (error) {
    res.status(404).json({ error: "Error while deleting the religious committe" });
  }
}
