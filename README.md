# wahabtv


All this upload file stuff comes from github at:

[NukaPunk](https://github.com/NukaPunk/mean-multer-ngf)

1. There are 2 ways to persist the data:
    1. to local mongo INSTANCE
    2. to mlab cloud-hosted mongo instance

2. Passwords below are x'd out
3.

                #########################################
                THESE ARE MY FIELDNOTES, YOU PROLLY DON'T WANT TO LOOK HERE (GIRO)

```npm init```

                Press ^C at any time to quit.
                name: (mean-multer-ngf)
                version: (1.0.0)
                keywords:
                license: (MIT)
                About to write to /Users/justingiron/Dropbox/3/x/bah/bench/wahab/mean-multer-ngf-master/package.json:

                {
                  "name": "mean-multer-ngf",
                  "version": "1.0.0",
                  "description": "A MEAN stack example of how to upload a file from a form in Angular JS using ngFileupload, and saving the file to a folder using Multer in Express/Node.",
                  "main": "app.js",
                  "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1",
                    "start": "node app.js"
                  },
                  "repository": {
                    "type": "git",
                    "url": "git+https://github.com/NukaPunk/mean-multer-ngf.git"
                  },
                  "author": "Joseph Szczesniak",
                  "license": "MIT",
                  "bugs": {
                    "url": "https://github.com/NukaPunk/mean-multer-ngf/issues"
                  },
                  "homepage": "https://github.com/NukaPunk/mean-multer-ngf#readme",
                  "dependencies": {
                    "angular": "^1.4.8",
                    "angular-messages": "^1.4.8",
                    "body-parser": "^1.14.2",
                    "express": "^4.13.3",
                    "gulp": "^3.9.0",
                    "mongoose": "^4.3.1",
                    "morgan": "^1.6.1",
                    "multer": "^1.1.0",
                    "ng-file-upload": "^10.1.9"
                  }
                }
            Is this ok? (yes) yes
              Tue May 16 14:24:34 ~/Dropbox/3/x/bah/bench/wahab/mean-multer-ngf-master

```npm install```

```npm install -g gulp```

                npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
                npm WARN deprecated minimatch@0.2.14: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
                npm WARN deprecated graceful-fs@1.2.3: graceful-fs v3.0.0 and before will fail on node releases >= v7.0. Please update to graceful-fs@^4.0.0 as soon as possible. Use 'npm ls graceful-fs' to find it in the tree.
                /usr/local/bin/gulp -> /usr/local/lib/node_modules/gulp/bin/gulp.js
                /usr/local/lib
                └─┬ gulp@3.9.1
                  ├── archy@1.0.0
                  ├─┬ chalk@1.1.3
                  │ ├── ansi-styles@2.2.1
                  │ ├── escape-string-regexp@1.0.5
                  │ ├─┬ has-ansi@2.0.0
                  │ │ └── ansi-regex@2.1.1
                  │ ├── strip-ansi@3.0.1
                  │ └── supports-color@2.0.0
                  ├── deprecated@0.0.1
                  ├─┬ gulp-util@3.0.8
                  │ ├── array-differ@1.0.0
                  │ ├── array-uniq@1.0.3
                  │ ├── beeper@1.1.1
                  │ ├── dateformat@2.0.0
                  │ ├─┬ fancy-log@1.3.0
                  │ │ └── time-stamp@1.1.0
                  │ ├─┬ gulplog@1.0.0
                  │ │ └── glogg@1.0.0
                  │ ├─┬ has-gulplog@0.1.0
                  │ │ └── sparkles@1.0.0
                  │ ├──
                  ...
                    ├─┬ through2@0.6.5
                    │ └─┬ readable-stream@1.0.34
                    │   ├── isarray@0.0.1
                    │   └── string_decoder@0.10.31
                    └─┬ vinyl@0.4.6
                      └── clone@0.2.0

```npm install --save-dev gulp```

                npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
                npm WARN deprecated minimatch@0.2.14: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
                npm WARN deprecated graceful-fs@1.2.3: graceful-fs v3.0.0 and before will fail on node releases >= v7.0. Please update to graceful-fs@^4.0.0 as soon as possible. Use 'npm ls graceful-fs' to find it in the tree.
                mean-multer-ngf@1.0.0 /Users/justingiron/Dropbox/3/x/bah/bench/wahab/mean-multer-ngf-master
                └── gulp@3.9.1
                  Tue May 16 11:34:18 ~/Dropbox/3/x/bah/bench/wahab/mean-multer-ngf-master
                gulp
                [11:34:45] Using gulpfile ~/Dropbox/3/x/bah/bench/wahab/mean-multer-ngf-master/gulpfile.js
                [11:34:45] Starting 'copy-vendor'...
                [11:34:45] Finished 'copy-vendor' after 52 ms
                [11:34:45] Starting 'default'...
                [11:34:45] Finished 'default' after 110 μs``
                  Tue May 16 11:34:45 ~/Dropbox/3/x/bah/bench/wahab/mean-multer-ngf-master
                  Tue May 16 14:38:08 ~/Dropbox/3/x/bah/bench/wahab/mean-multer-ngf-master
                $
```nodemon```

                [nodemon] starting `node app.js`
                Listening on port:  3000
                mongodb connection open
                { name: 'xx' }
                { fieldname: 'file',
                  originalname: 'Large Example Network Render (Bogota).PNG',
                  encoding: '7bit',
                  mimetype: 'image/png',
                  destination: 'uploads/',
                  filename: 'b725b44128bc89e77ddac91f02a932b3',
                  path: 'uploads/b725b44128bc89e77ddac91f02a932b3',
                  size: 29496 }
                POST /uploads
                200 81.411 ms - 299



**code to connect to mongo**

                var app = express();
                                     // ####################################
                                    // 201705161437L   EL MARTES   GIRO
                // var mongoURI = "mongodb://localhost:27017/mean-multer-ngf"; // replace with your mongodb url
                                  // CONNECT TO THE LOCAL MONGO INSTANCE
                // var mongoURI = "mongodb://localhost/mean-multer-ngf"; // replace with your mongodb url
                                // CONNECT TO THE MLAB MONGOLAB INSTANCE
                var mongoURI = "mongodb://heroku_2lg0r3jz:--SCS--@ds143211.mlab.com:43211/heroku_2lg0r3jz"
                                     // ####################################

                var MongoDB = mongoose.connect(mongoURI).connection;
                MongoDB.on('error', function (err) {
                  if (err) {
                    console.log('mongodb connection error', err);
                  } else {
                    console.log('mongodb connection successful');
                  }
                });

                MongoDB.once('open', function () {
                  console.log('mongodb connection open');
                });



**WRITES TO CLOUD MLAB MONGOLAB INSTANCE**

                mongoose.model("Video", VideoSchema);
                // mongoose.connect(process.env.MONGOLAB_URI)
                mongoose.connect("mongodb://heroku_st3prtwl:vqkjdi2p1vs7okint48ksvhhio@ds143141.mlab.com:43141/heroku_st3prtwl")
                module.exports = mongoose;


**WRITES TO LOCALMACHINE MONGODB INSTANCE**

                mongoose.model("Video", VideoSchema);
                mongoose.connect("mongodb://localhost/wahabtv");
                module.exports = mongoose;



**To connect TO LOCALMACHINE MONGO INSTANCE**

                AS DBOWNER
                using the mongo shell:
                rs-ds143211:PRIMARY>
use heroku_2lg0r3jz
                switched to db heroku_2lg0r3jz
                rs-ds143211:PRIMARY>
show collections;
                uploads
                system.indexes
                videos
                rs-ds143211:PRIMARY>
db.uploads.find();
                { "id" : ObjectId("591b47b6b8c150400352d546"), "name" : "xx", "created" : ISODate("2017-05-16T18:40:54.523Z"), "file" : { "size" : 29496, "path" : "uploads/b725b44128bc89e77ddac91f02a932b3", "filename" : "b725b44128bc89e77ddac91f02a932b3", "destination" : "uploads/", "mimetype" : "image/png", "encoding" : "7bit", "originalname" : "Large Example Network Render (Bogota).PNG", "fieldname" : "file" }, "v" : 0 }
                rs-ds143211:PRIMARY>



**To connect TO MONGOLAB MLAB INSTANCE**

                AS xgironx
                using the mongo shell:
                  Tue May 16 14:44:31 ~/Dropbox/3/x/bah/bench/wahab/wahabtv (exim_to_heroku)
mongo ds143211.mlab.com:43211/heroku_2lg0r3jz    -u xgironx@gmail.com    -p --SCS--civ
                MongoDB shell version: 3.0.4
                connecting to: ds143211.mlab.com:43211/heroku_2lg0r3jz
                rs-ds143211:PRIMARY>
db.uploads.find();
                { "id" : ObjectId("591b47b6b8c150400352d546"), "name" : "xx", "created" : ISODate("2017-05-16T18:40:54.523Z"), "file" : { "size" : 29496, "path" : "uploads/b725b44128bc89e77ddac91f02a932b3", "filename" : "b725b44128bc89e77ddac91f02a932b3", "destination" : "uploads/", "mimetype" : "image/png", "encoding" : "7bit", "originalname" : "Large Example Network Render (Bogota).PNG", "fieldname" : "file" }, "v" : 0 }
                rs-ds143211:PRIMARY>

                To connect using a driver via the standard MongoDB URI (what's this?):
                "mongodb://heroku_2lg0r3jz:--SCS--@ds143211.mlab.com:43211/heroku_2lg0r3jz"

export MONGOLAB_URI="mongodb://heroku_2lg0r3jz:--SCS--@ds143211.mlab.com:43211/heroku_2lg0r3jz"
