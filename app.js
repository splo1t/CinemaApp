var express = require('express');
var app = module.exports = express();


app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use('/', require('./routes/index'));
app.use(express.static(process.cwd() + '/public'));

app.listen(process.env.PORT || 3000, function(){
  console.log('App is runned on port ' +  3000 || process.env.PORT);
});
module.exports = app;