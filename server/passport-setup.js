import { Strategy } from "passport-google-oauth20";
import User from "./models/user.js";
import dotenv from "dotenv";

dotenv.config();

export default (passport) => {
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

  passport.use(
    new Strategy(
      {
        clientID: process.env["CLIENT_ID"],
        clientSecret: process.env["CLIENT_SECRET"],
        callbackURL: "http://localhost:3000/google/callback",
        scope: ["profile", "email"],
      },
      function (accessToken, refreshToken, profile, done) {
        //use the profile info mainly profile id to check if the user is registered in your db
        User.findOne({ id: profile.id }, function (err, user) {
          if (err) return done(err);
          if (!user) {
            user = new User({
              id: profile.id,
              name: profile.name,
              email: profile?.email,
            });
            user.save(function (err) {
              if (err) console.log(err);
              return done(err, user);
            });
          } else {
            return done(err, user);
          }
        });
      }
    )
  );
};
