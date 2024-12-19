const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');


const authorize = (req, res, next) => {
    console.log(req.headers.authorization);
    if(!req.headers.authorization){
        return res.json({ status:false,message: "Invalid authorization" });
    }
   next() 
};

router.get('/blogs',blogController.getAllBlog);
router.post('/add-blog',authorize,blogController.addBlog);
router.get('/blog/:blogId',blogController.findABlog)


// router.put('/update-blog/:blogId',blogController.updateBlog)
module.exports = router;