const express = require('express');
const nunjucks = require('nunjucks');
const recipes = require("./recipes");

const server = express();

server.use(express.static('public'));
server.set("view engine", "njk");

nunjucks.configure("views", {
   express: server,
   autoescape: false,
   noCache: true
});

server.get('/', function(req, res) {
   return res.render("index", { items: recipes });
});

server.get('/receitas', function(req, res) {
   return res.render("receitas", { items: recipes });
});

server.get('/sobre', function(req, res) {
   return res.render("sobre");
});

server.get('/receita', function(req, res) {
   const id = req.query.id;

   const recipe = recipes.find(function(recipe) {
      return recipe.id == id;
   });

   if(!recipe) {
      return res.send("Receita não encontrada");
   }

   return res.render("receita", { item : recipe });
})

server.listen(5000, function() {
   console.log('server is running');
});

