const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blogs')
const app = express(console.log('express app started'))

app.get('/', (req, res) => {
    res.send('/blogs')
})

app.listen(3001)