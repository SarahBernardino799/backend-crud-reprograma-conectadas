const service = require('../services/BookService');
const mongoose = require('mongoose');

//TODO: Criar controllers da aplicação

const getAnimes = async (req, res) => {
 try{
   const allAnimes = await serve.find();
   req.status(200).json(allAnimes)
     } catch (error) {
   console.log(error)
   res.status(500).json({ message: error.message})
     }
}

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
const  deleteAnime = async (req, res) =>{
const {id} = req.params
 /*adicione o model adicionado na sua schema no caso aqui é 'serve'*/
const deleted = await serve.findByIdAndDelete(id)
const message = `O anime do ${deleted.titulo} foi deletada com sucesso.`
res.status(200).json({message})
} catch (error) {
console.error(error)
res.status(500).json({message:"não foi possivel deletar o Anime"})

}
module.exports = {
  getAnimes,
  getAnimeById,
 deleteAnime
}
