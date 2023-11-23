import { hash } from "@/db/encrypt";
import { models } from "@/db/models";
import { getSession } from "next-auth/react";
const {Admins} = models;




async function CreateNewUser(req, res) {
    const session = await getSession({ req });
    if (session) return res.status(401).json({ unauthorized: true });
    const { username, password, role } = req.body;
  
    Admins.findAll({ where: { username } }).then((user) => {
      if (user.length > 0) {
        console.log("user already exist!", user);
        return res
          .status(409)
          .send(JSON.stringify({ err: "Username is unavailable!" }));
      } else {
        // Password Hash
        let hashed = hash(password);
        // newUser.password = hashed;
        let encrypted_data = { ...req.body, password: hashed };
        Admins.create(encrypted_data)
          .then((user) => {
            res.status(200).send(JSON.stringify(user));
          })
          .catch((err) => {
            console.log(err, "error Here create new user");
          });
      }
    }).catch = (err) => console.log(err);
  }
  

  async function GetUser(req, res) {
    const session = await getSession({ req });
    if (session) return res.status(401).json({ unauthorized: true });
  
    // Retrieve logic to get users
    Admins.findAll()
      .then((users) => {
        res.status(200).send(JSON.stringify(users));
      })
      .catch((err) => {
        console.log(err, "error retrieving users");
      });
  }


  async function UpdateUser(req, res) {
    const session = await getSession({ req });
    if (session) return res.status(401).json({ unauthorized: true });
  
    const { id } = req.query; // Assuming the user ID is passed in the query params
    const { username, password, role } = req.body;
  
    // Logic to update user
    Admins.findByPk(id)
      .then((user) => {
        if (!user) {
          return res.status(404).json({ error: "User not found" });
        }
  
        // Update user fields
        user.username = username;
        user.password = hash(password);
        user.role = role;
  
        user
          .save()
          .then((updatedUser) => {
            res.status(200).json(updatedUser);
          })
          .catch((err) => {
            console.log(err, "error updating user");
            res.status(500).json({ error: "Failed to update user" });
          });
      })
      .catch((err) => {
        console.log(err, "error finding user for update");
        res.status(500).json({ error: "Failed to update user" });
      });
  }


  async function deleteUser(req, res) {
    const session = await getSession({ req });
    if (!session) return res.status(401).json({ unauthorized: true });
  
    const { id } = req.query; // Assuming the user ID is passed in the query params
  
    Admins.findByPk(id)
      .then((user) => {
        if (!user) {
          return res.status(404).json({ error: "User not found" });
        }
  
        user
          .destroy()
          .then(() => {
            res.status(200).json({ success: true });
          })
          .catch((err) => {
            console.log(err, "Error deleting user");
            res.status(500).json({ error: "Failed to delete user" });
          });
      })
      .catch((err) => {
        console.log(err, "Error finding user for delete");
        res.status(500).json({ error: "Failed to delete user" });
      });
  }
  



  export default function handler(req, res) {
    if (req.method === "POST") return CreateNewUser(req, res);
    if (req.method === "GET") return GetUser(req, res);
    if (req.method === "PUT") return UpdateUser(req, res);
    if (req.method === "DELETE") return deleteUser(req, res);
  }
  