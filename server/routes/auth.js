import express from "express";
import passport from "passport";
import { failedLogin, loggedIn, logout } from "../controllers/auth.js";
import passportConfig from "../passport-setup.js";
import { isLoggedIn } from "../middleware/index.js";

const router = express.Router();
passportConfig(passport);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/log");
  }
);

router.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
  res.redirect("/");
});

export default router;
