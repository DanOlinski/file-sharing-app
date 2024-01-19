-- //This file is used to reset the db, using the command npm run db:reset as per package.json. The files that run when the command is called in the terminal are: bin/resetdb.js, db/schema, db/seeds

--Before running "npm run db:reset" you need to manually create the database(CREATE DATABASE template_db), this is not coded to be done automatically on "npm run db:reset" for safety reasons(avoid a user from using DROP DATABASE from within the code)
DROP TABLE IF EXISTS folders CASCADE;

CREATE TABLE folders (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  password VARCHAR(400) NULL,
  created_at TIMESTAMP DEFAULT NOW()
);