const ProviderController = require('../controller/Providers')
const express = require('express')
const router = express.Router()

router.post('/addProvider',ProviderController.createProvider)
router.get('/providers',ProviderController.getProviders)
router.put('/updateProvider',ProviderController.updateProvider)
router.delete('/deleteProvider',ProviderController.deleteProvider)

module.exports = router