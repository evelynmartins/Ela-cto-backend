const express = require("express");
const { listarTodosPerfis } = require("../controller/perfisController");
const router = express.Router();

router.get("/", (request, response) => {

    response.send("Hello Word")
});

module.exports = router;