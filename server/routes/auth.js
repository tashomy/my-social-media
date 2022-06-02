import express from "express";
import passport from "passport";
import { failedLogin, loggedIn } from "../controllers/auth.js";
import passportConfig from "../passport-setup.js";
import { isLoggedIn } from "../middleware/index.js";

const router = express.Router();
passportConfig(passport);

router.get("/", passport.authenticate("google"));

router.get("/failed", failedLogin);
router.get("/good", isLoggedIn, loggedIn);

router.get(
  "/callback",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/good");
  }
);

export default router;
