import { models } from "./models";
const { AcademicCommittee } = models;
//get controller
export async function getAcademicCommittees(req, res) {
  try {
    const academicCommittees = await AcademicCommittee.findAll();
    if (academicCommittees) {
      // console.log(academicCommittees, "serverside");
      return await res.status(200).send(academicCommittees);
    }
    return res.status(500).send({ error: "Oops! something wrong" });
  } catch (error) {
    res.status(500).send({ error: "Oops! something wrong" });
  }
}

//single committee
export async function getOneAcademicCommittee(req, res, academicCommitteeId) {
  try {
    if (academicCommitteeId) {
      const academicCommittee = await AcademicCommittee.findAll({
        where: {
          id: academicCommitteeId
        }
      });
      if (academicCommittee) return res.status(200).send(academicCommittee);
    }
    res.status(404).json({ error: "Academic committee not selected" });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the academic committee" });
  }
}

//post controller
export async function postAcademicCommittee(req, res) {
  try {
    const { formData } = req.body;
    // console.log(formData, "HELLO SERVER");
    const result = await AcademicCommittee.create(formData);
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
export async function putAcademicCommittee(req, res) {
  try {
    const { models, academicCommitteeId } = req.body;
    if (academicCommitteeId) {
      const academicCommittee = await AcademicCommittee.findOne({
        where: { id: academicCommitteeId }
      });
      if (academicCommittee) {
        academicCommittee.set(models);
        await academicCommittee.save();
        return res
          .status(200)
          .send({ message: "Updated successfully", isUpdated: true });
      }
    }
    res
      .status(500)
      .json({ message: "Academic committee not Selected...!", isUpdated: false });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while updating the data", isUpdated: false });
  }
}

//Delete controller
export async function deleteAcademicCommittee(req, res) {
  try {
    const { academicCommitteeId } = req.body;
    if (academicCommitteeId) {
      const academicCommittee = await AcademicCommittee.findOne({
        where: { id: academicCommitteeId }
      });
      if (academicCommittee) {
        await academicCommittee.destroy();
        return await res
          .status(200)
          .send({ message: "Deleted successfully", isDeleted: true });
      }
    }
    return res
      .status(404)
      .json({ message: "Academic committee not selected", isDeleted: false });
  } catch (error) {
    res.status(404).json({ error: "Error while deleting the academic committe" });
  }
}
