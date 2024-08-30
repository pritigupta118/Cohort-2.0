import { Router} from "express";

const router = Router()

router.route("/signup").post(signUpAdmin)
router.route("/courses").post(updateCourses)
router.route("/courses").get(getCourses)

export default router