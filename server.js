var express = require('express'); 
var morgan = require('morgan'); "logs"
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
'article-One' : {
    title: 'Article One - Sushil',
    heading: 'Article One',
    date: '17 Feb 2017',
    content: ' This is the content for Article One. This is the content for Article One. This is the content for Article One. This is the content for Article One. This is the content for Article One. This is the content for Article One. This is the content for Article One. This is the content for Article One.'
    },
'article-Two' : {
    title: 'Article two - Sushil',
    heading: 'Article Two',
    date: '18 Feb 2017',
    content: 'This is the content for Article Two. This is the content for Article Two. This is the content for Article Two. This is the content for Article Two.This is the content for Article Two. This is the content for Article Two. This is the content for Article Two. This is the content for Article Two.'
    },
 'article-Three' : {
    title: 'Article Three - Sushil',
    heading: 'Article Three',
    date: '19 Feb 2017',
    content: 'This is the content for Article Three. This is the content for Article Three. This is the content for Article Three. This is the content for Article Three.This is the content for Article Three. This is the content for Article Three. This is the content for Article Three. This is the content for Article Three.'
    },
};
function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `
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
                </div>
            </body>
</html>;      '
   
    return htmlTemplate;
   }

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/articleName', function (req, res) {
//articleName == article-one
//articles[articleName] == {} content object for articles
var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80;
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!);
});