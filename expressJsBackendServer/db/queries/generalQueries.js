const db = require('../connection');

//this is a query to test db access. When visiting the url "http://localhost:8000/debug" you will see all user's emails that are in the database.
const getAllFolders = () => {

  //selecting all columns from users
  const sqlQuery = `
  SELECT name
  FROM folders;
  `;

  return db.query(sqlQuery)
    .then(res => {return res.rows})
    .catch((err) => console.log(err.message))//debug in terminal
};

module.exports = {
  getAllFolders,
};
