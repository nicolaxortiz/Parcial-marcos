import express from "express";
import bodyParser from "body-parser";
import { connectDB } from "./config/db.js";
import { propertyRouter } from "./routes/property.js";
import { officeRouter } from "./routes/office.js";
import { costumerRouter } from "./routes/costumer.js";
import { visitsRouter } from "./routes/visits.js";

const db = connectDB();
const app = express();
const port = process.env.PORT;

//Body-parser para analizar el body de la peticion a traves de la url
app.use(bodyParser.urlencoded({ extended: false }));

//Convertimos la peticion en un JSON
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//Rutas
app.use("/api/v1/property", propertyRouter);
app.use("/api/v1/office", officeRouter);
app.use("/api/v1/costumer", costumerRouter);
app.use("/api/v1/visits", visitsRouter);

app.listen(port, () => {
  console.log("servidor funcionando en el puerto " + port);
});
