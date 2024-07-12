// models/event.js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    image: DataTypes.STRING,
    document: DataTypes.STRING
  }, {});
  Event.associate = function(models) {
  };
  return Event;
};
