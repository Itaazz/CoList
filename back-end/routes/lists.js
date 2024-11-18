const express = require('express');
const router = express.Router();
const CoList = require('../models/CoList'); 


router.post('/create', async (req, res) => {
  try {
    const { title, description } = req.body;


    const newList = new CoList({ Title: title, Description: description });


    await newList.save();

    res.status(201).json(newList);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la création de la liste', error: err });
  }
});



router.delete('/:id', async (req, res) => {
    try {
      const deletedList = await CoList.findByIdAndDelete(req.params.id);
      if (!deletedList) {
        return res.status(404).json({ message: 'Liste non trouvée' });
      }
      res.status(200).json(deletedList);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la suppression de la liste', error });
    }
  });
  



router.get('/', async (req, res) => {
    try {
      const lists = await CoList.find();
      res.status(200).json(lists);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération des listes', error });
    }
  });
  
module.exports = router;
