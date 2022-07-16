const express = require('express');
const { login, logout, getUser, myProfile, contact, updateUser, addTimeline, addProject, addCertificate, deleteTimeline, deleteProject, deleteCertificate } = require("../controller/UserController");
const { isAuthenticated } = require('../middlewares/auth');

const router = express.Router();

module.exports = router;

router.route("/login").post(login);

router.route("/logout").get(logout);

router.route("/getuser").get(getUser);

router.route("/me").get(isAuthenticated, myProfile);
router.route("/contact").post(contact);

router.route("/admin/update").put(updateUser);

router.route("/admin/timeline/add").post(isAuthenticated, addTimeline);
router.route("/admin/certificate/add").post(isAuthenticated, addCertificate);
router.route("/admin/project/add").post(isAuthenticated, addProject);

router.route("/admin/timeline/:id").delete(isAuthenticated, deleteTimeline);
router.route("/admin/project/:id").delete(isAuthenticated, deleteProject);
router.route("/admin/certificate/:id").delete(isAuthenticated, deleteCertificate);






