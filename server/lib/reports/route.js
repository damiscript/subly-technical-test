const controller = require("./controller");
const router = require("express").Router();

router.get("/api/reports/files/all/user", controller.fetchFilesPerUser);
router.get("/api/reports/files/all/type", controller.fetchFilesPerType);
router.get(
  "/api/reports/files/avg/size/user",
  controller.fetchAverageFileSizePerUser
);
router.get(
  "/api/reports/files/avg/duration/user",
  controller.fetchAverageFileDurationPerUser
);

module.exports = router;
