import mongoose from "mongoose";
import Blog from "./model/Blog.js";

mongoose.connect("mongodb+srv://harsh:harsh@harsh.21iwvpb.mongodb.net/myDatabase?retryWrites=true&w=majority");

const article = await Blog.create({
    title: "Awesome post",
    slug: "Awesome-slug",
    author: "Harsh",
    content: "This is the best post ever",
    tags: ['featured', 'announcement']
});

console.log(article);


// find any data from the database

const blogWhere = await Blog.where("author").equals("Harsh");

console.log(blogWhere);

//find the data and filter the data 

const filteredData = await Blog.where("author").equals("Harsh").select("title author");

console.log(filteredData);