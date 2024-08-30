import { Router } from "express";

const router = Router()

router.route("/signup").post(signUpUser)
router.route("/courses").get(getCourses)
router.route("/courses/:courseId").post(puechaseCourses)
router.route("/purchasedCourses").get(getpuechasedCourses)

export default router