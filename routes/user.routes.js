const express = require("express");
const routes = express.Router();

const { registerUser, loginUser, getProfile } = require("../controllers/user.controller");
const { authMiddleware, isDeleted } = require("../middlewares/auth.middleware");

routes.post("/register", registerUser);
routes.post("/login", loginUser);
routes.get("/me", authMiddleware, isDeleted, getProfile);
// routes.get("/:id", getUserById);
// routes.put("/update/:id", updateUser);
// routes.put("/delete/:id", deleteUser);

module.exports = routes;
