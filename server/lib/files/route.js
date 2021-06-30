const controller = require("./controller");
const router = require("express").Router();

router.post("/api/files", controller.createFile);
router.get("/api/files", controller.fetchAllFiles);
router.get("/api/files/:id", controller.fetchFile);
router.put("/api/files/:id", controller.updateFile);
router.delete("/api/files/:id", controller.deleteFile);

module.exports = router;
