const router = require('express').Router();
const { donations, purpose } = require('../../models');


// get all purposes
router.get('/', (req, res) => {
purpose.findAll (
  {
    include : [
        {
            model: donations,
            attributes : [ 'id', 'reason_donated']
  }]
})
.then(purposeData => res.json(purposeData))
 .catch(err => {
   console.log(err);
   res.status(500).json(err)
 })
});

// get one purpose
router.get('/:id', (req, res) => {
    purpose.findOne (
      {
        where : {
            id: req.params.id
      },
      include : [
        {
            model: donations,
            attributes : [ 'id', 'reason_donated']
        },
]})
     .then(purposeData => res.json(purposeData))
     .catch(err => {
      console.log(err);
      res.status(500).json(err)
    });
   });  
   
   router.post('/', (req, res) => {
    purpose.create(req.body)
    .then(purposeData => res.status(200).json(purposeData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
    });
    
    router.put('/:id', (req, res) => {
        purpose.update(req.body, {
        where: {
          id: req.params.id
        }
      }) .then(purposeData => {
        if(!purposeData) {
          res.status(404).json({ message: 'purpose does not exist'});
          return;
        }
        res.json(purposeData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    });

   router.delete('/:id', (req, res) => {
    purpose.destroy ({
        where: {
          id: req.params.id
        }
      })
      .then(purposeData => {
        if(!purposeData) {
          res.status(404).json({ message: 'purpose does not exist'});
          return;
        }
        res.json(purposeData);
      })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
      
    });
  });

   module.exports = router;