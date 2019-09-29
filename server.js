var express = require('express');
// var exphbs = require('express-handlebars');

var app = express();


// app.engine('handlebars',exphbs({defaultLayout:'main'}));
// app.set('view engine','handlebars');

// static public in other movie youtube...
app.use(express.static(__dirname + '/src'));

app.get('/',function(request, response){
  response.sendFile(__dirname + '/index.html');
});



// app.post('/guardar',function(req,res){
//   console.log(req.body);
// });

app.listen(3000, function(){
  console.log('Server express ready!');
});

