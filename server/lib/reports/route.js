const controller = require("./controller");
const router = require("express").Router();

router.get("/api/reports/files/all/user", controller.fetchFilesPerUser);
router.get("/api/reports/files/all/type", controller.fetchFilesPerType);
router.get(
  "/api/reports/files/avgSize/user",
  controller.fetchAverageFileSizePerUser
);
router.get(
  "/api/reports/files/avgDuration/user",
  controller.fetchAverageFileDurationPerUser
);

module.exports = router;
