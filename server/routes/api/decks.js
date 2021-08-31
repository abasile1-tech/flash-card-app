const { request } = require('express');
const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Decks
router.get('/', async (req, res) => {
    const decks = await loadDecksCollection();
    res.send(await decks.find({}).toArray());
});

// Add Deck
router.post('/', async (req, res) => {
    const decks = await loadDecksCollection(); 
    await decks.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
});

// Delete Deck
router.delete('/:id', async (req, res) => {
    const decks = await loadDecksCollection(); 
    await decks.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    res.status(200).send();
});

async function loadDecksCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false', {
        useNewUrlParser: true
    });

    return client.db('flashcardapp').collection('decks');
}


module.exports = router;