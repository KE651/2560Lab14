module.exports = {
  "development": {
    "storage": "states.db",
    "dialect": "sqlite"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  } /*,
  "production": {
    "host" : ""
    "database": "",
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "dialect": "mssql"
  } */
  //can't use production mode due to Azure account issue
}
