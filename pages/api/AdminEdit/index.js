import { models } from "@/db/models";
const {Admins} = models;

export default async function handler(req, res) {
    const { adminId, username, password, role } = req.body;
    try {
        const admin = await Admins.findOne({
            where: {
                id: adminId,
              },
        });
        if(admin) {
            admin.username = username;
            admin.password = password;
            admin.role = role;
            await admin.save();

            res.status(200).json(admin);
        } else{
            res.status(404).json({ error: 'Admin not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Unable to edit admin' });
    }
}