var express = require('express'); 
var morgan = require('morgan'); "logs"
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {}
function createTemplate (data) {}
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    //var htmlTemplate = '
       <html>
    <head>
        <title>
            $(title)
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href = "ui/style.css" ref = "stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/"> Home is where you hang your hat </a>
        </div>
        <div> 
        <hr>
        <hdg>
        $(heading)
        </hdg>
        <div>
            $(date)
        </div>
        <div>
        $(content)
        </div>
    </body>
</html>
         
    return htmlTemplate;
    }

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/articleName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
