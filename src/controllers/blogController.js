const Blog = require('../models/Blogs');
const blogService = require('../services/blogService');

const getAllBlog = async (req, res) => {
  const blogList = await blogService.fetchAllBlogs();
 res.json({data: blogList});
};

const addBlog = async (req, res) => {
  
 const insertBlog = await blogService.createNewBlog(req.body)
  if (insertBlog) {
    res.json({ message: "inserted successfully", data: insertBlog });
  }
  else{
    res.json({ message: "insertion failed!", data: null });
  }
};

const findABlog = async (req, res) => {
  const id = req.params.blogId;
  const fetchedBlog = await blogService.findABlogByID(id);
  if(fetchedBlog){
    res.json({ message: "data fetched successfully", data: fetchedBlog });
  }  else{
    res.json({ message: "failed to fetch data !", data: null });
  }

};




module.exports = {
  getAllBlog,
  addBlog,
  findABlog
};
