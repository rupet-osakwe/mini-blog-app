const express = require('express')
const createPost = (req, res) => {

    res.json('from controller this is a post from the posts_router...'
    )
}
module.exports = createPost