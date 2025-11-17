"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Comentarios", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      // //!referencia tabla usuarios
      // usuarioId: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: {
      //       tableName: "Usuarios",
      //     },
      //     key: "id",
      //   },
      //   allowNull: false,
      // },
      // //!referencia tabla publicaciones
      // publicacionId: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: {
      //       tableName: "Publicaciones",
      //     },
      //     key: "id",
      //   },
      //   onUpdate: "CASCADE",
      //   onDelete: "CASCADE",
      // },
      texto: {
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
    await queryInterface.dropTable("Comentarios");
  },
};
