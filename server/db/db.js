const { Sequelize } = require('sequelize');
const UserModel = require('./models/user')


// Option 2: Passing parameters separately (other dialects)
const sequelizeInst = new Sequelize('Spread', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });
 
const User = UserModel(sequelizeInst, Sequelize);

// (async () => {
//     try {
//       await User.sync({ force: true });
//       console.log("The table for the User model was just (re)created!");
//     } catch(err) {
//       console.log(err);
//     }
//   })();
// (async () => {
//     try {
//         await sequelizeInst.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// })();

module.exports = {
    User
  }
