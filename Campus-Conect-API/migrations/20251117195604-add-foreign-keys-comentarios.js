"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // Agregar columna usuarioId con FK
    await queryInterface.addColumn("Comentarios", "usuarioId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Usuarios",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });

    // Agregar columna publicacionId con FK
    await queryInterface.addColumn("Comentarios", "publicacionId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Publicaciones",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    // Remover columnas si se hace rollback
    await queryInterface.removeColumn("Comentarios", "usuarioId");
    await queryInterface.removeColumn("Comentarios", "publicacionId");
  },
};
