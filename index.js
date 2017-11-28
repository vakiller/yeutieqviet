var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static(__dirname));
app.set('views',__dirname);
app.set('view engine','html');
app.get('/',function(req,res){
    res.render('/index.html');
});
app.listen(port);