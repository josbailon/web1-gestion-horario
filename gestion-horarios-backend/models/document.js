'use strict';
module.exports = (sequelize, DataTypes) => {
  const Document = sequelize.define('Document', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    document: DataTypes.STRING,
  }, {});
  Document.associate = function(models) {
    // associations can be defined here
  };
  return Document;
};
