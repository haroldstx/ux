"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const usuarios = await queryInterface.bulkInsert(
      "Usuarios",
      [
        {
          firstName: "Juan",
          lastName: "Perez",
          correo: "juan.perez@example.com",
          password: "hashed_password_1",
          carrera: "Ingeniería de Sistemas",
          foto: "ana.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Ana",
          lastName: "Gomez",
          correo: "ana.gomez@example.com",
          password: "hashed_password_2",
          carrera: "Ingeniería Industrial",
          foto: "ana.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    const publicaciones = await queryInterface.bulkInsert(
      "Publicaciones",
      [
        {
          usuarioId: 1,
          titulo: "Venta de libros usados",
          contenido: "Vendo libros de matemáticas y física a buen precio.",
          categorias: "Venta,Libros,Estudios",
          fecha: "2023-11-10",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuarioId: 2,
          titulo: "Busco compañeros para proyecto",
          contenido: "Necesito dos personas para un proyecto de programación.",
          categorias: "Proyecto,Programación,Compañeros",
          fecha: "2023-11-12",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    const comentarios = await queryInterface.bulkInsert(
      "Comentarios",
      [
        {
          usuarioId: 2,
          publicacionId: 1,
          texto: "Estoy interesado en los libros, ¿cuánto cuestan?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuarioId: 1,
          publicacionId: 2,
          texto:
            "Yo puedo ayudarte con el proyecto, tengo experiencia en programación.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    const eventos = await queryInterface.bulkInsert(
      "Eventos",
      [
        {
          usuarioId: 1,
          titulo: "Charla sobre Inteligencia Artificial",
          descripcion: "Una charla introductoria sobre IA y sus aplicaciones.",
          fecha: "2023-11-15",
          lugar: "Auditorio Principal",
          tipo_evento: "Charla",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuarioId: 2,
          titulo: "Taller de Emprendimiento",
          descripcion: "Aprende a iniciar tu propio negocio.",
          fecha: "2023-11-20",
          lugar: "Sala de Conferencias 2",
          tipo_evento: "Taller",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    const asistencia = await queryInterface.bulkInsert(
      "Asistencia",
      [
        {
          usuarioId: 1,
          eventoId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuarioId: 2,
          eventoId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *li
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
