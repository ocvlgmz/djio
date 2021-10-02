const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: {type: String},
    body: {type: String},
    date: {type: Date},
    tags:[{type: String}],
    _author: {type: Schema.Types.ObjectId, ref: 'author'}
});

const AuthorSchema = new mongoose.Schema({
    name: {type: String},
    photo: {type: String},
    bio: {type: String},
    username: {type: String, index: true},
    posts:[{type: Schema.Types.ObjectId, ref: 'post'}],
    password: {type: String}
});

const Author = mongoose.model('author', AuthorSchema)
const Post = mongoose.model('post', PostSchema)

module.exports = { Post, Author }
