const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

//to get the token from the user
module.exports = (req, res, next) => {
    const {authorization} = req.headers;

    //to check whether the jwt is valid or not
    if (!authorization){
        return res.status(401).send({error: 'You must be logged in'});
    }

    //authorization looks like 'Bearer jwt';

    const token = authorization.replace('Bearer ', '');
    jwt.verify(token, 'MY_SECRET_KEY', async (err, payload) => {
        if (err){
            return res.status(401).send({error: 'You must be logged in'});
        }

        const { userId } = payload;
        const user = await User.findById(userId);
        req.user = user;

        next();
    });
};