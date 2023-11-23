import { models } from "./models";
const { ProcurementCommittee} = models;
//get controller
export async function getProcurementCommittees(req, res) {
  try {
    const procurementCommittees = await ProcurementCommittee.findAll();
    if (procurementCommittees) {
      return await res.status(200).send(procurementCommittees);
    }
    return res.status(500).send({ error: "Oops! something wrong" });
  } catch (error) {
    res.status(500).send({ error: "Oops! something wrong" });
  }
}

//single committee
export async function getOneProcurenmentCommittee(req, res, procurementCommitteeId) {
  try {
    if (procurementCommitteeId) {
      const procurementCommittee = await ProcurementCommittee.findAll({
        where: {
          id: procurementCommitteeId
        }
      });
      if (procurementCommittee) return res.status(200).send(procurementCommittee);
    }
    res.status(404).json({ error: "procurement committee not selected" });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the procurement committee" });
  }
}

//post controller
export async function postProcurementCommittee(req, res) {
  try {
    const { formData } = req.body;
    const result = await ProcurementCommittee.create(formData);
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
export async function putProcurementCommittee(req, res) {
  try {
    const { models, procurementCommitteeId } = req.body;
    if (procurementCommitteeId) {
      const procurementCommittee = await ProcurementCommittee.findOne({
        where: { id: procurementCommitteeId }
      });
      if (procurementCommittee) {
        procurementCommittee.set(models);
        await procurementCommittee.save();
        return res
          .status(200)
          .send({ message: "Updated successfully", isUpdated: true });
      }
    }
    res
      .status(500)
      .json({ message: "Procurement committee not Selected...!", isUpdated: false });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while updating the data", isUpdated: false });
  }
}

//Delete controller
export async function deleteProcurementCommittee(req, res) {
  try {
    const { procurementCommitteeId } = req.body;
    if (procurementCommitteeId) {
      const procurementCommittee = await ProcurementCommittee.findOne({
        where: { id: procurementCommitteeId }
      });
      if (procurementCommittee) {
        await procurementCommittee.destroy();
        return await res
          .status(200)
          .send({ message: "Deleted successfully", isDeleted: true });
      }
    }
    return res
      .status(404)
      .json({ message: "procurement committee not selected", isDeleted: false });
  } catch (error) {
    res.status(404).json({ error: "Error while deleting the procurement committe" });
  }
}
