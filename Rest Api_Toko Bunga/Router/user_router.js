/*
Bandar Lampung Indonesia
12/12/2021
SALSABILLA DWI OKTALIA NPM 19411060
RIFQI FAVIAN NPM 19411057
*/
const router = require('express').Router()
const userController = require('../Controller/user_controller')
router.post('/sign-up', (req, res) => {
  userController.register(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.post('/sign-in', (req, res) => {
  userController.login(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
module.exports = router