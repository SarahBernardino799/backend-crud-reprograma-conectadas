const service = require('../services/BookService');
const mongoose = require('mongoose');

//TODO: Criar controllers da aplicação
const getAnimeById = async (req, res) => {
  const id = req.params.id;
  if(!mongose.Types.ObjectId.isValid(id)){
    res.status(400).send({ message: "ID é invalido, verifique a informação! e tente novamente."});
    return;
  }
  const anime = await serve.getAnimeById(id);
  if(!anime){
    res.status(404).send({ message: "Anime não foi encontrado!verifique a informação e digite novamente."});
    return;
  }
  res.send(anime);
};
