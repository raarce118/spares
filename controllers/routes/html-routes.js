const router = require('express').Router();
const { users, donations } = require('../../models');

// get all posts for homepage
router.get('/', (req, res) => {
  console.log('======================');
  donations.findAll({

    include: [
      {
        model: users,
        attributes: ['id', 'organs_donated', 'biofluids_donated', 'reason', 'username'],

      },
    ]
  })

    .then(dbDonationsData => {
      const donations = dbDonationsData.map(donations => donations.get({ plain: true }));

      res.render('home', {
        donations,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

/* get single donations
router.get('/donations/:id', (req, res) => {
  donations.findOne({
    where: {
      id: req.params.id

    },
      include: [
        {
          model: users,
          attributes: ['id', 'organs_donated', 'biofluids_donated', 'reason', 'username'],
  
        }]
 
        
      
     
  })
    .then(dbDonationsData => {
      if (!dbDonationsData) {
        res.status(404).json({ message: 'No donations found with this id' });
        return;
      }

      const donations = dbDonationsData.get({ plain: true });

      res.render('donations', {
        donations,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
}); */

module.exports = router;


