import { models } from "@/db/models";
const {Admins} = models;

export default async function handler(req, res) {
    const { adminId } = req.body;
    try {
        await Admins.destroy({
            where: {
              id: adminId,
            },
          });
          res.status(200).json({ message: 'Admin deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Unable to delete admin' });
    }
}