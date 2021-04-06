const express = require('express');
const app = express();

app.use(express.json({extended:false}));
app.use(express.static('public',{}));

app.get('/', function(request, response){
    response.sendFile(__dirname+'/public/index.html')
});

let ultimaLeitura = {
	nome:"Temperatura",
	valor: 0
};

app.post('/temperatura', function(request, response){
    ultimaLeitura = request.body;
    return response.status(200).send();
});

app.get('/temperatura', function(request, response){
    return response.status(200).json(ultimaLeitura);
});

app.listen(3000, function(){
    console.log("Servidor no ar");
});