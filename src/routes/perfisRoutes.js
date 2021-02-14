const express = require('express');
const router = express.Router();
const controller = require("../controller/perfisController");

router.get("/", controller.listarTodosPerfis);
router.get("/:filhos", controller.pesquisarPorFilho);
router.post("/", controller.salvarPerfil);

module.exports = router;