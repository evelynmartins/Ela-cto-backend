const perfis = require("../model/perfis.json");
const fs = require('fs');

const listarTodosPerfis = (request, response) => {

    response.status(200).send(perfis);
};

function pesquisarPorFilho(request, response) {

    const perfilEncontrado = perfis.filter((Perfil)=>{
        return Perfil.id == Number(request.params.id)
        
    });

    if (perfilEncontrado.length > 0) {
        response.status(200).send(perfilEncontrado)
    } else {
        response.status(400).send("Perfil não encontrado.")
    }

};

const salvarPerfil = (request,response) => {
    const id = request.body.id;
const nome = request.body.Nome;
const arroba = request.body.@;
const tema = request.body.Tema;
const filhos = request.body.Filhos;

perfis.push(
    {
        id,
     nome,
     perfil,
     tema,
     filhos
 }
 );

fs.writeFile("./src/model/perfis.json", JSON.stringify(perfis), (error) => {
    console.log(error)});

    response.status(201).send(perfis);

};

module.exports = {
    listarTodosPerfis,
    pesquisarPorFilho, salvarPerfil}