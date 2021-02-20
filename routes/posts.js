const router = require("express").Router();
const User = require("../modal/User");
const verify = require('./verifyToken')

router.get('/', verify, async (req, res) => {
//  res.json({posts: {title: 'my first post', description: 'This is the first post description'}});
    // res.send(req.user);
    
    const test = await User.findOne({ _id: req.user })
    res.json(test);
});


module.exports = router; 