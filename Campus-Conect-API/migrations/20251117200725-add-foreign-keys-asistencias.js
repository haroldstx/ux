"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Agregar columna usuarioId con FK a asistencias
    await queryInterface.addColumn("Asistencia", "usuarioId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Usuarios",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
    // Agregar columna eventoId con FK a asistencias
    await queryInterface.addColumn("Asistencia", "eventoId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Eventos",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    // Remover columnas si se hace rollback
    await queryInterface.removeColumn("Asistencia", "usuarioId");
    await queryInterface.removeColumn("Asistencia", "eventoId");
  },
};
