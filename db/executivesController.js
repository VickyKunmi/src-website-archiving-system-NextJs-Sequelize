import { models } from "./models";
const { Executives } = models;
//get controller
export async function getExecutives(req, res) {
  try {
    const executives = await Executives.findAll();
    if (executives) {
      console.log(executives, "serverside");
      return await res.status(200).send(executives);
    }
    return res.status(500).send({ error: "Oops! something wrong" });
  } catch (error) {
    res.status(500).send({ error: "Oops! something wrong" });
  }
}

//single executive
export async function getExecutive(req, res, executiveId) {
  try {
    if (executiveId) {
      const executive = await Executives.findAll({
        where: {
          id: executiveId
        }
      });
      if (executive) return res.status(200).send(executive);
    }
    res.status(404).json({ error: "Executive not selected" });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the executive" });
  }
}

//post controller
export async function postExecutive(req, res) {
  try {
    const { formData } = req.body;
    // console.log(formData, "HELLO SERVER");
    const result = await Executives.create(formData);
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
export async function putExecutive(req, res) {
  try {
    const { models, executiveId } = req.body;
    // console.log(models, executiveId, "executive");
    if (executiveId) {
      const executive = await Executives.findOne({
        where: { id: executiveId }
      });
      if (executive) {
        executive.set(models);
        await executive.save();
        return res
          .status(200)
          .send({ message: "Updated successfully", isUpdated: true });
      }
    }
    res
      .status(500)
      .json({ message: "Executive not Selected...!", isUpdated: false });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while updating the data", isUpdated: false });
  }
}

//Delete controller
export async function deleteExecutive(req, res) {
  try {
    const { executiveId } = req.body;
    if (executiveId) {
      const executive = await Executives.findOne({
        where: { id: executiveId }
      });
      if (executive) {
        await executive.destroy();
        return await res
          .status(200)
          .send({ message: "Deleted successfully", isDeleted: true });
      }
    }
    return res
      .status(404)
      .json({ message: "Executive not selected", isDeleted: false });
  } catch (error) {
    res.status(404).json({ error: "Error while deleting the executive" });
  }
}
