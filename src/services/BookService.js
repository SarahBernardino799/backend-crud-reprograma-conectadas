const model = require('../infra/database/models/animes');

//TODO: Criar service da aplicação
const getAnimes = async () =>{
  return await model.find();
};
const getAnimesById = async (id) =>{
  return await model.findById(id);
};
module.exports = {
  getAnimes,
 getAnimesById,
};
