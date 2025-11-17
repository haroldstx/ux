const { Sequelize } = require("sequelize");
require("dotenv").config();

(async () => {
  try {
    // Usar DATABASE_URL si está definida, si no construir desde PG_*
    const url =
      process.env.DATABASE_URL ||
      `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_NAME_DEV}`;

    const sequelize = new Sequelize(url, {
      logging: false,
      dialect: process.env.PG_DIALECT || "postgres",
      dialectOptions: {},
    });

    await sequelize.authenticate();
    console.log("OK: conexión a la BD establecida.");
    await sequelize.close();
  } catch (err) {
    console.error("ERROR: falla al conectar a la BD:");
    console.error(err && err.stack ? err.stack : err);
    process.exit(1);
  }
})();
