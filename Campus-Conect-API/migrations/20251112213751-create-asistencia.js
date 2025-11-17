"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Asistencia", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // id_usuario: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: {
      //       tableName: "Usuarios",
      //     },
      //     key: "id",
      //   },
      //   allowNull: false,
      // },
      // id_evento: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: {
      //       tableName: "Eventos",
      //     },
      //     key: "id",
      //   },
      //   allowNull: false,
      // },
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
    await queryInterface.dropTable("Asistencia");
  },
};
