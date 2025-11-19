const { Usuarios } = require("../models");

const createNewUser = async (req, res) => {
  console.log("Body de la funcion:", req.body);
  //no hace validaciones de los campos en especifico, y del if, salta al else
  if (!req.body.correo || !req.body.password) {
    return res
      .status(400)
      .json({ message: "El email o la contraseña no pueden estar vacíos" });
  } else {
    if (!Usuarios || typeof Usuarios.findOne !== "function") {
      console.error(
        "Modelo Usuarios no disponible o findOne no es función:",
        Usuarios
      );
      return res.status(100).json({
        status: "Pedo del servidor",
        message: "Modelo Usuarios no cargado",
      });
    }
    try {
      console.log("Antes de Usuarios.findOne");
      const repeat_email = await Usuarios.findOne({
        where: {
          correo: req.body.correo,
        },
      });
      console.log("repeat_email:", repeat_email);

      if (!repeat_email) {
        console.log("repeat_email:", repeat_email);
        const newUser = await Usuarios.create(req.body);
        return res.status(201).json({
          status: "Created",
          message: "Usuaripoo Creado",
          date: newUser,
        });
      } else {
        return res.status(409).json({
          status: "Email Conflict",
          message: "El usuario existe",
        });
      }
    } catch (error) {
      console.error("createNewUser error:", error);
      return res.status(500).json({
        status: "Pedo del servidor",
        message: error && error.message ? error.message : String(error),
      });
    }
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await Usuarios.findAll();
    if (users.length === 0) {
      return res.status(400).json({
        status: "Usuarios no encontrados",
        message: "Error no existen usuarios en la bd",
        error: error.message,
      });
    }
    return res.status(200).json(users);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error interno del servidor", error: error.message });
  }
};

module.exports = {
  getUsers,
  createNewUser,
};
