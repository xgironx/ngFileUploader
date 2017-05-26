                        // <!-- 201705241224L   EL MIERCOLES   GIRO -->

var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var index = require('./routes/index');
var uploads = require('./routes/uploads');

var app = express();
                     // ####################################
                    // 201705161437L   EL MARTES   GIRO
// var mongoURI = "mongodb://localhost:27017/mean-multer-ngf"; // replace with your mongodb url
                  // CONNECT TO THE LOCAL MONGO INSTANCE
                //   var mongoURI = "mongodb://localhost/mean-multer-ngf"; // replace with your mongodb url
                //   var mongoURI = "mongodb://localhost/uploads"; // replace with your mongodb url
                // CONNECT TO THE MLAB MONGOLAB INSTANCE
                            // $ mongo ds143211.mlab.com:43211/heroku_2lg0r3jz    -u xgironx@gmail.com    -p choppersciv
                            //                             MongoDB shell version: 3.0.4
                            // connecting to: ds143211.mlab.com:43211/heroku_2lg0r3jz
                            // rs-ds143211:PRIMARY> db.uploads.find();
                            // { "_id" : ObjectId("591b47b6b8c150400352d546"), "name" : "xx", "created" : ISODate("2017-05-16T18:40:54.523Z"), "file" : { "size" : 29496, "path" : "uploads/b725b44128bc89e77ddac91f02a932b3", "filename" : "b725b44128bc89e77ddac91f02a932b3", "destination" : "uploads/", "mimetype" : "image/png", "encoding" : "7bit", "originalname" : "Large Example Network Render (Bogota).PNG", "fieldname" : "file" }, "__v" : 0 }
                           var mongoURI = "mongodb://heroku_2lg0r3jz:pc3ovpqacvjur8c7sah0r8ehpm@ds143211.mlab.com:43211/heroku_2lg0r3jz"
var MongoDB = mongoose.connect(mongoURI).connection;
    MongoDB.on('error', function (err) { if (err) { console.log('mongodb connection error', err); } else { console.log('mongodb connection successful'); } });
    MongoDB.once('open', function () { console.log('mongodb connection open');                                                         });

app.use(           logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(  { extended: false } )   );

// set up routes
app.use(express.static( 'public')                       );
app.use(                '/'         , index             );
app.use(                '/uploads'  , uploads           );

// catch 404 and forward to error handler
app.use(function(               req, res, next)    { var err = new Error('Not Found');  err.status = 404;         next(err);            });

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(   err,    req, res, next)    { console.log(err); res.status(      err.status || 500   ); res.send(err);           });
}
// production error handler
// no stacktraces leaked to user
app.use(function(       err,    req, res, next)    { console.log(err); res.status(      err.status || 500   ); res.send(err.message);   });
                            // ####################################
                            // 201705241609L   EL MIERCOLES   GIRO
                            // var server  = app.listen(3000, function()          { var port    = server.address().port; console.log('Listening on port: ', port);        });
var server  = app.listen(4444, function()          { var port    = server.address().port; console.log('Listening on port: ', port);        });

module.exports = app;
