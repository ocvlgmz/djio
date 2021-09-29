const { Router } = require('express')
const mailerCtrl = require('../controllers/mailerCtrl')

const router = Router()

router.post('/', mailerCtrl.sendForm)

module.exports = router