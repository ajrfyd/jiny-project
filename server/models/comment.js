const comment = (sequelize, dataTypes) => {
  return sequelize.define('comment', {
    id: {
      type: dataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    content: {
      type: dataTypes.TEXT,
      allowNull: false,
    },
    registUser: {
      type: dataTypes.STRING(100),
      allowNull: false
    },
    articleId: {
      type: dataTypes.INTEGER,
      allowNull: false
    },
    commentId: {
      type: dataTypes.INTEGER,
      allowNull: true
    }
  },
  {
    paranoid: true,
    timestamps: true
  })
};

export default comment;
