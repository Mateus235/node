// const sequelize = require('sequelize');

// const sequelize2 = new sequelize('testenode', 'root', '', {
// host:"localhost",
// dialect: 'mysql'
// });

//CRIANDO ESTRUTURA DA TABELA VIA SEQUELIZE
// const postagem = sequelize2.define('postagens', {
//     titulo: {
//         type: sequelize.STRING
//     },
//     conteudo: {
//         type: sequelize.TEXT
//     }
// })

/*Passando dados para a tabela
postagem.create({
    titulo: "Promocao dia das maes",
    conteudo:"No mes do dia das maes todas as lojas terao 50% de desconto nos esmaltes"  
})
*/

/* Executando a criaçao da tabela, só precisa ser feito uma vez

//postagem.sync({force:true}) */

// const usuario = sequelize2.define('usuarios', {
//     nome: {
//         type: sequelize.STRING 
//     },
//     sobrenome: {
//         type: sequelize.STRING
//     },
//     idade: {
//         type: sequelize.INTEGER
//     },
//     email: {
//         type: sequelize.STRING
//     }
// })

/*inserindo dados na tabela

usuario.create({
     nome: "mateus",
     sobrenome: "martins",
     idade: "19",
     email: "mateus@gmail.com"
})
*/

//usuario.sync({force:true})

/* Teste de conexao com o banco
sequelize2.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha  ao se conectar" +erro)
})
*/