var express = require("express");
var router = express.Router();

const useController = require("../controllers/users");

router.post("/new", useController.createNewUser);
router.get("/get", useController.getUsers);

module.exports = router;
