const express = require("express");
const bodyParser = require("body-parser");
const swaggerUI = require("swagger-ui-express");

const config = require("../config.js")
const user = require("./components/user/network");
const auth = require("./components/auth/network");
const app = express();

app.use(bodyParser.json());
const swaggerDoc = require("./swagger.json");

// RUTAS

app.use("/api/user", user);
app.use("/api/auth", auth);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.listen(config.api.port, () => 
  console.log("API escuchando el puerto: ", config.api.port)
);