const router = require('express').Router();
const purposeRoutes = require('./purpose-Routes');
const usersRoutes = require('./users-routes');

router.use('/purpose', purposeRoutes);
router.use('/users', usersRoutes);

module.exports = router;