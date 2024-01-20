const db = require('../connection');

//this is a query to test db access. When visiting the url "http://localhost:8000/debug" you will see all user's emails that are in the database.
const getAllFolders = () => {

  //selecting all columns from users
  const sqlQuery = `
  SELECT name, id
  FROM folders;
  `;

  return db.query(sqlQuery)
    .then(res => {return res.rows})
    .catch((err) => console.log(err.message))//debug in terminal
};

const saveFolderToDb = (info) => {

  const values = [info];
  const sqlQuery = `
    INSERT INTO folders(name)
    VALUES ($1);
  `;

  return db.query(sqlQuery, values)
      .then(() => "user added to database")
      .catch((err) => console.log(err.message))//debug in terminal
};

module.exports = {
  saveFolderToDb,
  getAllFolders,
};
