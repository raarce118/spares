const router = require('express').Router();
const { users, donations } = require('../../models');


// get all donations
router.get('/', (req, res) => {
    donations.findAll(
    {
      include: [
        {
          model: users,
          attributes: [ 'id', 'organs_donated', 'biofluids_donated', 'reason', 'username', 'email', 'password' ],
        }]
    })
    .then(donationsData => res.json(donationsData))
    .catch(err => {
      res.status(500).json(err);
    });
    });

// get one donation
router.get('/:id', (req, res) => {
    donations.findOne (
      {
        where : {
            id: req.params.id
      },
        include: [
          {
            model: users,
            attributes: [ 'id', 'organs_donated', 'biofluids_donated']
          }]
        })
     .then(donationsData => res.json(donationsData))
     .catch(err => {
      console.log(err);
      res.status(500).json(err)
    });
   });
  
   
   router.post('/', (req, res) => {
    donations.create(req.body)
    .then(donationsData => res.status(200).json(donationsData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
    });
    
    router.put('/:id', (req, res) => {
        donations.update(req.body, {
        where: {
          id: req.params.id
        }
      }) .then(donationsData => {
        if(!donationsData) {
          res.status(404).json({ message: 'No Donation'});
          return;
        }
        res.json(donationsData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    });

   router.delete('/:id', (req, res) => {
    donations.destroy ({
        where: {
          id: req.params.id
        }
      })
      .then(donationsData => {
        if(!donationsData) {
          res.status(404).json({ message: 'No Donation'});
          return;
        }
        res.json(donationsData);
      })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
      
    });
  });

   module.exports = router;