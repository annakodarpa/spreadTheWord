module.exports = (sequelize, type) => {
  return sequelize.define('User', {
       // Model attributes are defined here
    id: {
      type: type.UUID,
      defaultValue: type.UUIDV1,
      allowNull: false,
      primaryKey: true
    },
    age: {
      type: type.INTEGER,
      allowNull: false
      // allowNull defaults to true
    }, 
    gender: {
      type: type.STRING,
      allowNull: false
      // allowNull defaults to true
    },
    howGotSick: {
      type: type.STRING,
    },
    fever: {
      type: type.DOUBLE,
    },
    cough: {
      type: type.INTEGER,
    },
    soreThroat: {
      type: type.INTEGER,
    },
    tired: {
      type: type.INTEGER,
    },
    hardToBreath: {
      type: type.INTEGER,
    },
    household: {
      type: type.INTEGER,
    },
    howManyMeetPerDay: {
      type: type.INTEGER,
    },
    howManyMeetPerWeek: {
      type: type.INTEGER,
    },
    position: {
      type: type.STRING,
    },
    previousConditions: {
      type: type.STRING,
    },
  })
}
