import {models} from "./models";
const {StudentsProjects} = models;

export async function getProjects(req, res) {
    try{
        const projects = await StudentsProjects.findAll();
        if (projects) {

          return await res.status(200).send(projects);
        } 
        return res.status(404).send(null);
    } catch (error) {
        res.status(500).send({ error: "Oops! something wrong" });
    }
}




export async function getProject(req, res) {
  const {projectId} = req.query;
    try {
      if (projectId) {
        const projectdata = await StudentsProjects.findAll({
          where: {
            id: projectId
          }
        });
        if (projectdata) return res.status(200).send(projectdata);
      }
      // res.status(404).json({ error: "project not selected" });
    } catch (error) {
      res.status(404).json({ error: "Cannot get the project" });
    }
  }


  export async function getProjectUser(req, res) {
    const {projectId} = req.query;
      try {
        if (projectId) {
          const projectdata = await StudentsProjects.findOne({
            where: {
              id: projectId
            }
          });
          if (projectdata) return res.status(200).send(projectdata);
        }
        // res.status(404).json({ error: "project not selected" });
      } catch (error) {
        res.status(404).json({ error: "Cannot get the project" });
      }
    }
  
 //post controller
export async function postProject(req, res) {
  try {
    // const { formData } = req.body;
    // console.log(formData, "HELLO SERVER");
    const result = await StudentsProjects.create(req.body);
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
  export async function putProject(req, res) {
    try {
      const { models, projectId } = req.body;
      console.log(models, projectId, "project");
      if (projectId) {
        const project = await StudentsProjects.findOne({
          where: { id: projectId }
        });
        if (project) {
          project.set(models);
          await project.save();
          return res
            .status(200)
            .send({ message: "Updated successfully", isUpdated: true });
        }
      }
      res
        .status(500)
        .json({ message: "project not Selected...!", isUpdated: false });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error while updating the data", isUpdated: false });
    }
  }
  
  //Delete controller
  export async function deleteProject(req, res) {
    try {
      const { projectId } = req.body;
      if (projectId) {
        const project = await StudentsProjects.findOne({
          where: { id: projectId }
        });
        if (project) {
          await project.destroy();
          return await res
            .status(200)
            .send({ message: "Deleted successfully", isDeleted: true });
        }
      }
      return res
        .status(404)
        .json({ message: "project not selected", isDeleted: false });
    } catch (error) {
      res.status(404).json({ error: "Error while deleting the executive" });
    }
  }
  