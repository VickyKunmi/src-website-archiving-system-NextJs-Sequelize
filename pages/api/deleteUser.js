
import { models } from "../../db/models";

const { Admins, sequelize } = models;

export async function deleteUser(id) {
  try {
    const user = await Admins.findByPk(id);
    if (!user) {
      throw new Error("User not found");
    }
    await user.destroy();
    console.log("User deleted successfully");
    // Perform any necessary actions after successful deletion
  } catch (error) {
    console.error("Failed to delete user:", error.message);
   
    throw error; 
  }
}
