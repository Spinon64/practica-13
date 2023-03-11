var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.use("/assets", express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.use("/", function (req, res, next){
    console.log("Request Url:" + req.url);
    next();
});

app.get("/", function(req, res){
    res.render("index");
});

app.get("/person/:id", function (req, res) {
    let ID = req.params.id, valor;
    let numero = Array.from({ lenght: ID});
        if(ID % 2 == 0){
            valor = "par";
        } else {
            valor = "impar";
        }
    res.render("person", {ID, valor, numero});
});

app.get("/api", function (req, res){
    res.json({ firstname: "John", lastname: "Doe"});
});


app.get("/personas", (req, res)=>{
    let data = [
        {id:1, nombre: "Hugo", apellido: "Estrada Ramirez", edad: 19},
        {id:2, nombre: "Estela", apellido: "Perez Suarez", edad: 18},
        {id:3, nombre: "Sabrina", apellido: "Contreras Morales", edad: 17},
    ];
    res.render("personas", {data});
});


app.listen(port);

