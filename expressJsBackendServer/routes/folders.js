const express = require('express');
const router  = express.Router();
const generalQueries = require('../db/queries/generalQueries');
const axios = require('axios');

//This rout displays all emails saved into the database. To visualize these you can either make an API request to this end point or visit the url below using your browser.
//http://localhost:8000/debug
router.get('/', (req, res) => {

  generalQueries.getAllFolders()
  .then((response) => {
    res.json(response)
  })
});

//this rout is the POST rout to save new folders to the database
router.put('/new', (req, res) => {
  generalQueries.saveFolderToDb(res.req.body.postData)
  .then((resp) => {
    res.json(resp)

  })

  console.log(res.req.body.postData)

})

module.exports = router;

