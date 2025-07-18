const express = require("express");
const userController = require("../Controllers/user.controllers");
const { authenticate } = require("../Middlewares/auth.middleware");
const { authorize } = require("../Middlewares/rbac.middleware");
const validateRequest = require("../Middlewares/validate-request.middleware");
const { createUserSchema } = require("../validators/user.schema");
const router = express.Router();

console.log('findAll:', typeof userController.findAll);
console.log('authenticate:', typeof authenticate);
console.log('typeof authenticate:', typeof authenticate);

router.post(
  "/",
  userController.create
);
router.get("/", authenticate, userController.findAll);
router.get("/:id", userController.findOne);
router.put("/:id", userController.update);
router.delete(
  "/:id",
  authenticate,
  authorize(["admin", "user"]),
  userController.delete
);

module.exports = router;