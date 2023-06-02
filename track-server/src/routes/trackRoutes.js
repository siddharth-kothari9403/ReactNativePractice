const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");

const track = mongoose.model('Track');

const router = express.Router();
//we require user to be signed in for these, hence we do this.
router.use(requireAuth);

router.get('/tracks', async (req, res) => {
    //in requireAuth, once we authenticated the user, our user was stored in req.user , get it here
    const tracks = await track.find({userId : req.user._id}); //find where user id is req.user._id

    res.send(tracks);
});

router.post('/tracks', async (req, res) => {
    // assuming we get the same structure as required from the app, something to be seen later
    const {name, locations} = req.body;

    if (!name || !locations){
        return res.status(422).send({error: "You must provide a name or a location"});
    }

    try{
        const rack = new track({name, locations, userId : req.user._id});
        await rack.save();
        res.send(rack);
    } catch (err) {
        res.status(422).send({error: err.message});
    }
    
});

module.exports = router;