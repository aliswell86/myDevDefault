
var express = require("express");
var router = express.Router();
var header_txt = "관리자 - 던포";
var header_description = "던포 - 던파의 모든정보!";

router.get("/", function(req, res) {
  res.render("admin/admin",{title:header_txt,description:header_description});
});

module.exports = router;
