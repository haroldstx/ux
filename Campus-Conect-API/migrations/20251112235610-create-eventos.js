"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Eventos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      //!referencia tabla usuarios
      usuarioId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "Usuarios",
          },
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      titulo: {
        type: Sequelize.STRING,
      },
      descripcion: {
        type: Sequelize.STRING,
      },
      fecha: {
        type: Sequelize.STRING,
      },
      lugar: {
        type: Sequelize.STRING,
      },
      tipo_evento: {
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
    await queryInterface.dropTable("Eventos");
    +(
      // eliminar la constraint que referencia Eventos desde Asistencia antes de dropear Eventos
      (+(await queryInterface
        .removeConstraint("Asistencia", "Asistencia_id_evento_fkey")
        .catch(() => {})))
    );
    +(await queryInterface.dropTable("Eventos"));
  },
};
