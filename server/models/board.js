const board = (sequelize, dataTypes) => {
  return sequelize.define('board', {
    id: {
      type: dataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    boardName: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },
    boardDesc: {
      type: dataTypes.TEXT,
      allowNull: true,
    }
  })
}

export default board;