const controller = require("./controller");
const router = require("express").Router();

router.post("/api/users", controller.createUser);
router.get("/api/users", controller.fetchAllUsers);
router.get("/api/users/:id", controller.fetchUser);
router.put("/api/users/:id", controller.updateUser);
router.delete("/api/users/:id", controller.deleteUser);

module.exports = router;
