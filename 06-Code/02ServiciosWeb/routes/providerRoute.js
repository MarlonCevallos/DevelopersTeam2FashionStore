const ProviderController = require('../controller/Providers');
const express = require('express');
const router = express.Router();

router.get("/provider", ProviderController.getProviders);
router.post("/provider", ProviderController.createProvider);
router.get("/provider/:id", ProviderController.getProvider);
router.put("/provider/:id", ProviderController.updateProvider);
router.delete("/provider/:id", ProviderController.deleteProvider);

module.exports = router;