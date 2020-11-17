/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bin/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nvar app = express();\napp.use(cors());\napp.use(express.json()); //DB connection\n\n__webpack_require__(/*! ./configs/db.config */ \"./configs/db.config.js\"); // Routes\n\n\nvar indexRouter = __webpack_require__(/*! ./routes/index */ \"./routes/index.js\");\n\nvar usersRouter = __webpack_require__(/*! ./routes/users */ \"./routes/users.js\");\n\nvar exerciseRouter = __webpack_require__(/*! ./routes/exercises */ \"./routes/exercises.js\");\n\nmongoose.set('useCreateIndex', true);\napp.use('/', indexRouter);\napp.use('/users', usersRouter);\napp.use('/exercises', exerciseRouter);\nmodule.exports = app;\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./bin/server.js":
/*!***********************!*\
  !*** ./bin/server.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n  #!/usr/bin/env node\n*/\n\n/**\n * Module dependencies.\n */\nvar app = __webpack_require__(/*! ../app */ \"./app.js\");\n\nvar debug = __webpack_require__(/*! debug */ \"debug\")('myservertest:server');\n\nvar http = __webpack_require__(/*! http */ \"http\");\n/**\n * Get port from environment and store in Express.\n */\n\n\nvar port = normalizePort(process.env.PORT || '5000');\napp.set('port', port);\n/**\n * Create HTTP server.\n */\n\nvar server = http.createServer(app);\n/**\n * Listen on provided port, on all network interfaces.\n */\n\nserver.listen(port, function () {\n  console.log(\"Server is running on port: \".concat(port));\n});\nserver.on('error', onError);\nserver.on('listening', onListening);\n/**\n * Normalize a port into a number, string, or false.\n */\n\nfunction normalizePort(val) {\n  var port = parseInt(val, 10);\n\n  if (isNaN(port)) {\n    // named pipe\n    return val;\n  }\n\n  if (port >= 0) {\n    // port number\n    return port;\n  }\n\n  return false;\n}\n/**\n * Event listener for HTTP server \"error\" event.\n */\n\n\nfunction onError(error) {\n  if (error.syscall !== 'listen') {\n    throw error;\n  }\n\n  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port; // handle specific listen errors with friendly messages\n\n  switch (error.code) {\n    case 'EACCES':\n      console.error(bind + ' requires elevated privileges');\n      process.exit(1);\n      break;\n\n    case 'EADDRINUSE':\n      console.error(bind + ' is already in use');\n      process.exit(1);\n      break;\n\n    default:\n      throw error;\n  }\n}\n/**\n * Event listener for HTTP server \"listening\" event.\n */\n\n\nfunction onListening() {\n  var addr = server.address();\n  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;\n  debug('Listening on ' + bind);\n}\n\n//# sourceURL=webpack:///./bin/server.js?");

/***/ }),

/***/ "./configs/db.config.js":
/*!******************************!*\
  !*** ./configs/db.config.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar uri = process.env.ATLAS_URI;\nmongoose.connect(uri, {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n}).then(function (x) {\n  return console.log(\"MongoDB DB connection established succefully, \".concat(x.connections[0].name));\n})[\"catch\"](function (err) {\n  return console.log('Error:', err);\n});\n\n//# sourceURL=webpack:///./configs/db.config.js?");

/***/ }),

/***/ "./models/exercise.model.js":
/*!**********************************!*\
  !*** ./models/exercise.model.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _require = __webpack_require__(/*! os */ \"os\"),\n    type = _require.type;\n\nvar Schema = mongoose.Schema;\nvar exerciseSchema = new Schema({\n  username: {\n    type: String,\n    require: true\n  },\n  description: {\n    type: String,\n    required: true\n  },\n  duration: {\n    type: Number,\n    required: true\n  },\n  date: {\n    type: Date,\n    required: true\n  }\n}, {\n  timestamps: true\n});\nvar Exercise = mongoose.model('Exercise', exerciseSchema);\nmodule.exports = Exercise;\n\n//# sourceURL=webpack:///./models/exercise.model.js?");

/***/ }),

/***/ "./models/user.model.js":
/*!******************************!*\
  !*** ./models/user.model.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar Schema = mongoose.Schema;\nvar userSchema = new Schema({\n  username: {\n    type: String,\n    required: true,\n    unique: true,\n    trim: true,\n    minlength: 3\n  }\n}, {\n  timestamps: true\n});\nvar User = mongoose.model('User', userSchema);\nmodule.exports = User;\n\n//# sourceURL=webpack:///./models/user.model.js?");

/***/ }),

/***/ "./routes/exercises.js":
/*!*****************************!*\
  !*** ./routes/exercises.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var router = __webpack_require__(/*! express */ \"express\").Router();\n\nvar Exercise = __webpack_require__(/*! ../models/exercise.model */ \"./models/exercise.model.js\");\n\nrouter.route('/').get(function (req, res) {\n  Exercise.find().then(function (exercices) {\n    return res.json(exercices);\n  })[\"catch\"](function (err) {\n    return res.status(400).json('Erorr: ' + err);\n  });\n});\nrouter.route('/add').post(function (req, res) {\n  var username = req.body.username;\n  var description = req.body.description;\n  var duration = req.body.duration;\n  var date = Date.parse(req.body.date);\n  var newExercise = new Exercise({\n    username: username,\n    description: description,\n    duration: duration,\n    date: date\n  });\n  newExercise.save().then(function () {\n    return res.json('Exercise added!');\n  })[\"catch\"](function (err) {\n    return res.status(400).json('Error: ' + err);\n  });\n});\nmodule.exports = router;\n\n//# sourceURL=webpack:///./routes/exercises.js?");

/***/ }),

/***/ "./routes/index.js":
/*!*************************!*\
  !*** ./routes/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var router = __webpack_require__(/*! express */ \"express\").Router();\n/* GET home page. */\n\n\nrouter.get('/', function (req, res) {\n  res.send(\"Hello from Exercise-Tracker API\");\n});\nmodule.exports = router;\n\n//# sourceURL=webpack:///./routes/index.js?");

/***/ }),

/***/ "./routes/users.js":
/*!*************************!*\
  !*** ./routes/users.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var router = __webpack_require__(/*! express */ \"express\").Router();\n\nvar User = __webpack_require__(/*! ../models/user.model */ \"./models/user.model.js\");\n\nrouter.route('/').get(function (req, res) {\n  User.find().then(function (users) {\n    return res.json(users);\n  })[\"catch\"](function (err) {\n    return res.status(400).json('Error: ' + err);\n  });\n});\nrouter.route('/add').post(function (req, res) {\n  var username = req.body.username;\n  var newUser = new User({\n    username: username\n  });\n  newUser.save().then(function () {\n    return res.json('User added seccessfully!!');\n  })[\"catch\"](function (err) {\n    return res.status(400).json('Error: ' + err);\n  });\n});\nmodule.exports = router;\n\n//# sourceURL=webpack:///./routes/users.js?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"debug\");\n\n//# sourceURL=webpack:///external_%22debug%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"os\");\n\n//# sourceURL=webpack:///external_%22os%22?");

/***/ })

/******/ });