// server/models/todolistModel.js

const { Sequelize, DataTypes } = require("sequelize");
const db = require("../database/dbConfig");
const Disparu = require("./disparuModel");

const Todolist = db.define("Todolist", {
  taches: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Ajoutez d'autres champs nécessaires pour la Todolist
});

// Établir la relation avec le modèle Disparu
Todolist.belongsTo(Disparu, { foreignKey: "id_soldat", onDelete: "CASCADE" });
Disparu.hasOne(Todolist, { foreignKey: "id_soldat" });

module.exports = Todolist;
