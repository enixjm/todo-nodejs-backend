const express = require("express")
const router = express()
const api = require('../controller/apis.js')

router.get('/read', api.read)
router.post('/create', api.create)
router.put('/update', api.update)
router.delete('/delete/:_id', api.delete)

module.exports = router;