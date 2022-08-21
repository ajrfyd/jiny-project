const article = (sequelize, dataTypes) => {
  return sequelize.define('article', {
    id: {
      type: dataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    content: {
      type: dataTypes.TEXT,
      allowNull: false,
    },
    author: {
      type: dataTypes.STRING(100),
      allowNull: false
    },
    viewCnt: {
      type: dataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    boardId: {
      type: dataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    paranoid: true,
    timestamps: true
  })
};

export default article;