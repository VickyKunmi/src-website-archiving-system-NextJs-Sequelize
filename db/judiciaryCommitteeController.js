import { models } from "./models";
const { JudiciaryCommittee } = models;
//get controller
export async function getJudiciaryCommittees(req, res) {
  try {
    const judiciaryCommittees = await JudiciaryCommittee.findAll();
    if (judiciaryCommittees) {
      return await res.status(200).send(judiciaryCommittees);
    }
    return res.status(500).send({ error: "Oops! something wrong" });
  } catch (error) {
    res.status(500).send({ error: "Oops! something wrong" });
  }
}

//single committee
export async function getOneJudiciaryCommittee(req, res, judiciaryCommitteeId) {
  try {
    if (judiciaryCommitteeId) {
      const judiciaryCommittee = await JudiciaryCommittee.findAll({
        where: {
          id: judiciaryCommitteeId
        }
      });
      if (judiciaryCommittee) return res.status(200).send(judiciaryCommittee);
    }
    res.status(404).json({ error: "judiciary committee not selected" });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the judiciary committee" });
  }
}

//post controller
export async function postJudiciaryCommittee(req, res) {
  try {
    const { formData } = req.body;
    const result = await JudiciaryCommittee.create(formData);
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
export async function putJudiciaryCommittee(req, res) {
  try {
    const { models, judiciaryCommitteeId } = req.body;
    if (judiciaryCommitteeId) {
      const judiciaryCommittee = await JudiciaryCommittee.findOne({
        where: { id: judiciaryCommitteeId }
      });
      if (judiciaryCommittee) {
        judiciaryCommittee.set(models);
        await judiciaryCommittee.save();
        return res
          .status(200)
          .send({ message: "Updated successfully", isUpdated: true });
      }
    }
    res
      .status(500)
      .json({ message: "judiciary committee not Selected...!", isUpdated: false });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while updating the data", isUpdated: false });
  }
}

//Delete controller
export async function deleteJudiciaryCommittee(req, res) {
  try {
    const { judiciaryCommitteeId } = req.body;
    if (judiciaryCommitteeId) {
      const judiciaryCommittee = await JudiciaryCommittee.findOne({
        where: { id: judiciaryCommitteeId }
      });
      if (judiciaryCommittee) {
        await judiciaryCommittee.destroy();
        return await res
          .status(200)
          .send({ message: "Deleted successfully", isDeleted: true });
      }
    }
    return res
      .status(404)
      .json({ message: "judiciary committee not selected", isDeleted: false });
  } catch (error) {
    res.status(404).json({ error: "Error while deleting the judiciary committe" });
  }
}
