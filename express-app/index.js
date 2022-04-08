const express = require('express');
const cors = require('cors');
require('dotenv').config();

const bodyParser= require('body-parser');
const path = require('path');

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.json({
      message: 'Hello World'
  });
});

app.get('/tab', function(req, res){
  res.json({
    message: 'Coucou tab'
  });
});

// app.get('/:name', (req, res) => {
//     let name = req.params.name;

//     res.json({
//         message: `Hello ${name}`
//     });
// });

const port = process.env.PORT || 80
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});