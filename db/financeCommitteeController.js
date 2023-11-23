import { models } from "./models";
const { FinanceCommittee } = models;
//get controller
export async function getFinanceCommittees(req, res) {
  try {
    const financeCommittees = await FinanceCommittee.findAll();
    if (financeCommittees) {
      return await res.status(200).send(financeCommittees);
    }
    return res.status(500).send({ error: "Oops! something wrong" });
  } catch (error) {
    res.status(500).send({ error: "Oops! something wrong" });
  }
}

//single committee
export async function getOneFinanceCommittee(req, res, financeCommitteeId) {
  try {
    if (financeCommitteeId) {
      const financeCommittee = await FinanceCommittee.findAll({
        where: {
          id: financeCommitteeId
        }
      });
      if (financeCommittee) return res.status(200).send(financeCommittee);
    }
    res.status(404).json({ error: "finance committee not selected" });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the finance committee" });
  }
}

//post controller
export async function postFinanceCommittee(req, res) {
  try {
    const { formData } = req.body;
    const result = await FinanceCommittee.create(formData);
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
export async function putFinanceCommittee(req, res) {
  try {
    const { models, financeCommitteeId } = req.body;
    if (financeCommitteeId) {
      const financeCommittee = await FinanceCommittee.findOne({
        where: { id: financeCommitteeId }
      });
      if (financeCommittee) {
        financeCommittee.set(models);
        await financeCommittee.save();
        return res
          .status(200)
          .send({ message: "Updated successfully", isUpdated: true });
      }
    }
    res
      .status(500)
      .json({ message: "finance committee not Selected...!", isUpdated: false });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while updating the data", isUpdated: false });
  }
}

//Delete controller
export async function deleteFinanceCommittee(req, res) {
  try {
    const { financeCommitteeId } = req.body;
    if (financeCommitteeId) {
      const financeCommittee = await FinanceCommittee.findOne({
        where: { id: financeCommitteeId }
      });
      if (financeCommittee) {
        await financeCommittee.destroy();
        return await res
          .status(200)
          .send({ message: "Deleted successfully", isDeleted: true });
      }
    }
    return res
      .status(404)
      .json({ message: "finance committee not selected", isDeleted: false });
  } catch (error) {
    res.status(404).json({ error: "Error while deleting the finance committe" });
  }
}
