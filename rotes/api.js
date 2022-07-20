const express = require('express');
const bodyParser = require('body-parser');
const posts = require('../model/post')
const router = express.Router();
const cors = require('cors');

const options = {

    options: "http://localhost:3000"
    
}

router.use(cors(options));

router.get("/all", (request, response) => {

    response.json(JSON.stringify(posts.getAll()))

})

router.post("/new", bodyParser.json(), (request, response) => {


    let title = request.body.title;
    let description = request.body.description;

    posts.newPost(title, description);

    response.send('post adicionado');
})

module.exports = router;