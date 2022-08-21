const user = (sequelize, dataTypes) => {
  return sequelize.define('user', {
    id: {
      type: dataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    email: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },
    userName: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    role: {
      type: dataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: 1
    }
  }, {
    paranoid: true,
    timestamps: true
  })
}

export default user;