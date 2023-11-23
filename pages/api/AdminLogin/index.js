import bcrypt from "bcryptjs";
import { models } from "@/db/models";

const { Admins } = models;

const sendSuccessResponse = async ({ res, admin }) => {
  const { id, username, role } = admin;
  const validUser = {
    id,
    username,
    role,
  };
  await res.status(200).json(validUser);
};

const sendErrorResponse = async ({ res, message }) => {
  await res.status(401).json({ error: message });
};

const validateUser = async ({ password, admin, res }) => {
  const hashedPassword = admin.password;
  const isMatch = await bcrypt.compare(password, hashedPassword);
  if (isMatch) {
    return sendSuccessResponse({ res, admin });
  } else {
    return sendErrorResponse({ res, message: "Invalid credentials" });
  }
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password, role } = req.body;
    const admin = await Admins.findOne({ where: { username, role }, raw: true });
    if (admin) {
      return validateUser({ password, admin, res });
    } else {
      return sendErrorResponse({ res, message: "Invalid credentials" });
    }
  }
}
