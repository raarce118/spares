const router = require('express').Router();
const purposeRoutes = require('./purpose-routes');
const usersRoutes = require('./users-routes');
const donationsRoutes = require('./donations-routes');

router.use('/purpose', purposeRoutes);
router.use('/users', usersRoutes);
router.use('/donations', donationsRoutes);

module.exports = router;