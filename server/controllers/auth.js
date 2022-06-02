import express from "express";
const router = express.Router();

export const failedLogin = async (req, res) => {
  res.send("You failed to login");
};

export const loggedIn = async (req, res) => {
  console.log(`Welcome ${req.user.email}`);
  res.send(`Welcome ${req.user.email}`);
};

export default router;
