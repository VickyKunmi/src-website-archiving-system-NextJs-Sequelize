import {models} from "./models";

const {Students} = models;

export async function getStudents(req, res) {
    try{
        const studnets = await Students.findAll();
        if(students) {
            return await res.status(200).send(studnets);
        }
        return res.status(500).send({error: "oops! something went wrong"});
    } catch(error){
        return res.status(500).send({error: "oops! something went wrong"});
    }
}




export async function getStudent(req, res, studentId) {
    try {
      if (studentId) {
        const student = await Students.findAll({
          where: {
            id: studentId
          }
        });
        if (student) return res.status(200).send(student);
      }
      res.status(404).json({ error: "student not selected" });
    } catch (error) {
      res.status(404).json({ error: "Cannot get the student" });
    }
  }


  export async function postStudent(req, res) {
    try {
      const { formData } = req.body;
      const result = await Students.create(formData);
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


  export async function putStudent(req, res) {
    try {
      const { models, studentId } = req.body;
      if (studentId) {
        const student = await Students.findOne({
          where: { id: studentId }
        });
        if (student) {
          student.set(models);
          await student.save();
          return res
            .status(200)
            .send({ message: "Updated successfully", isUpdated: true });
        }
      }
      res
        .status(500)
        .json({ message: "student not Selected...!", isUpdated: false });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error while updating the data", isUpdated: false });
    }
  }



  export async function deleteStudent(req, res) {
    try {
      const { studentId } = req.body;
      if (studentId) {
        const student = await Students.findOne({
          where: { id: studentId }
        });
        if (student) {
          await student.destroy();
          return await res
            .status(200)
            .send({ message: "Deleted successfully", isDeleted: true });
        }
      }
      return res
        .status(404)
        .json({ message: "student not selected", isDeleted: false });
    } catch (error) {
      res.status(404).json({ error: "Error while deleting the student" });
    }
  }