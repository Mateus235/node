//biblioteca express
var express = require('express')

const app = express()


//chamando a biblioteca handlebars
const handlebars = require('express-handlebars')
//body-parser
const bodyParser = require('body-parser')

//Requisição da minha tabela
const post = require('./post')


//configurando o handlebars e o template engine
app.engine('handlebars', handlebars.engine({defaultLayout: 'main',  runtimeOptions: {
 allowProtoPropertiesByDefault: true,
 allowProtoMethodsByDefault: true

},}))
app.set('view.engine', 'handlebars')


//configurando body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())




//criar rota
app.get('/cad', function(req, res){
    res.render('formulario.handlebars')
})

//rota para a home
app.get('/', function(req, res){
post.findAll().then(function(posts){// find all pega tudo que esta no banco
    res.render('home.handlebars', {posts: posts})
})
})

//uma nova rota post
app.post('/add', function(req, res){
    post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    })

    .then(function(){

        res.redirect('/')
    })
    .catch(function(erro){
        res.send("Houve um erro:" + erro)
    })
})





//porta do protocolo http
app.listen(8081, function(){
    console.log("O servidor está rodando no endereço http://localhost:8081")

})













// app.get("/", function(req, res){
// res.sendFile("C:/Users/mateus.smartins/Documents/node/express/html/index.html")
// }
// );

// app.get("/sobre", function(req, res){
//     res.sendFile("C:/Users/mateus.smartins/Documents/node/express/html/sobre.html");
// }
// );

// app.get("/produtos", function(req, res){
//     res.send("Confira os nossos produtos");
// }
// );

// app.get("/ola/:nome/:cargo/:idade", function(req, res){
//     res.send("<h1>Ola " +req.params.nome + "</h1>" +
//     "<br><h2> Seu cargo e: " + req.params.cargo + 
//     "<br>Sua idade e: " + req.params.idade + "</h2>");               
// }
// );