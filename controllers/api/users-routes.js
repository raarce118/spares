const router = require('express').Router();
const { users, organs, biofluids, purpose } = require ('../../models'); 


//Get all Donors
router.get('/', (req, res) => {
     users.findAll(

     {
        include : [
          {
          model: organs,
          attributes : [ 'id', 'organ_name']
      },
      {
          model: biofluids,
          attributes: [ 'id', 'biofluids_name']
      },
      {
          model: purpose,
          attributes : [ 'id', 'purpose_name']
    }]


    })
         .then(usersData => res.json(usersData))
         .catch(err => {
             console.log(err);
             res.status(500).json(err);
         });
});

//Get one Donor
router.get('/:id', (req, res) => {
     users.findOne(
        {
            where : {
                id: req.params.id
          },
          include : [
            {
            model: organs,
            attributes : [ 'id', 'organ_name']
        },
        {
            model: biofluids,
            attributes: [ 'id', 'biofluids_name']
        },
        {
            model: purpose,
            attributes : [ 'id', 'purpose_name']
      }]
    })

         .then(usersData => {
         if (!usersData) {
         res.status(404).json({ message: 'No user found with this id' });
         return;
         }
         res.json(usersData);
         })
         .catch(err => {
         console.log(err);
         res.status(500).json(err);
         });
        });
         
        // Create new user
        router.post('/', (req, res) => {
            users.create({
              username: req.body.username,
              email: req.body.email,
              password: req.body.password
            })
              .then(usersData => res.json(usersData))
              .catch(err => {
                console.log(err);
                res.status(500).json(err);
              });
          });
          
        // login
          router.post('/login', (req, res) => {
            users.findOne({
              where: {
                email: req.body.email
              }
            }).then(usersData => {
              if (!usersData) {
                res.status(400).json({ message: 'No user with that email address!' });
                return;
              }
          
              const validPassword = usersData.checkPassword(req.body.password);
          
              if (!validPassword) {
                res.status(400).json({ message: 'Incorrect password!' });
                return;
              }
          
              res.json({ user: usersData, message: 'You are now logged in!' });
            });
          });
        
          router.delete('/:id', (req, res) => {
            users.destroy({
              where: {
                id: req.params.id
              }
            })
              .then(usersData => {
                if (!usersData) {
                  res.status(404).json({ message: 'No user found with this id' });
                  return;
                }
                res.json(usersData);
              })
              .catch(err => {
                console.log(err);
                res.status(500).json(err);
              });
          });
          
          module.exports = router;
  
     
  
     