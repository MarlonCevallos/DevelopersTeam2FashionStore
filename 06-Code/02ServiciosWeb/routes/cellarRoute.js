const CellarController = require("../controller/Cellar");
const express = require("express");
const router = express.Router();

router.get("/cellar", CellarController.getCellars);
router.post("/cellar", CellarController.createCellar);
router.get("/cellar/:id", CellarController.getCellar);
router.put("/cellar/:id", CellarController.updateCellar);
router.delete("/cellar/:id", CellarController.deleteCellar);

module.exports = router;
