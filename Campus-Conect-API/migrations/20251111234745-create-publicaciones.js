"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Publicaciones", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      //referencia tabla usuarios
      usuarioId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "Usuarios",
          },
          key: "id",
        },
        allowNull: false,
      },
      titulo: {
        type: Sequelize.STRING,
      },
      contenido: {
        type: Sequelize.STRING,
      },
      categorias: {
        type: Sequelize.STRING,
      },
      fecha: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Publicaciones");
  },
};
