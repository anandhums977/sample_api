const Blog = require('../models/Blogs')

const fetchAllBlogs = async() =>{
    return await Blog.find({}, { _id: 1, __v: 0 });
    
}

const createNewBlog =  async(bodyData) =>{
    const { title, content, author } = bodyData;
    return await Blog.create({ title, content, author });
}


const findABlogByID = async(id) =>{
    return await Blog.findById({_id: id})
}

module.exports ={
    fetchAllBlogs,
    createNewBlog,
    findABlogByID
}