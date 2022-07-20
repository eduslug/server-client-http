const PORT = 3000;
const express = require('express')
const path = require('path');
const apiRouter = require('./rotes/api')

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/api',apiRouter)

app.listen(PORT, () => {
    console.log('server run on PORT', PORT)
})
