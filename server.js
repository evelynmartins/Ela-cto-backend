const express = require("express");
const app = express();
const port = 8081;
const bodyParser = require("body-parser");

app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`)
});

app.use(bodyParser.json());

const index = require("./src/routes/index");
const perfis = require("./src/routes/perfisRoutes");

app.use("/", index);
app.use("/perfis", perfis);