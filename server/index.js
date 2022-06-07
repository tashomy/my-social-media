import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import session from "express-session";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import passport from "passport";
import cookieSession from "cookie-session";

import MongoStore from "connect-mongo";

import "./passport-setup.js";

const app = express();
dotenv.config();
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error));

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(
  session({
    secret: process.env["CLIENT_SECRET"],
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.CONNECTION_URL,
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/posts", postRoutes);
app.use("/", authRoutes);
