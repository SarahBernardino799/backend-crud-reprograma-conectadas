const express = require('express');
const router = express.Router();
const bookController = require('../controllers/BookController');

//TODO: Criar rotas da aplicação
router.get("/", controller.getAnimes);
router.get("/:id", controller.getAnimesById);
router.post("/add", controller.addAnime);
router.patch("/edite/:id", controller.editeAnime);
router.delete("/delete/:id", controller.deleteAnime);

module.exports = router;
