const router = require('express').Router();
// const { users, purpose, biofluids } = require('../../models');

router.get('/', (req, res) => {
    res.render('../views/home')
})

router.get('/loggedin', (req, res) => {
    res.render('../views/partials/loggedin', {
        loggedIn: true,
        userName: 'Chris',
        organs: [{}]
    });
});


module.exports = router;