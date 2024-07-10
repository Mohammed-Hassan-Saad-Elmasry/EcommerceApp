import * as authcontroller from "./controller/auth.js";
import { validation } from "../../middleware/validation.js";
import * as validators from "./auth.validation.js";
import { Router } from "express";
const router = Router();
router.post("/signup", validation(validators.signup), authcontroller.signup);
router.post("/login", validation(validators.login), authcontroller.Login);
router.patch(
  "/sendcode",
  validation(validators.sendCode),
  authcontroller.sendCode
);
router.patch(
  "/forgetpassword",
  validation(validators.forgetpassword),
  authcontroller.forgetpassword
);
export default router;
